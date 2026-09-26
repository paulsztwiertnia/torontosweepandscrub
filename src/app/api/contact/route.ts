import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = process.env.CONTACT_TO_EMAIL ?? "";
const FROM = process.env.CONTACT_FROM_EMAIL ?? "";

const MAX_FIELD = 5000;

function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function turnstileSecret() {
    if (process.env.TURNSTILE_SECRET_KEY) return process.env.TURNSTILE_SECRET_KEY;
    if (process.env.NODE_ENV === "development") return "1x0000000000000000000000000000000AA";
    return "";
}

async function verifyCaptcha(token: string, remoteIp: string | null) {
    const secret = turnstileSecret();
    if (!secret) return false;

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, response: token, remoteip: remoteIp || undefined }),
    });
    const result = await response.json().catch(() => null);
    return Boolean(result && typeof result === "object" && "success" in result && result.success);
}

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not set");
        return NextResponse.json({ error: "Could not send your message." }, { status: 500 });
    }

    if (!TO || !FROM) {
        console.error("CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not set");
        return NextResponse.json({ error: "Could not send your message." }, { status: 500 });
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    if (!body || typeof body !== "object") {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const { source, fields, captchaToken } = body as { source?: unknown; fields?: unknown; captchaToken?: unknown };
    if (typeof source !== "string" || source.length > 80 || !fields || typeof fields !== "object" || Array.isArray(fields)) {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    if (typeof captchaToken !== "string" || captchaToken.length < 10) {
        return NextResponse.json({ error: "Complete the captcha." }, { status: 400 });
    }

    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const captchaOk = await verifyCaptcha(captchaToken, forwardedFor);
    if (!captchaOk) {
        return NextResponse.json({ error: "Captcha failed. Try again." }, { status: 400 });
    }

    const lines: string[] = [];
    let replyTo = "";
    let name = "";

    for (const [key, value] of Object.entries(fields as Record<string, unknown>)) {
        if (!/^[a-z0-9_-]{1,40}$/i.test(key)) continue;
        const text = Array.isArray(value)
            ? value.filter((item): item is string => typeof item === "string").join(", ")
            : typeof value === "string"
                ? value
                : "";
        const trimmed = text.trim().slice(0, MAX_FIELD);
        if (!trimmed) continue;
        if (key === "email") {
            if (!isEmail(trimmed)) {
                return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
            }
            replyTo = trimmed;
        }
        if (key === "name") name = trimmed;
        const label = key.replace(/[_-]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
        lines.push(`${label}: ${trimmed}`);
    }

    if (!replyTo || !name) {
        return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
        from: FROM,
        to: [TO],
        replyTo,
        subject: `${source} — ${name}`.slice(0, 180),
        text: lines.join("\n"),
    });

    if (error) {
        console.error("Resend error", error);
        return NextResponse.json({ error: "Could not send your message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}

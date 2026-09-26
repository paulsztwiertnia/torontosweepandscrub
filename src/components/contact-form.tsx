"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useRef, useState } from "react";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    || (process.env.NODE_ENV === "development" ? "1x00000000000000000000AA" : "");

type TextField = {
    type: "text" | "email" | "tel" | "textarea" | "number";
    name: string;
    label: string;
    required?: boolean;
    placeholder?: string;
};

type CheckField = {
    type: "checks";
    name: string;
    label: string;
    options: string[];
};

export type ContactField = TextField | CheckField;

const inputClass = "mt-1 w-full rounded-sm border border-neutral-500 bg-white px-3 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400";

export function ContactForm({
    fields,
    id,
    source = "Contact",
    submitLabel = "Send",
}: {
    fields: ContactField[];
    id?: string;
    source?: string;
    submitLabel?: string;
}) {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [error, setError] = useState("");
    const [captchaToken, setCaptchaToken] = useState("");
    const turnstileRef = useRef<TurnstileInstance>(undefined);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!captchaToken) {
            setError("Complete the captcha.");
            setStatus("error");
            return;
        }

        setStatus("sending");
        setError("");

        const data = new FormData(event.currentTarget);
        const payload: Record<string, string | string[]> = {};
        for (const field of fields) {
            if (field.type === "checks") {
                payload[field.name] = data.getAll(field.name).map(String);
            } else {
                payload[field.name] = String(data.get(field.name) ?? "");
            }
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ source, fields: payload, captchaToken }),
            });
            const body = await response.json().catch(() => null);
            if (!response.ok) {
                setCaptchaToken("");
                turnstileRef.current?.reset();
                setError(typeof body?.error === "string" ? body.error : "Could not send your message.");
                setStatus("error");
                return;
            }
            setStatus("sent");
        } catch {
            setError("Could not send your message.");
            setStatus("error");
        }
    }

    if (status === "sent") {
        return <p className="rounded-md border border-neutral-200 px-4 py-6 text-center">Thank you. Your message has been sent.</p>;
    }

    return (
        <form id={id} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
                {fields.map((field) => {
                    if (field.type === "checks") {
                        return (
                            <fieldset key={field.name}>
                                <legend className="text-base font-normal text-black">{field.label}</legend>
                                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                                    {field.options.map((option) => (
                                        <label key={option} className="flex items-center gap-2 text-sm font-normal">
                                            <input type="checkbox" name={field.name} value={option} className="size-3.5" />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                        );
                    }

                    return (
                        <div key={field.name}>
                            <label htmlFor={field.name} className="text-base font-normal text-black">{field.label}</label>
                            {field.type === "textarea" ? (
                                <textarea id={field.name} name={field.name} required={field.required} placeholder={field.placeholder} rows={4} className={inputClass} />
                            ) : (
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    required={field.required}
                                    placeholder={field.placeholder}
                                    min={field.type === "number" ? 0 : undefined}
                                    className={inputClass}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            {turnstileSiteKey ? (
                <Turnstile
                    ref={turnstileRef}
                    siteKey={turnstileSiteKey}
                    onSuccess={setCaptchaToken}
                    onExpire={() => setCaptchaToken("")}
                    onError={() => setCaptchaToken("")}
                />
            ) : (
                <p className="text-sm text-red-700">Captcha is unavailable.</p>
            )}
            {error ? <p className="text-sm text-red-700">{error}</p> : null}
            <button
                type="submit"
                disabled={status === "sending" || !captchaToken}
                className="w-full rounded-sm bg-[#61B6CE] px-8 py-3 text-sm font-semibold text-white hover:bg-[#4aa3bb] disabled:opacity-70 sm:w-auto"
            >
                {status === "sending" ? "Sending…" : submitLabel}
            </button>
        </form>
    );
}

export const quoteFields: ContactField[] = [
    { type: "text", name: "name", label: "Full Name", required: true, placeholder: "Name" },
    { type: "tel", name: "phone", label: "Phone Number", required: true, placeholder: "123-456-7890" },
    { type: "email", name: "email", label: "Email Address", required: true, placeholder: "Email" },
    { type: "number", name: "square_feet", label: "Approximate Size of Area", required: true, placeholder: "Square Feet Area" },
    { type: "text", name: "company", label: "Company Name", placeholder: "Company" },
    { type: "textarea", name: "additional_details", label: "Additional Details", placeholder: "Any Additional Information or Special Requests" },
];

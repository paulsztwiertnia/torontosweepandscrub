"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img
            src="/assets/Toronto-SS-logo.png"
            alt="Toronto Sweep and Scrub"
            width={500}
            height={196}
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <nav aria-label="Menu" className="hidden items-center lg:flex">
          {navItems.map((item, index) => {
            const active = isActive(pathname, item.href);
            return (
              <div key={item.href} className="flex items-center">
                {index > 0 ? <span className="mx-3 h-4 w-px bg-neutral-400" aria-hidden="true" /> : null}
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-1 py-2 text-[15px] font-medium text-black hover:text-[#61B6CE] ${
                    active ? "before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[#61B6CE] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#61B6CE]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-black lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav aria-label="Menu" className="border-t border-neutral-200 px-5 py-3 lg:hidden">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block py-3 text-base font-medium ${active ? "text-[#61B6CE]" : "text-black"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}

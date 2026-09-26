import Link from "next/link";
import { navItems } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-[1140px] gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <Link href="/">
            <img
              src="/assets/Toronto-SS-logo.png"
              alt="Toronto Sweep and Scrub"
              width={500}
              height={196}
              className="h-16 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-[15px]">Expert carpet extraction cleaning service.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="list-none space-y-2 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[15px] font-medium text-black hover:text-[#61B6CE]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="list-none space-y-3 p-0 text-[15px] text-[#54595F]">
          <li className="flex items-center gap-3">
            <ClockIcon />
            Monday - Saturday. 8am-8pm
          </li>
          <li className="flex items-center gap-3">
            <PinIcon />
            Greater Toronto Area
          </li>
          <li>
            <Link href="/request-a-quote" className="flex items-center gap-3 font-medium text-black hover:text-[#61B6CE]">
              <BookIcon />
              Request A Quote
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-[#61B6CE]" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5.2l3.2 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-[#61B6CE]" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-[#61B6CE]" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

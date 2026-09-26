import Link from "next/link";

export function QuoteButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/request-a-quote"
      className={`inline-flex items-center gap-3 rounded-md bg-[#61B6CE] px-6 py-3 text-[15px] font-medium text-white transition hover:bg-[#4aa3bb] ${className}`}
    >
      Request A Quote
      <span aria-hidden="true">→</span>
    </Link>
  );
}

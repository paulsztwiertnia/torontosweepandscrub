import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-xl flex-col items-center justify-center px-6 py-20 text-center">
      <h1>Page not found</h1>
      <p className="mt-3">That page is not part of the Toronto Sweep and Scrub site.</p>
      <Link href="/" className="mt-6 font-medium text-[#61B6CE] underline underline-offset-4">
        Back to home
      </Link>
    </main>
  );
}

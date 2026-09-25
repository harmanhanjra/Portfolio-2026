import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-xs tracking-[0.3em] text-[#e2a06f]">404</p>
      <h1 className="font-display mt-4 text-4xl font-bold text-white">This page does not exist.</h1>
      <p className="mt-3 text-[#b6bdb4]">Let&apos;s return to the selected work and contact details.</p>
      <Link href="/" className="button-primary mt-6">
        Back home
      </Link>
    </main>
  );
}

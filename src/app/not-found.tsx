import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-xs tracking-[0.3em] text-sky-400">SYS.LAB // 404</p>
      <h1 className="font-display mt-4 text-4xl font-bold text-white">This sector doesn&apos;t exist.</h1>
      <p className="mt-3 text-slate-400">
        The module you requested isn&apos;t part of the lab. Let&apos;s get you back to the AI Core.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-[#05070d] hover:bg-sky-400"
      >
        RETURN TO BASE
      </Link>
    </main>
  );
}

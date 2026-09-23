import type { Metadata } from "next";
import Link from "next/link";
import { PROFILE } from "@/data/profile";
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, VENTURES } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { SKILL_GROUPS } from "@/data/skills";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume — Harmanpreet Singh, AI Engineer",
  description:
    "Resume of Harmanpreet Singh: AI Engineer (Generative AI, LLM systems, agentic workflows, full-stack). Berlin / remote worldwide.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-20 pt-28 print:pt-6">
      <div className="no-print mb-6 flex gap-3">
        <Link href="/" className="rounded-full border border-white/20 px-5 py-2 text-sm font-bold text-white">
          ← BACK TO LAB
        </Link>
        <PrintButton />
      </div>
      <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 print:border-0 print:bg-white print:text-black md:p-10">
        <header>
          <h1 className="font-display text-3xl font-bold text-white print:text-black md:text-4xl">
            {PROFILE.name}
          </h1>
          <p className="mt-1 text-sm font-semibold text-sky-300 print:text-black">
            {PROFILE.roles.join(" · ")}
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-slate-400 print:text-black">
            {PROFILE.locations.join(" · ")} · {PROFILE.phones.join(" · ")} · {PROFILE.email}
            <br />
            GitHub: {PROFILE.github} · {PROFILE.availabilityDetail}
          </p>
        </header>

        <section className="mt-8" aria-label="Summary">
          <h2 className="font-mono text-xs tracking-[0.3em] text-sky-400 print:text-black">SUMMARY</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 print:text-black">{PROFILE.summary}</p>
        </section>

        <section className="mt-8" aria-label="Skills">
          <h2 className="font-mono text-xs tracking-[0.3em] text-sky-400 print:text-black">SKILLS</h2>
          {SKILL_GROUPS.slice(0, 7).map((g) => (
            <p key={g.id} className="mt-2 text-sm leading-relaxed text-slate-300 print:text-black">
              <strong>{g.label}:</strong> {g.items.join(", ")}
            </p>
          ))}
        </section>

        <section className="mt-8" aria-label="Experience">
          <h2 className="font-mono text-xs tracking-[0.3em] text-sky-400 print:text-black">EXPERIENCE</h2>
          {EXPERIENCE.map((e) => (
            <div key={e.company} className="mt-4">
              <p className="text-sm font-bold text-white print:text-black">
                {e.position} — {e.company}, {e.location} ({e.dates})
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-300 print:text-black">
                {e.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
          {VENTURES.map((v) => (
            <div key={v.name} className="mt-4">
              <p className="text-sm font-bold text-white print:text-black">
                Founder — {v.name} ({v.tagline})
              </p>
              <p className="mt-1 text-sm text-slate-300 print:text-black">{v.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-8" aria-label="Projects">
          <h2 className="font-mono text-xs tracking-[0.3em] text-sky-400 print:text-black">KEY PROJECTS</h2>
          {PROJECTS.slice(0, 3).map((p) => (
            <div key={p.id} className="mt-3">
              <p className="text-sm font-bold text-white print:text-black">
                {p.name} ({p.category}){p.github ? ` — ${p.github}` : ""}
              </p>
              <p className="text-sm text-slate-300 print:text-black">
                {p.built.join(" ")} Outcome: {p.outcome}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-8" aria-label="Education">
          <h2 className="font-mono text-xs tracking-[0.3em] text-sky-400 print:text-black">EDUCATION & CERTIFICATIONS</h2>
          {EDUCATION.map((e) => (
            <p key={e.school} className="mt-2 text-sm text-slate-300 print:text-black">
              <strong>{e.degree}</strong> — {e.school} · {e.detail}
            </p>
          ))}
          <p className="mt-2 text-sm text-slate-300 print:text-black">{CERTIFICATIONS.join(" · ")}</p>
          <p className="mt-2 text-sm text-slate-300 print:text-black">
            Languages: {PROFILE.languages.map((l) => `${l.label} (${l.level})`).join(" · ")}
          </p>
        </section>
      </article>
    </main>
  );
}

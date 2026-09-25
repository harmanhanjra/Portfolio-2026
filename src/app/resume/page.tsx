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
    "Resume of Harmanpreet Singh: AI Engineer specializing in agent systems, RAG pipelines, evaluation, and full-stack delivery. Berlin / remote across Europe.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-20 pt-28 print:pt-6">
      <div className="no-print mb-6 flex gap-3">
        <Link href="/" className="button-secondary min-h-0 px-5 py-2 text-xs">
          Back to portfolio
        </Link>
        <PrintButton />
      </div>
      <article className="rounded-[1.25rem] border border-[rgba(23,33,28,0.25)] bg-[#e9dfcd] p-8 text-[#17211c] print:border-0 print:bg-white print:text-black md:p-10">
        <header>
          <h1 className="font-display text-3xl font-bold md:text-4xl">{PROFILE.name}</h1>
          <p className="mt-1 text-sm font-semibold text-[#8b4b2d] print:text-black">
            {PROFILE.roles.join(" · ")}
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-[rgba(23,33,28,0.78)] print:text-black">
            {PROFILE.locations.join(" · ")} · {PROFILE.phones.join(" · ")} · {PROFILE.email}
            <br />
            GitHub: {PROFILE.github} · {PROFILE.availabilityDetail}
          </p>
        </header>

        <section className="mt-8" aria-label="Summary">
          <h2 className="font-mono text-xs tracking-[0.3em] text-[#8b4b2d] print:text-black">SUMMARY</h2>
          <p className="mt-2 text-sm leading-relaxed print:text-black">{PROFILE.summary}</p>
        </section>

        <section className="mt-8" aria-label="Skills">
          <h2 className="font-mono text-xs tracking-[0.3em] text-[#8b4b2d] print:text-black">SKILLS</h2>
          {SKILL_GROUPS.slice(0, 7).map((group) => (
            <p key={group.id} className="mt-2 text-sm leading-relaxed print:text-black">
              <strong>{group.label}:</strong> {group.items.join(", ")}
            </p>
          ))}
        </section>

        <section className="mt-8" aria-label="Experience">
          <h2 className="font-mono text-xs tracking-[0.3em] text-[#8b4b2d] print:text-black">EXPERIENCE</h2>
          {EXPERIENCE.map((role) => (
            <div key={role.company} className="mt-4">
              <p className="text-sm font-bold print:text-black">
                {role.position} — {role.company}, {role.location} ({role.dates})
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed print:text-black">
                {role.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
          {VENTURES.map((venture) => (
            <div key={venture.name} className="mt-4">
              <p className="text-sm font-bold print:text-black">
                Founder — {venture.name} ({venture.tagline})
              </p>
              <p className="mt-1 text-sm print:text-black">{venture.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-8" aria-label="Projects">
          <h2 className="font-mono text-xs tracking-[0.3em] text-[#8b4b2d] print:text-black">KEY PROJECTS</h2>
          {PROJECTS.slice(0, 3).map((project) => (
            <div key={project.id} className="mt-3">
              <p className="text-sm font-bold print:text-black">
                {project.name} ({project.category}){project.github ? ` — ${project.github}` : ""}
              </p>
              <p className="text-sm print:text-black">
                {project.built.join(" ")} Outcome: {project.outcome}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-8" aria-label="Education">
          <h2 className="font-mono text-xs tracking-[0.3em] text-[#8b4b2d] print:text-black">EDUCATION & CERTIFICATIONS</h2>
          {EDUCATION.map((entry) => (
            <p key={entry.school} className="mt-2 text-sm print:text-black">
              <strong>{entry.degree}</strong> — {entry.school} · {entry.detail}
            </p>
          ))}
          <p className="mt-2 text-sm print:text-black">{CERTIFICATIONS.join(" · ")}</p>
          <p className="mt-2 text-sm print:text-black">
            Languages: {PROFILE.languages.map((language) => `${language.label} (${language.level})`).join(" · ")}
          </p>
        </section>
      </article>
    </main>
  );
}

"use client";

import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import { SectionHead, Reveal } from "./section";
import { track } from "@/lib/analytics";

function ArchStrip({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-1.5" aria-label="System architecture">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-1.5">
          <span className="rounded border border-sky-400/25 bg-sky-400/[0.07] px-2 py-1 font-mono text-[10px] tracking-wider text-sky-200">
            {s}
          </span>
          {i < steps.length - 1 && (
            <span className="text-sky-500/70" aria-hidden>
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function ProjectCard({ p, large }: { p: Project; large?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      data-cursor="VIEW"
      className={`lab-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 md:p-8 ${
        large ? "md:col-span-1" : ""
      }`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-600/10 blur-3xl transition group-hover:bg-violet-600/20" aria-hidden />
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] tracking-[0.28em] text-emerald-300">
          ● {p.category.toUpperCase()}
        </p>
        <div className="flex gap-2">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} source code on GitHub`}
              onClick={() => track("github_click", p.id)}
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-white/30 hover:text-white"
            >
              <Github size={15} aria-hidden />
            </a>
          )}
          <button
            onClick={() => {
              setOpen((o) => !o);
              if (!open) track("case_study_open", p.id);
            }}
            aria-expanded={open}
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-white/30 hover:text-white"
            aria-label={`${open ? "Hide" : "Show"} case study for ${p.name}`}
          >
            <ArrowUpRight size={15} aria-hidden className={`transition-transform ${open ? "rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <h3 className="font-display mt-4 text-2xl font-bold text-white">{p.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        <strong className="text-slate-200">Problem:</strong> {p.problem}
      </p>
      <div className="mt-4">
        <ArchStrip steps={p.architecture} />
      </div>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${p.name} technologies`}>
        {p.technologies.map((t) => (
          <li key={t} className="rounded-md bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-slate-300">
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-3 text-[13px] font-medium leading-relaxed text-emerald-200">
        ✓ {p.outcome}
      </p>

      {open && (
        <div className="mt-4 space-y-3 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-400">
          <p>
            <strong className="text-slate-200">Why it matters:</strong> {p.whyItMatters}
          </p>
          <div>
            <strong className="text-slate-200">What I personally built:</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {p.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <p>
            <strong className="text-slate-200">Challenge:</strong> {p.challenges}
          </p>
          <p>
            <strong className="text-slate-200">Solution:</strong> {p.solution}
          </p>
        </div>
      )}
      <button
        onClick={() => {
          setOpen((o) => !o);
          if (!open) track("case_study_open", p.id);
        }}
        className="mt-4 self-start text-[13px] font-bold tracking-wide text-sky-300 hover:text-sky-200"
      >
        {open ? "HIDE CASE STUDY −" : "READ CASE STUDY +"}
      </button>
    </article>
  );
}

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  return (
    <section id="projects" aria-label="Featured projects" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead
          index="06–07"
          code="PROJECTS // CASE STUDIES"
          title="Engineering case studies, not screenshots."
          lede="Each system below is real, shipped, and verifiable. Open any card for architecture, what I personally built, and the measured outcome."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06} className="h-full">
              <ProjectCard p={p} large />
            </Reveal>
          ))}
        </div>
        <h3 className="font-mono mt-12 text-[11px] tracking-[0.3em] text-slate-500">
          MORE DEPLOYED SYSTEMS
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.05} className="h-full">
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

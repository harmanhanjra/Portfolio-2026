"use client";

import { useState } from "react";
import { DATABASES, DATA_ML, SKILL_GROUPS } from "@/data/skills";
import { scrollToId } from "./providers";
import { SectionHead, Reveal } from "./section";

export function Skills() {
  const [active, setActive] = useState(SKILL_GROUPS[0].id);
  const group = SKILL_GROUPS.find((g) => g.id === active)!;

  return (
    <section id="skills" aria-label="Technical skills" className="relative border-y border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead
          index="04–05"
          code="SYSTEMS // TECHNOLOGY CONSTELLATION"
          title="Skills organized like systems, not laundry lists."
          lede="No meaningless 95% bars. Pick a subsystem to see the verified stack behind it — every item appears on real shipped work."
        />
        <Reveal>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill systems">
            {SKILL_GROUPS.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={active === g.id}
                onClick={() => setActive(g.id)}
                className={`rounded-full border px-4 py-2 font-mono text-xs tracking-[0.18em] transition ${
                  active === g.id
                    ? "border-sky-400 bg-sky-400/15 text-sky-200"
                    : "border-white/15 text-slate-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {g.label.toUpperCase()}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lab-card rounded-2xl p-6 md:p-8" key={`desc-${group.id}`}>
            <p className="font-mono text-[11px] tracking-[0.3em] text-violet-300">
              SUBSYSTEM // {group.label.toUpperCase()}
            </p>
            <h3 className="font-display mt-2 text-xl font-bold text-white">
              {group.items.length} verified technologies
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{group.description}</p>
            <button
              onClick={() => scrollToId(group.section)}
              className="mt-4 text-sm font-semibold text-sky-300 underline decoration-sky-400/50 underline-offset-4 hover:text-sky-200"
            >
              See it in action →
            </button>
          </Reveal>
          <Reveal key={`items-${group.id}`}>
            <ul className="flex flex-wrap gap-2" aria-label={`${group.label} technologies`}>
              {group.items.map((s, i) => (
                <li
                  key={s}
                  className="constellation-chip rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[13px] font-medium text-slate-200"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="font-mono text-[11px] tracking-[0.3em] text-slate-400">DATA / ML LAYER</h3>
              <p className="mt-3 text-sm leading-loose text-slate-300">{DATA_ML.join(" · ")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="font-mono text-[11px] tracking-[0.3em] text-slate-400">DATA STORES</h3>
              <p className="mt-3 text-sm leading-loose text-slate-300">{DATABASES.join(" · ")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Briefcase, ChevronDown, MapPin, Rocket } from "lucide-react";
import { EXPERIENCE, VENTURES } from "@/data/experience";
import { SectionHead, Reveal } from "./section";

export function Journey() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" aria-label="Professional experience" className="border-t border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead
          index="08"
          code="TIMELINE // EXPERIENCE"
          title="Four roles. Three ventures. One direction: deeper into AI."
          lede="Scroll through the timeline — every achievement is resume-verified. Expand any role for the details a hiring manager actually wants."
        />
        <ol className="relative space-y-4 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-gradient-to-b before:from-sky-400/60 before:via-violet-500/40 before:to-transparent">
          {EXPERIENCE.map((e, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={e.company} delay={i * 0.04}>
                <li className="relative pl-12">
                  <span
                    className={`absolute left-3 top-6 h-2.5 w-2.5 rounded-full ${isOpen ? "bg-sky-400" : "bg-slate-600"}`}
                    aria-hidden
                  />
                  <article className={`lab-card rounded-2xl p-5 md:p-6 ${isOpen ? "border-sky-400/30" : ""}`}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full flex-wrap items-baseline justify-between gap-2 text-left"
                    >
                      <span>
                        <span className="font-display text-lg font-bold text-white">{e.position}</span>
                        <span className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-slate-400">
                          <span className="flex items-center gap-1.5 font-semibold text-sky-300">
                            <Briefcase size={13} aria-hidden /> {e.company}
                          </span>
                          <span>{e.dates}</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} aria-hidden /> {e.location}
                          </span>
                          <span className="rounded-full border border-white/15 px-2 py-0.5 font-mono text-[10px] tracking-widest">
                            {e.type.toUpperCase()}
                          </span>
                        </span>
                      </span>
                      <ChevronDown
                        size={18}
                        aria-hidden
                        className={`shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300">
                          {e.achievements.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ul>
                        <p className="text-xs leading-loose text-slate-500">
                          <span className="font-mono tracking-widest text-slate-400">STACK: </span>
                          {e.technologies.join(" · ")}
                        </p>
                      </div>
                    )}
                  </article>
                </li>
              </Reveal>
            );
          })}
        </ol>

        <h3 className="font-mono mt-14 text-[11px] tracking-[0.3em] text-slate-500">
          FOUNDER // INDEPENDENT VENTURES
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {VENTURES.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.06}>
              <article className="lab-card h-full rounded-2xl p-6">
                <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] text-violet-300">
                  <Rocket size={13} aria-hidden /> FOUNDER
                </p>
                <h4 className="font-display mt-3 text-xl font-bold text-white">{v.name}</h4>
                <p className="text-[13px] font-medium text-slate-400">{v.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{v.description}</p>
                <p className="mt-3 text-xs text-slate-500">{v.technologies.join(" · ")}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

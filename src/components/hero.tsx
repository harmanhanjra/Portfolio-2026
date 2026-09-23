"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { CORE_NODES, CoreFallback, type CoreNode } from "./ai-core";
import { scrollToId, useShell } from "./providers";
import { track } from "@/lib/analytics";

const AiCoreCanvas = dynamic(
  () => import("./ai-core").then((m) => m.AiCoreCanvas),
  { ssr: false, loading: () => <CoreFallback /> }
);

export function Hero() {
  const { recruiter, motionOff } = useShell();
  const [hovered, setHovered] = useState<string | null>(null);
  // Simplified WebGL load on small screens (fewer particles, lower DPR).
  // False on server + first client render (hydration-safe), then measured.
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setCompact(window.matchMedia("(max-width: 768px)").matches);
    });
    return () => cancelAnimationFrame(id);
  }, []);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => setCompact(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  const active: CoreNode | null = useMemo(
    () => CORE_NODES.find((n) => n.id === hovered) ?? null,
    [hovered]
  );

  const go = (n: CoreNode) => {
    track("project_open", `core-node:${n.id}`);
    scrollToId(n.section);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32" aria-label="Introduction">
      {/* lab grid backdrop */}
      <div className="lab-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-sky-600/15 blur-[140px]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-20">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-sky-400">
            SYS.LAB // 01 — AI CORE ONLINE
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            HARMANPREET
            <br />
            SINGH
          </h1>
          <p className="font-display mt-4 text-lg font-medium text-sky-300 md:text-xl">
            AI Engineer building intelligent systems that actually work.
          </p>
          <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            {PROFILE.tagline}
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400">
            {PROFILE.summary} From architecture through deployment — RAG pipelines,
            multi-agent systems, and automation that survive production.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToId("#projects")}
              data-cursor="VIEW"
              className="group flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-[#05070d] transition hover:bg-sky-400"
            >
              EXPLORE MY WORK
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
            </button>
            <a
              href={PROFILE.resumePath}
              onClick={() => track("resume_download", "hero")}
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <FileText size={16} aria-hidden /> VIEW RESUME
            </a>
            <button
              onClick={() => scrollToId("#contact")}
              className="rounded-full px-4 py-3 text-sm font-semibold text-slate-300 underline decoration-sky-400/60 decoration-2 underline-offset-4 transition hover:text-white"
            >
              Contact me
            </button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-400">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5" aria-hidden>
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <strong className="font-semibold text-emerald-300">{PROFILE.availability}</strong>
              <span className="text-slate-500">· {PROFILE.availabilityDetail}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} aria-hidden /> {PROFILE.location}
            </span>
          </div>

          <div className="mt-5 flex items-center gap-2">
            {[
              { icon: Github, href: PROFILE.github, label: "GitHub profile", ev: "github_click" as const },
              { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn profile", ev: "linkedin_click" as const },
              { icon: Mail, href: `mailto:${PROFILE.email}`, label: `Email ${PROFILE.email}`, ev: "contact_click" as const },
            ].map(({ icon: Icon, href, label, ev }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                onClick={() => track(ev, "hero")}
                className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-sky-400/50 hover:text-white"
              >
                <Icon size={17} aria-hidden />
              </a>
            ))}
            <span className="ml-1 hidden font-mono text-xs text-slate-500 sm:inline">
              press <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-slate-300">⌘K</kbd> for commands
            </span>
          </div>
        </div>

        <div>
          <div className="relative h-[380px] sm:h-[440px] md:h-[520px]" data-cursor={active ? "OPEN" : ""}>
            {!recruiter && !motionOff ? (
              <AiCoreCanvas
                activeId={hovered}
                onHover={setHovered}
                onSelect={go}
                paused={false}
                compact={compact}
              />
            ) : (
              <CoreFallback />
            )}
            {/* node readout */}
            <div className="pointer-events-none absolute bottom-2 left-2 right-2 min-h-[64px] rounded-xl border border-white/10 bg-[#0a0f1c]/85 p-3 backdrop-blur-md" aria-live="polite">
              {active ? (
                <p className="text-[13px] leading-snug text-slate-200">
                  <strong className="font-mono tracking-widest" style={{ color: active.color }}>
                    [{active.label}]
                  </strong>{" "}
                  {active.blurb} <span className="text-sky-300">Click to visit →</span>
                </p>
              ) : (
                <p className="text-[13px] text-slate-400">
                  <span className="font-mono tracking-widest text-sky-300">[AI CORE]</span> Hover a
                  node to inspect the system — click to jump to that section.
                </p>
              )}
            </div>
          </div>
          {/* accessible node list (also the mobile path — no WebGL required) */}
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="AI system sections">
            {CORE_NODES.map((n) => (
              <li key={n.id}>
                <button
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(n.id)}
                  onBlur={() => setHovered(null)}
                  onClick={() => go(n)}
                  className={`rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-widest transition ${
                    hovered === n.id
                      ? "border-transparent text-[#05070d]"
                      : "border-white/15 text-slate-300 hover:border-white/30"
                  }`}
                  style={hovered === n.id ? { background: n.color } : undefined}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

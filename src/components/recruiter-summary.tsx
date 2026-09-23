"use client";

import { FileText } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { EXPERIENCE } from "@/data/experience";
import { useShell } from "./providers";
import { track } from "@/lib/analytics";

// Visible ONLY in Recruiter Mode: the 30-second hiring brief.
export function RecruiterSummary() {
  const { recruiter } = useShell();
  if (!recruiter) return null;
  return (
    <section aria-label="Recruiter brief" className="border-b border-emerald-400/20 bg-emerald-400/[0.04]">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <p className="font-mono text-[11px] tracking-[0.3em] text-emerald-300">
          RECRUITER VIEW — 30-SECOND BRIEF
        </p>
        <div className="mt-3 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">
              {PROFILE.name} — AI Engineer (GenAI · Agents · Full Stack)
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{PROFILE.summary}</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>✓ 95%+ agent task completion · 70% queries automated · +22% accuracy</li>
              <li>✓ 10+ shipped apps · backends serving 5,000+ users · AWS Certified</li>
              <li>✓ Reality AI Labs (GenAI, remote) · NextGen AI · Freelance since 2021</li>
              <li>✓ {PROFILE.availabilityDetail} · {PROFILE.workAuthorization}</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <a
              href={PROFILE.resumePath}
              onClick={() => track("resume_download", "recruiter-brief")}
              className="flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-[#05070d] hover:bg-emerald-300"
            >
              <FileText size={16} aria-hidden /> OPEN RESUME
            </a>
            <p className="font-mono text-xs text-slate-400">
              {PROFILE.email} · {PROFILE.phones[0]} · {PROFILE.location}
            </p>
            <p className="text-xs text-slate-500">
              Latest: {EXPERIENCE[0].position} @ {EXPERIENCE[0].company} ({EXPERIENCE[0].dates})
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

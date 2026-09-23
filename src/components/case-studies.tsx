"use client";

import { useState } from "react";
import { Database, Globe, MemoryStick, Route, Send, User, Users, Wrench } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { SectionHead, Reveal } from "./section";
import { track } from "@/lib/analytics";

const NEXUS_FLOW = [
  { icon: User, label: "USER", desc: "One interface, any task" },
  { icon: Route, label: "ORCHESTRATOR", desc: "Classifies intent, plans the run" },
  { icon: Users, label: "SPECIALIZED AGENTS ×5", desc: "Research · Code · Data · Docs · Web" },
  { icon: Wrench, label: "MODEL ROUTING", desc: "Right Gemini model per agent" },
  { icon: Globe, label: "TOOLS / SEARCH", desc: "Grounded, cited sources" },
  { icon: MemoryStick, label: "MEMORY", desc: "gemini-embedding-001 semantic recall" },
  { icon: Send, label: "STREAMING RESPONSE", desc: "Real-time SSE tokens" },
];

const DOCQA_FLOW = [
  { icon: Database, label: "DOCUMENT", desc: "Financial & research docs" },
  { icon: Route, label: "INGESTION", desc: "Parse, clean, structure" },
  { icon: Database, label: "CHUNKING / RETRIEVAL", desc: "Vector search over sections" },
  { icon: Globe, label: "RAG", desc: "Grounded context assembly" },
  { icon: Users, label: "AGENT", desc: "Multi-turn reasoning loop" },
  { icon: Wrench, label: "TOOLS", desc: "Decides what to fetch next" },
  { icon: Send, label: "ANSWER", desc: "70% resolved, zero humans" },
];

function FlowDiagram({ flow, idPrefix }: { flow: typeof NEXUS_FLOW; idPrefix: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-7" aria-label="Architecture flow">
        {flow.map((s, i) => (
          <li key={s.label}>
            <button
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`flex h-full w-full flex-col gap-1.5 rounded-xl border p-3.5 text-left transition ${
                active === i
                  ? "border-sky-400/60 bg-sky-400/10"
                  : "border-white/10 bg-white/[0.02] hover:border-white/25"
              }`}
            >
              <span className="font-mono text-[10px] text-slate-500">0{i + 1}</span>
              <s.icon size={18} className={active === i ? "text-sky-300" : "text-slate-400"} aria-hidden />
              <span className="text-[12px] font-bold tracking-wide text-white">{s.label}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="mt-3 rounded-xl border border-sky-400/25 bg-sky-400/[0.06] p-4" aria-live="polite">
        <p className="text-sm text-slate-200" key={`${idPrefix}-${active}`}>
          <strong className="font-display">{flow[active].label}:</strong> {flow[active].desc}
          {active < flow.length - 1 && (
            <span className="text-slate-400"> → next: {flow[active + 1].label}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <>
      <section id="case-nexus" aria-label="Nexus AI case study" className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionHead
            index="07A"
            code="FLAGSHIP // NEXUS AI"
            title="Nexus AI — an AI Agent Operating System."
            lede="Next.js 15 + TypeScript + Google Gemini. Five specialized agents, per-agent model routing, real-time SSE streaming, and search grounding with cited sources — deployable to Vercel in under 2 minutes with zero required config."
          />
          <Reveal>
            <FlowDiagram flow={NEXUS_FLOW} idPrefix="nexus" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/harmanhanjra/NEXUS-AI"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("github_click", "nexus-ai")}
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#05070d] transition hover:bg-slate-200"
              >
                VIEW SOURCE ON GITHUB
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40"
              >
                ASK ME ABOUT THE ARCHITECTURE
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="case-docqa" aria-label="Agentic Document Q&A case study">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionHead
            index="07B"
            code="CASE STUDY // AGENTIC DOCUMENT Q&A"
            title="From documents to answers, autonomously."
            lede="Multi-turn agentic Q&A over financial and research documents. RAG plus tool-calling plus dynamic context management — the agent decides what to retrieve next instead of following a fixed pipeline."
          />
          <Reveal>
            <FlowDiagram flow={DOCQA_FLOW} idPrefix="docqa" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-400">
              Scope note: the diagram shows the verified architecture (ingestion → retrieval → RAG →
              agent → tools → answer). Internal chunk sizes and model choices vary per deployment and
              are intentionally not stated as fixed facts. Verified outcome:{" "}
              <strong className="text-emerald-300">70% of queries resolved with zero human intervention</strong>.
              Questions? <a className="text-sky-300 underline underline-offset-4" href={`mailto:${PROFILE.email}`}>Ask me directly →</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

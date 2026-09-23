import { Bot, Layers, Workflow } from "lucide-react";
import { SectionHead, Reveal } from "./section";

const BLOCKS = [
  {
    id: "ai",
    icon: Bot,
    index: "09",
    code: "AI // LLM EXPERTISE",
    title: "LLM systems, engineered",
    points: [
      "Multi-agent orchestration (LangChain, CrewAI) with per-agent model routing",
      "RAG pipelines (LlamaIndex, Pinecone) with evaluation harnesses — 95%+ task completion",
      "Tool-calling, ReAct, chain-of-thought, structured outputs, prompt chaining (+22% accuracy)",
      "Anthropic, OpenAI, and Gemini APIs in production client workflows",
      "Semantic memory with embeddings; SSE streaming; search grounding with citations",
    ],
  },
  {
    id: "stack",
    icon: Layers,
    index: "10",
    code: "FULL-STACK // ENGINEERING",
    title: "Products, end to end",
    points: [
      "React, Next.js 15, TypeScript frontends with Tailwind + Redux",
      "Node.js / Express / Flask backends; REST + GraphQL APIs serving 5,000+ users",
      "PostgreSQL, MongoDB, MySQL, SQL Server; JWT auth + encrypted storage on every engagement",
      "10+ web apps and AI tools delivered freelance since 2021",
      "AWS (Certified), Docker, GitHub Actions CI/CD, Linux, Vercel deploys",
    ],
  },
  {
    id: "auto",
    icon: Workflow,
    index: "11",
    code: "AUTOMATION // EXPERTISE",
    title: "Workflows that run themselves",
    points: [
      "n8n orchestration: multi-channel intake → AI qualification → HubSpot → Calendly → follow-ups",
      "Zapier + API orchestration across CRM, comms, and analytics stacks",
      "LLM agent pipelines for document extraction (memos, contracts, reports)",
      "Reporting automation that measurably returns analyst hours",
      "MSc lens: every automation ships with audit trails and security defaults",
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" aria-label="Areas of expertise" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead
          index="09–11"
          code="CAPABILITIES // THREE PILLARS"
          title="Three disciplines, one engineer."
          lede="Most AI engineers can't ship frontends. Most full-stack devs can't wrangle agents. The work below is verified across both — plus the automation layer that turns models into ROI."
        />
        <div className="grid gap-4 lg:grid-cols-3" id="automation">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.06} className="h-full">
              <article id={b.id === "auto" ? undefined : b.id} className="lab-card flex h-full scroll-mt-24 flex-col rounded-2xl p-6 md:p-7">
                <b.icon size={22} className="text-violet-300" aria-hidden />
                <p className="font-mono mt-4 text-[10px] tracking-[0.3em] text-slate-500">
                  {b.index} — {b.code}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-white">{b.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-400">
                  {b.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <span id="fullstack" className="sr-only">Full-stack engineering details above</span>
      </div>
    </section>
  );
}

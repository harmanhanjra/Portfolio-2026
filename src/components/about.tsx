import { Compass, Cpu, Factory, Rocket } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { SectionHead, Reveal } from "./section";

const PILLARS = [
  {
    icon: Cpu,
    title: "Reliable AI over demos",
    text: "Eval harnesses, prompt chaining, and failure-mode coverage — because an agent that works 70% of the time doesn't ship. Mine reach 95%+ task completion.",
  },
  {
    icon: Factory,
    title: "AI × software engineering",
    text: "Models are components; products are systems. I wrap LLMs in typed APIs, memory layers, streaming, auth, and CI/CD so they survive production traffic.",
  },
  {
    icon: Rocket,
    title: "Automation that pays",
    text: "From SMB lead pipelines to analyst reporting workflows — I automate the boring parts and measure the hours returned.",
  },
  {
    icon: Compass,
    title: "Security-aware by training",
    text: "An MSc in Cybersecurity focused on AI/agent security means adversarial robustness is designed in, not bolted on.",
  },
];

export function About() {
  return (
    <section id="about" aria-label="About Harmanpreet" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead
          index="03"
          code="ABOUT // OPERATOR"
          title="I build AI products, not just prompts."
          lede="I enjoy a specific kind of problem: messy real-world input on one side, a business outcome on the other, and an unreliable model in the middle. My job is the engineering that makes the middle trustworthy."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="lab-card h-full rounded-2xl p-6 md:p-7">
                <p.icon size={22} className="text-sky-400" aria-hidden />
                <h3 className="font-display mt-4 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl border-l-2 border-sky-400/60 pl-5 text-[15px] leading-relaxed text-slate-300">
            Founder of <strong className="text-white">Harman AI Labs</strong> (AI automation for
            SMBs) and <strong className="text-white">QuantPunjab</strong> (algorithmic trading
            systems). {PROFILE.workAuthorization}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { ChevronRight, TerminalSquare } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { EXPERIENCE } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { SKILL_GROUPS } from "@/data/skills";
import { scrollToId } from "./providers";
import { SectionHead, Reveal } from "./section";
import { track } from "@/lib/analytics";

const HELP = `available commands:
  help       show this list        about      who is harmanpreet?
  skills     list skill systems    projects   list projects
  experience list roles            contact    how to reach me
  resume     open the resume page  clear      wipe the terminal`;

export function LabTerminal() {
  const [lines, setLines] = useState<string[]>([
    "harman-lab v1.0 — type 'help' to begin.",
  ]);
  const [value, setValue] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);

  const print = (more: string[]) => {
    setLines((l) => [...l, ...more].slice(-60));
    requestAnimationFrame(() => boxRef.current?.scrollTo({ top: 99999 }));
  };

  const exec = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    track("terminal_used", cmd || "(empty)");
    if (!cmd) return;
    const echo = [`$ ${raw.trim()}`];
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    if (cmd === "help") print([...echo, HELP]);
    else if (cmd === "about")
      print([...echo, `${PROFILE.name} — ${PROFILE.headline}`, PROFILE.summary]);
    else if (cmd === "skills")
      print([...echo, ...SKILL_GROUPS.map((g) => `· ${g.label}: ${g.items.slice(0, 6).join(", ")}…`)]);
    else if (cmd === "projects") {
      print([...echo, ...PROJECTS.map((p) => `· ${p.name} — ${p.outcome}`)]);
      scrollToId("#projects");
    } else if (cmd === "experience")
      print([...echo, ...EXPERIENCE.map((e) => `· ${e.position} @ ${e.company} (${e.dates})`)]);
    else if (cmd === "contact")
      print([...echo, `email: ${PROFILE.email}`, `github: ${PROFILE.github}`, `phone: ${PROFILE.phones[0]}`]);
    else if (cmd === "resume") {
      print([...echo, "opening /resume …"]);
      window.location.href = PROFILE.resumePath;
    } else print([...echo, `unknown command '${cmd}'. try 'help'.`]);
  };

  return (
    <section aria-label="Interactive terminal" className="border-t border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead
          index="⌘"
          code="TERMINAL // NAVIGATE BY KEYBOARD"
          title="Prefer the keyboard? Good."
          lede="A tiny terminal that navigates the portfolio. No fake AI — just fast, honest commands."
        />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#04060c]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <TerminalSquare size={16} className="text-sky-400" aria-hidden />
              <span className="font-mono text-xs text-slate-400">harman@lab:~</span>
              <span className="ml-auto flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </span>
            </div>
            <div ref={boxRef} className="h-64 overflow-auto p-4 font-mono text-[13px] leading-relaxed" aria-live="polite">
              {lines.map((l, i) => (
                <p key={i} className="whitespace-pre-wrap text-slate-300">{l}</p>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                exec(value);
                setValue("");
              }}
              className="flex items-center gap-2 border-t border-white/10 px-4 py-3"
            >
              <ChevronRight size={16} className="shrink-0 text-sky-400" aria-hidden />
              <label htmlFor="lab-term" className="sr-only">Terminal input</label>
              <input
                id="lab-term"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="type 'help'…"
                autoComplete="off"
                spellCheck={false}
                className="w-full bg-transparent font-mono text-[13px] text-white outline-none placeholder:text-slate-600"
              />
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

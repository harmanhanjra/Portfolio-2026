"use client";

import { useEffect, useMemo, useState } from "react";
import { Briefcase, FileText, Github, Linkedin, Mail, Moon, Search, FolderGit2, History, type LucideIcon } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { scrollToId, useShell } from "./providers";
import { track } from "@/lib/analytics";

interface Cmd {
  icon: LucideIcon;
  label: string;
  hint?: string;
  run: () => void;
}

export function CommandPalette() {
  const { toggleRecruiter, toggleMotion } = useShell();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setQ("");
        setOpen((o) => !o);
        track("palette_used");
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const cmds: Cmd[] = useMemo(
    () => [
      { icon: FolderGit2, label: "View Projects", hint: "#projects", run: () => scrollToId("#projects") },
      { icon: History, label: "View Experience", hint: "#experience", run: () => scrollToId("#experience") },
      { icon: FileText, label: "Download Resume", hint: "/resume", run: () => { track("resume_download", "palette"); window.location.href = PROFILE.resumePath; } },
      { icon: Github, label: "Open GitHub", hint: "↗", run: () => { track("github_click", "palette"); window.open(PROFILE.github, "_blank", "noopener"); } },
      { icon: Linkedin, label: "Open LinkedIn", hint: "↗", run: () => { track("linkedin_click", "palette"); window.open(PROFILE.linkedin, "_blank", "noopener"); } },
      { icon: Mail, label: "Contact Harmanpreet", hint: "#contact", run: () => scrollToId("#contact") },
      { icon: Briefcase, label: "Toggle Recruiter Mode", hint: "simplify", run: toggleRecruiter },
      { icon: Moon, label: "Toggle Motion", hint: "calm", run: toggleMotion },
    ],
    [toggleRecruiter, toggleMotion]
  );

  const filtered = cmds.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 p-4 pt-[15vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-[#0a0f1c] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <Search size={16} className="text-slate-400" aria-hidden />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type a command… ( papers, experience, resume… )"
            aria-label="Command search"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
          <kbd className="rounded border border-white/15 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">ESC</kbd>
        </div>
        <ul className="max-h-72 overflow-auto p-2" role="listbox" aria-label="Commands">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-sm text-slate-500">No matching command.</li>
          )}
          {filtered.map((c) => (
            <li key={c.label} role="option" aria-selected="false">
              <button
                onClick={() => {
                  c.run();
                  setOpen(false);
                }}
                 className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-slate-200 transition-[background-color,color] duration-200 hover:bg-white/[0.06]"
              >
                <c.icon size={16} className="text-sky-400" aria-hidden />
                <span className="flex-1 font-medium">{c.label}</span>
                {c.hint && <span className="font-mono text-[11px] text-slate-500">{c.hint}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

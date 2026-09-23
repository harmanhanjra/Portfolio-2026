"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { track } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-white/10" aria-label="Footer">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="font-mono text-xs tracking-[0.2em] text-slate-500">
          HS<span className="text-sky-400">.LAB</span> — {PROFILE.name.toUpperCase()} © {new Date().getFullYear()}
        </p>
        <p className="max-w-md text-center font-mono text-[11px] leading-relaxed text-slate-600 sm:text-left">
          All metrics resume-verified. No fake testimonials, no inflated stats.
        </p>
        <div className="flex gap-2">
          {[
            { icon: Github, href: PROFILE.github, label: "GitHub" },
            { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={() => track(label === "GitHub" ? "github_click" : label === "LinkedIn" ? "linkedin_click" : "contact_click", "footer")}
              className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-white/30 hover:text-white"
            >
              <Icon size={15} aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

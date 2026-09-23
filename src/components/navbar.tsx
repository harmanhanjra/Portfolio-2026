"use client";

import { useEffect, useState } from "react";
import { Briefcase, Menu, X } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { scrollToId, useShell } from "./providers";
import { track } from "@/lib/analytics";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { recruiter, toggleRecruiter } = useShell();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-[#05070d]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <button
          onClick={() => scrollToId("#top")}
          className="font-display text-sm font-bold tracking-[0.2em] text-white"
          aria-label="Back to top — Harmanpreet Singh"
        >
          HS<span className="text-sky-400">.LAB</span>
        </button>
        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollToId(l.href)}
                className="nav-link text-[13px] font-medium uppercase tracking-[0.14em] text-slate-300 hover:text-white"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleRecruiter}
            aria-pressed={recruiter}
            className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide transition ${
              recruiter
                ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-300"
                : "border-white/15 text-slate-300 hover:border-white/30 hover:text-white"
            }`}
            title="Simplify the site for fast hiring review"
          >
            <Briefcase size={13} aria-hidden />
            Recruiter View{recruiter ? ": ON" : ""}
          </button>
          <a
            href={PROFILE.resumePath}
            onClick={() => track("resume_download", "nav")}
            className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-bold tracking-wide text-[#05070d] transition hover:bg-sky-400"
          >
            RESUME
          </a>
        </div>
        <button
          className="rounded-md p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-[#05070d]/95 px-5 py-4 backdrop-blur-xl md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => {
                  setOpen(false);
                  scrollToId(l.href);
                }}
                className="block w-full py-2.5 text-left text-sm font-medium uppercase tracking-[0.14em] text-slate-200"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="flex gap-3 pt-3">
            <button
              onClick={toggleRecruiter}
              className="flex-1 rounded-full border border-white/15 py-2 text-xs font-semibold text-slate-200"
            >
              Recruiter View{recruiter ? ": ON" : ""}
            </button>
            <a
              href={PROFILE.resumePath}
              onClick={() => track("resume_download", "nav-mobile")}
              className="flex-1 rounded-full bg-sky-500 py-2 text-center text-xs font-bold text-[#05070d]"
            >
              RESUME
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

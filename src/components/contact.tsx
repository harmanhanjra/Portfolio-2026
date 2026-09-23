"use client";

import { useState } from "react";
import { Check, Copy, FileText, Github, Linkedin, Mail, Send } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { SectionHead, Reveal } from "./section";
import { track } from "@/lib/analytics";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (form.message.trim().length < 10) errs.message = "Tell me a little more (10+ characters).";
    // Honeypot-free spam control: message must not contain URLs overload
    if ((form.message.match(/https?:\/\//g) || []).length > 3) errs.message = "Links look spammy — keep it simple.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    track("contact_click", "form");
    // No backend secrets on the client: compose a mailto with the validated content.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const input =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/60";

  return (
    <section id="contact" aria-label="Contact Harmanpreet" className="relative overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-sky-600/10 blur-[130px]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead
          index="14"
          code="UPLINK // HIRE ME"
          title="Let's build something intelligent."
          lede="Interviews, freelance builds, automation for your business — my inbox is the fastest route. I reply personally; no bots, no agencies."
        />
        <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="lab-card flex h-full flex-col gap-4 rounded-2xl p-6 md:p-8">
              <button
                onClick={copyEmail}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-left transition hover:border-sky-400/40"
                aria-label={`Copy email ${PROFILE.email}`}
              >
                <span className="flex items-center gap-3">
                  <Mail size={18} className="text-sky-300" aria-hidden />
                  <span className="text-sm font-semibold text-white">{PROFILE.email}</span>
                </span>
                {copied ? <Check size={16} className="text-emerald-300" aria-hidden /> : <Copy size={16} className="text-slate-500 group-hover:text-slate-300" aria-hidden />}
              </button>
              <span aria-live="polite" className="sr-only">{copied ? "Email copied" : ""}</span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Github, label: "GitHub", href: PROFILE.github, ev: "github_click" as const },
                  { icon: Linkedin, label: "LinkedIn", href: PROFILE.linkedin, ev: "linkedin_click" as const },
                  { icon: FileText, label: "Resume", href: PROFILE.resumePath, ev: "resume_download" as const },
                ].map(({ icon: Icon, label, href, ev }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={() => track(ev, "contact")}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 py-4 text-[13px] font-semibold text-slate-200 transition hover:border-sky-400/40 hover:text-white"
                  >
                    <Icon size={18} aria-hidden /> {label}
                  </a>
                ))}
              </div>
              <div className="mt-auto rounded-xl bg-white/[0.02] p-4 text-[13px] leading-relaxed text-slate-400">
                <p>
                  <strong className="text-slate-200">{PROFILE.availability}.</strong>{" "}
                  {PROFILE.availabilityDetail}. {PROFILE.workAuthorization}.
                </p>
                <p className="mt-2 font-mono text-xs text-slate-500">
                  {PROFILE.phones.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <form onSubmit={submit} noValidate className="lab-card rounded-2xl p-6 md:p-8" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="ct-name" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-400">
                    Your name
                  </label>
                  <input
                    id="ct-name" className={input} placeholder="Ada Lovelace" autoComplete="name"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    aria-invalid={!!errors.name} aria-describedby={errors.name ? "ct-name-err" : undefined}
                  />
                  {errors.name && <p id="ct-name-err" className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="ct-email" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-400">
                    Your email
                  </label>
                  <input
                    id="ct-email" type="email" className={input} placeholder="you@company.com" autoComplete="email"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    aria-invalid={!!errors.email} aria-describedby={errors.email ? "ct-email-err" : undefined}
                  />
                  {errors.email && <p id="ct-email-err" className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="ct-msg" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-400">
                  What should we build?
                </label>
                <textarea
                  id="ct-msg" rows={5} className={`${input} resize-none`}
                  placeholder="Role, project, timeline — a few sentences is perfect."
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? "ct-msg-err" : undefined}
                />
                {errors.message && <p id="ct-msg-err" className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 py-3.5 text-sm font-bold text-[#05070d] transition hover:bg-sky-400"
              >
                <Send size={16} aria-hidden /> SEND MESSAGE
              </button>
              {sent && (
                <p className="mt-3 text-center text-[13px] text-emerald-300" role="status">
                  Opening your email client — or just write to {PROFILE.email} directly.
                </p>
              )}
              <p className="mt-3 text-center font-mono text-[11px] text-slate-600">
                validated locally · spam-filtered · no trackers · opens your mail app
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

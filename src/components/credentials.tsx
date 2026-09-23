import { Award, FlaskConical, GraduationCap } from "lucide-react";
import { CERTIFICATIONS, EDUCATION } from "@/data/experience";
import { EXPLORING } from "@/data/projects";
import { PROFILE } from "@/data/profile";
import { SectionHead, Reveal } from "./section";

export function Credentials() {
  return (
    <section id="education" aria-label="Education and certifications" className="border-t border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead
          index="12–13"
          code="CREDENTIALS // TRAJECTORY"
          title="Certified. Studying. Still exploring."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal>
            <article className="lab-card h-full rounded-2xl p-6 md:p-7">
              <GraduationCap size={22} className="text-sky-400" aria-hidden />
              <h3 className="font-display mt-4 text-lg font-bold text-white">Education</h3>
              <ul className="mt-3 space-y-4">
                {EDUCATION.map((e) => (
                  <li key={e.school}>
                    <p className="text-sm font-bold text-slate-100">{e.degree}</p>
                    <p className="text-[13px] text-slate-400">{e.school}</p>
                    <p className="text-[13px] text-slate-500">{e.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="lab-card h-full rounded-2xl p-6 md:p-7">
              <Award size={22} className="text-emerald-300" aria-hidden />
              <h3 className="font-display mt-4 text-lg font-bold text-white">Certifications</h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="flex gap-2.5">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="lab-card h-full rounded-2xl p-6 md:p-7">
              <FlaskConical size={22} className="text-violet-300" aria-hidden />
              <h3 className="font-display mt-4 text-lg font-bold text-white">Currently exploring</h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
                {EXPLORING.map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/10 pt-3 text-[13px] text-slate-500">
                {PROFILE.languages.map((l) => `${l.label} (${l.level})`).join(" · ")}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

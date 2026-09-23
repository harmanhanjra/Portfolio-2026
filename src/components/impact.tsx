"use client";

import { useEffect, useRef, useState } from "react";
import { IMPACT } from "@/data/projects";
import { Eyebrow, Reveal } from "./section";
import { useShell } from "./providers";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const { motionOff, recruiter } = useShell();
  const calm = motionOff || recruiter;
  const [n, setN] = useState(calm ? value : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (calm) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / 1400, 1);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, calm]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-white md:text-5xl">
      {n}
      <span className="text-sky-400">{suffix}</span>
    </span>
  );
}

export function Impact() {
  return (
    <section id="impact" aria-label="Measured impact" className="relative border-y border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Reveal>
          <Eyebrow index="02" code="PROOF // VERIFIED IMPACT" />
          <p className="mt-3 max-w-2xl text-sm text-slate-500">
            Every number below comes straight from shipped work — no vanity metrics.
          </p>
        </Reveal>
        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {IMPACT.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06} className="bg-[#070b14]">
              <div className="flex h-full flex-col gap-2 p-6 md:p-8">
                <dt className="order-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">
                  {m.label}
                </dt>
                <dd className="order-1">
                  <CountUp value={m.value} suffix={m.suffix} />
                </dd>
                <dd className="order-3 text-[13px] text-slate-500">{m.note}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

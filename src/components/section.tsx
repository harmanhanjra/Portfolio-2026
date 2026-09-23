"use client";

import { motion } from "framer-motion";
import { useShell } from "./providers";

export function Eyebrow({ index, code }: { index: string; code: string }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.3em] text-sky-400/90">
      {index} — {code}
    </p>
  );
}

export function SectionHead({
  index,
  code,
  title,
  lede,
}: {
  index: string;
  code: string;
  title: string;
  lede?: string;
}) {
  const { motionOff } = useShell();
  const anim = motionOff ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };
  return (
    <motion.div {...anim} className="mb-10 max-w-3xl md:mb-14">
      <Eyebrow index={index} code={code} />
      <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">{title}</h2>
      {lede && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400 md:text-base">{lede}</p>}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { motionOff } = useShell();
  if (motionOff) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

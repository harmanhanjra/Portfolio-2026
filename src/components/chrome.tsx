"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Decide after mount so server HTML (null) matches first client render.
    const id = requestAnimationFrame(() => {
      if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      const tagged = t.closest?.("[data-cursor]") as HTMLElement | null;
      if (tagged) {
        setLabel(tagged.dataset.cursor || "");
        setActive(true);
      } else if (t.closest?.("a,button")) {
        setLabel("");
        setActive(true);
      } else {
        setLabel("");
        setActive(false);
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <div
        className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-150 ${
          label
            ? "h-16 w-16 border-sky-400/70 bg-sky-400/10 backdrop-blur-sm"
            : active
              ? "h-10 w-10 border-white/40 bg-white/5"
              : "h-5 w-5 border-white/30"
        }`}
      >
        {label ? (
          <span className="text-[9px] font-bold tracking-[0.18em] text-sky-300">{label}</span>
        ) : (
          <span className={`rounded-full bg-sky-400 ${active ? "h-1 w-1" : "h-1.5 w-1.5"}`} />
        )}
      </div>
    </div>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent" aria-hidden>
      <div
        className="h-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-300"
        style={{ width: `${p * 100}%` }}
      />
    </div>
  );
}

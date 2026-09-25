"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import { track } from "@/lib/analytics";

interface ShellState {
  recruiter: boolean;
  toggleRecruiter: () => void;
  motionOff: boolean;
  toggleMotion: () => void;
}

const ShellCtx = createContext<ShellState>({
  recruiter: false,
  toggleRecruiter: () => {},
  motionOff: false,
  toggleMotion: () => {},
});

export const useShell = () => useContext(ShellCtx);

export function Providers({ children }: { children: React.ReactNode }) {
  // Server AND first client render must agree (both false) to avoid
  // hydration mismatch; stored prefs are applied right after mount.
  const [recruiter, setRecruiter] = useState(false);
  const [motionOff, setMotionOff] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      try {
        if (localStorage.getItem("lab-recruiter") === "on") setRecruiter(true);
        const m = localStorage.getItem("lab-motion");
        if (m === "off") setMotionOff(true);
        else if (m === null && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          setMotionOff(true);
      } catch {
        /* private mode etc. — defaults stand */
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("recruiter", recruiter);
    try {
      localStorage.setItem("lab-recruiter", recruiter ? "on" : "off");
    } catch {}
  }, [recruiter]);

  useEffect(() => {
    document.body.classList.toggle("motion-off", motionOff);
    try {
      localStorage.setItem("lab-motion", motionOff ? "off" : "on");
    } catch {}
  }, [motionOff]);

  // Lenis smooth scroll (disabled in recruiter / reduced-motion for speed).
  useEffect(() => {
    if (recruiter || motionOff) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [recruiter, motionOff]);

  const toggleRecruiter = useCallback(() => {
    setRecruiter((r) => {
      track("recruiter_mode", r ? "off" : "on");
      return !r;
    });
  }, []);
  const toggleMotion = useCallback(() => setMotionOff((m) => !m), []);

  const value = useMemo(
    () => ({ recruiter, toggleRecruiter, motionOff, toggleMotion }),
    [recruiter, toggleRecruiter, motionOff, toggleMotion]
  );
  return <ShellCtx.Provider value={value}>{children}</ShellCtx.Provider>;
}

export function scrollToId(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 88;
  const calm = document.body.classList.contains("recruiter") || document.body.classList.contains("motion-off");
  window.scrollTo({ top, behavior: calm ? "auto" : "smooth" });
}

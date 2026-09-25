"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { track } from "@/lib/analytics";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <a href="#main" className="skip-link">Skip to content</a>
      <nav className="nav-shell" aria-label="Primary">
        <a href="#top" className="brand-mark" aria-label="Harmanpreet Singh, back to top">
          <span>HS</span>
          <span>AI Engineer</span>
        </a>
        <ul className="desktop-nav">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">{link.label}</a>
            </li>
          ))}
        </ul>
        <a
          href={PROFILE.resumePath}
          onClick={() => track("resume_download", "nav")}
          className="button-secondary nav-resume"
        >
          Résumé
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>
      {open && (
        <div id="mobile-navigation" className="mobile-nav">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

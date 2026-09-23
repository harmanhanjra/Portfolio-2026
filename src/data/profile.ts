// ─────────────────────────────────────────────────────────────
// profile.ts — VERIFIED source of truth (from Harmanpreet's resume).
// TODO(placeholders): LINKEDIN_URL + RESUME: add real URLs when ready.
// Do NOT invent employers, metrics, or affiliations. Omit if unknown.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Harmanpreet Singh",
  firstName: "Harmanpreet",
  headline: "AI Engineer building intelligent systems that actually work.",
  roles: [
    "AI Engineer",
    "Generative AI & LLM Systems",
    "Agentic Workflows",
    "AI Automation",
    "Full-Stack Developer",
  ],
  tagline:
    "Generative AI · LLM Systems · Agentic Workflows · Full Stack",
  summary:
    "AI Engineer with 1.5+ years focused on Generative AI, LLM-powered systems, and agentic workflows, backed by 4+ years of full-stack software engineering. Builds production RAG pipelines, multi-agent systems, and evaluation harnesses — shipping AI products end-to-end, from architecture to deployment.",
  availability: "Open to opportunities",
  availabilityDetail: "Open to relocation & remote roles worldwide",
  location: "Berlin, Germany",
  locations: ["Berlin, Germany", "Sangrur, Punjab, India"],
  email: "2000sharmanpreet@gmail.com",
  phones: ["+49 176 32305645", "+91 75289 66505"],
  github: "https://github.com/harmanhanjra",
  // TODO: replace with real LinkedIn profile URL
  linkedin: "https://www.linkedin.com/",
  // Resume lives at /resume (print-friendly page generated from this data).
  resumePath: "/resume",
  workAuthorization: "EU work authorization · Open to full-time, hybrid, or remote roles across Europe",
  languages: [
    { label: "English", level: "Professional / Fluent" },
    { label: "Hindi", level: "Native" },
    { label: "Punjabi", level: "Native" },
    { label: "German", level: "Learning — A2" },
  ],
} as const;

export type Profile = typeof PROFILE;

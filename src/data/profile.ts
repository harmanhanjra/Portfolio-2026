// ─────────────────────────────────────────────────────────────
// profile.ts — VERIFIED source of truth (from Harmanpreet's resume).
// TODO(placeholders): LINKEDIN_URL + RESUME: add real URLs when ready.
// Do NOT invent employers, metrics, or affiliations. Omit if unknown.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Harmanpreet Singh",
  firstName: "Harmanpreet",
  headline: "AI Engineer — agents, RAG, and production-ready systems.",
  roles: [
    "AI Engineer",
    "Generative AI & LLM Systems",
    "Agentic Workflows",
    "AI Automation",
    "Full-Stack Developer",
  ],
  tagline: "AI Engineer · Agent Systems · RAG · Full Stack",
  summary:
    "AI engineer with 1.5+ years in generative AI and 4+ years in full-stack delivery, building agent systems, RAG pipelines, and production applications.",
  availability: "Open to opportunities",
  availabilityDetail: "Open to full-time roles in Berlin or remote across Europe",
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

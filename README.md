# Portfolio 2026 — HS.LAB

**Harmanpreet Singh · AI Systems Lab Portfolio**

A dark, lab-themed personal portfolio for an AI Engineer, built with a verified-content philosophy: every metric, role, and project comes straight from real shipped work — no vanity numbers, no fake testimonials, no lorem ipsum.

🔗 **Live:** https://harmanpreet-singh-lab.vercel.app

---

## Highlights

- **Interactive 3D AI Core hero** — React Three Fiber scene with 8 orbiting skill nodes (LLM, RAG, Agents, Automation, APIs, Full Stack, Cloud, Security), dynamically imported with a static fallback for reduced-motion and low-power devices
- **Recruiter View** — one toggle switches the whole site into a calm, 30-second brief with direct contact and resume access
- **⌘K Command Palette** — keyboard-first navigation across sections
- **Interactive Terminal** — `help`, `about`, `skills`, `projects`, `experience`, `contact`, `resume`
- **`/resume` print-to-PDF page** — generated from the same verified data as the site, with print-optimized styles
- **Expandable project case studies** — Problem → What I built → Challenge → Solution → Verified outcome
- **Zero-tracker analytics stub** — `track()` pushes to `dataLayer`, no cookies, no third parties
- **Contact form without a backend** — validates locally and opens the visitor's mail app

## Tech Stack

| Layer | Technologies |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first config) |
| 3D & Motion | Three.js · @react-three/fiber · Framer Motion · Lenis |
| Icons | lucide-react |
| Fonts | Geist · Geist Mono · Space Grotesk (self-hosted via `next/font`) |
| Deploy | Vercel |

## Getting Started

```bash
git clone https://github.com/harmanhanjra/Portfolio-2026.git
cd Portfolio-2026
npm install
npm run dev        # http://localhost:3000
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run smoke` | Smoke-test `/`, `/resume`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image` and assert no placeholder text leaks into the HTML |
| `npm run verify` | Typecheck + lint + build (full gate) |

## Content Model

All copy lives in `src/data/` — edit data files, never components:

| File | Holds |
|---|---|
| `src/data/profile.ts` | Name, headline, contact links, availability |
| `src/data/skills.ts` | Skill constellation (resume-verified only) |
| `src/data/experience.ts` | Roles, ventures, education, certifications |
| `src/data/projects.ts` | Case studies, impact metrics, `EXPLORING` list |

## Site Map

| Route | Purpose |
|---|---|
| `/` | Full portfolio — Hero, Impact, About, Skills, Projects, Case Studies, Journey, Expertise, Credentials, Terminal, Contact |
| `/resume` | Print-friendly resume → Save as PDF |
| `/robots.txt` · `/sitemap.xml` | SEO crawlers |
| `/opengraph-image` | Dynamically generated 1200×630 OG image |

## Project Structure

```
src/
├── app/            # App Router: layout, page, resume, SEO routes
├── components/     # Section components (hero, projects, contact, …)
├── data/           # Single source of truth for all content
└── lib/            # Analytics helper
scripts/
└── smoke.mjs       # Smoke tests for production HTML
```

## SEO & Accessibility

- Full metadata, Open Graph, Twitter cards, canonical URL
- `Person` + `WebSite` JSON-LD structured data
- Semantic HTML, skip link, ARIA states, `:focus-visible` outlines
- `prefers-reduced-motion` + manual motion toggle; everything animatable turns off in Recruiter Mode

## Deploy

```bash
npx vercel --prod
```

No environment variables required. Optionally set `NEXT_PUBLIC_SITE_URL` for your final custom domain.

## License

Private — © 2026 Harmanpreet Singh. All metrics resume-verified.

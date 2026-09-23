import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { CustomCursor, ScrollProgress } from "@/components/chrome";
import { CommandPalette } from "@/components/palette";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "700"] });

const SITE = "https://harmanpreet-singh-lab.vercel.app"; // TODO: replace with final domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Harmanpreet Singh — AI Engineer · Generative AI · Agentic Systems",
    template: "%s · Harmanpreet Singh",
  },
  description:
    "AI Engineer building intelligent systems that actually work. Generative AI, LLM systems, agentic workflows, RAG pipelines, and full-stack delivery — Berlin / remote worldwide.",
  keywords: [
    "Harmanpreet Singh",
    "AI Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "Agentic AI Engineer",
    "AI Automation Developer",
    "Full Stack Developer",
    "Python Developer",
    "RAG",
    "LangChain",
    "Next.js",
  ],
  authors: [{ name: "Harmanpreet Singh" }],
  creator: "Harmanpreet Singh",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: "Harmanpreet Singh — AI Engineer",
    description: "Generative AI · Agentic Systems · Full Stack. 95%+ agent task completion. Explore the lab.",
    siteName: "HS.LAB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmanpreet Singh — AI Engineer",
    description: "Generative AI · Agentic Systems · Full Stack",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harmanpreet Singh",
  jobTitle: "AI Engineer",
  description:
    "AI Engineer focused on Generative AI, LLM systems, agentic workflows, and full-stack delivery.",
  address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
  email: "mailto:2000sharmanpreet@gmail.com",
  url: SITE,
  sameAs: ["https://github.com/harmanhanjra"],
  knowsAbout: [
    "Generative AI",
    "LLM Systems",
    "Agentic Workflows",
    "RAG Pipelines",
    "LangChain",
    "LlamaIndex",
    "Next.js",
    "Python",
  ],
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Harmanpreet Singh — AI Systems Lab",
  url: SITE,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Providers>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          {children}
          <CommandPalette />
        </Providers>
      </body>
    </html>
  );
}

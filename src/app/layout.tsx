import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const editorial = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://harmanpreet-singh-lab.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Harmanpreet Singh — AI Engineer",
    template: "%s · Harmanpreet Singh",
  },
  description:
    "AI engineer building reliable agent systems, RAG pipelines, and production-ready full-stack applications. Based in Berlin, open to remote roles across Europe.",
  keywords: [
    "Harmanpreet Singh",
    "AI Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "Agentic AI",
    "RAG Engineer",
    "Python Developer",
    "Next.js Developer",
    "Berlin",
  ],
  authors: [{ name: "Harmanpreet Singh" }],
  creator: "Harmanpreet Singh",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: "Harmanpreet Singh — AI Engineer",
    description: "Agent systems, RAG pipelines, and production-ready AI applications.",
    siteName: "Harmanpreet Singh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmanpreet Singh — AI Engineer",
    description: "Agent systems, RAG pipelines, and production-ready AI applications.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harmanpreet Singh",
  jobTitle: "AI Engineer",
  description:
    "AI engineer specializing in agent systems, RAG pipelines, evaluation, and full-stack delivery.",
  address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
  email: "mailto:2000sharmanpreet@gmail.com",
  url: SITE,
  sameAs: ["https://github.com/harmanhanjra"],
  knowsAbout: [
    "Generative AI",
    "Agent Systems",
    "RAG Pipelines",
    "LLM Evaluation",
    "LangChain",
    "LlamaIndex",
    "Next.js",
    "Python",
  ],
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Harmanpreet Singh — AI Engineer",
  url: SITE,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${editorial.variable} ${mono.variable}`}>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

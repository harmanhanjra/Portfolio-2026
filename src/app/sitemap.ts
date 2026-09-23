import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://harmanpreet-singh-lab.vercel.app"; // TODO: final domain
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}

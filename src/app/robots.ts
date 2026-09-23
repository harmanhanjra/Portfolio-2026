import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://harmanpreet-singh-lab.vercel.app"; // TODO: final domain
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}

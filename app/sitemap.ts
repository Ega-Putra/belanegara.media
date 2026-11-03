import type { MetadataRoute } from "next";
import { articles, categories } from "@/data/articles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = articles.map((a) => a.date).sort().at(-1);
  return [
    { url: `${SITE_URL}/`, lastModified: latest, changeFrequency: "daily", priority: 1 },
    ...categories.map((c) => ({
      url: `${SITE_URL}/kategori/${c.slug}`,
      lastModified: latest,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...articles.map((a) => ({
      url: `${SITE_URL}/artikel/${a.slug}`,
      lastModified: a.date,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

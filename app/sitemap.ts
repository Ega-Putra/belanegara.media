import type { MetadataRoute } from "next";
import { categories, getAllArticles, getArticlesByCategory } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles().filter((a) => !a.draft);
  const latest = articles[0]?.date;
  return [
    { url: `${SITE_URL}/`, lastModified: latest, changeFrequency: "daily", priority: 1 },
    ...categories
      .filter((c) => getArticlesByCategory(c.id).some((a) => !a.draft))
      .map((c) => ({
        url: `${SITE_URL}/kategori/${c.id}`,
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

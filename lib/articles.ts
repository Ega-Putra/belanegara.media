import { articles, categories, popularSlugs, type Article } from "@/data/articles";

export const SITE_NAME = "BelaNegara.id";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://belanegara.id";

/** Mengubah teks menjadi slug: huruf kecil, dipisah tanda hubung. */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryByName(name: Article["category"]) {
  return categories.find((c) => c.name === name)!;
}

export function getArticlesByCategory(name: Article["category"]) {
  return articles.filter((a) => a.category === name);
}

export function getPopularArticles() {
  return popularSlugs.map((s) => getArticle(s)).filter((a): a is Article => !!a);
}

const dateFormat = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(iso: string) {
  return dateFormat.format(new Date(iso));
}

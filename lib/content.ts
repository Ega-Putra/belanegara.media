import "server-only";
import { readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import matter from "gray-matter";
import { authors } from "@/data/authors";
import { categories } from "@/data/categories";
import { popularSlugs } from "@/data/popular";
import { readingTime } from "@/lib/format";
import { articleFrontmatterSchema } from "@/lib/schema";
import type { Article } from "@/types/content";

const CONTENT_DIR = join(process.cwd(), "content/articles");

/** Penanda yang wajib dibereskan sebelum artikel boleh terbit. */
export const TODO_MARKER = /\[(VERIFY|ISI)\b[^\]]*\]/;

/** Draf tampil saat `next dev`, tetapi tidak ikut build produksi. */
const SHOW_DRAFTS = process.env.NODE_ENV !== "production";

function loadArticle(file: string): Article {
  const raw = readFileSync(join(CONTENT_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const parsed = articleFrontmatterSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error(`[content] ${file} tidak valid:\n${parsed.error.issues.map((i) => `  - ${i.path.join(".")}: ${i.message}`).join("\n")}`);
  }
  const fm = parsed.data;
  if (basename(file, ".md") !== fm.slug) {
    throw new Error(`[content] ${file}: nama file harus sama dengan slug "${fm.slug}".`);
  }
  if (!fm.draft && TODO_MARKER.test(raw)) {
    throw new Error(`[content] ${file} masih berisi [VERIFY] atau [ISI]. Bereskan dulu, atau set draft: true.`);
  }

  const { authorId, category, ...rest } = fm;
  return {
    ...rest,
    author: authors[authorId],
    category: categories.find((c) => c.id === category)!,
    body: content.trim(),
    readTime: readingTime(content),
  };
}

function loadAll(): Article[] {
  return readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(loadArticle)
    .filter((a) => SHOW_DRAFTS || !a.draft)
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

let cache: Article[] | undefined;

/**
 * Semua artikel yang terlihat, terbaru lebih dulu.
 * Saat `next dev` file dibaca ulang setiap request agar editan Markdown langsung terlihat;
 * di produksi cukup dibaca sekali saat build.
 */
export function getAllArticles() {
  if (SHOW_DRAFTS) return loadAll();
  return (cache ??= loadAll());
}

export function getArticle(slug: string) {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticlesByCategory(categoryId: string) {
  return getAllArticles().filter((a) => a.category.id === categoryId);
}

export function getPopularArticles() {
  return popularSlugs.map(getArticle).filter((a): a is Article => !!a);
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export { categories };

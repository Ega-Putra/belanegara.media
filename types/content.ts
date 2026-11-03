import type { z } from "zod";
import type { articleFrontmatterSchema, coverImageSchema, sourceSchema } from "@/lib/schema";

export type Author = {
  id: string;
  name: string;
  /** Hanya ditampilkan di halaman artikel. */
  bio: string;
};

export type Category = {
  /** Juga dipakai sebagai slug URL: /kategori/<id>. */
  id: string;
  name: string;
  color: string;
  description: string;
};

export type CoverImage = z.infer<typeof coverImageSchema>;
export type Source = z.infer<typeof sourceSchema>;
export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;

/** Artikel yang sudah divalidasi, dengan penulis dan kategori yang sudah di-resolve. */
export type Article = Omit<ArticleFrontmatter, "authorId" | "category"> & {
  author: Author;
  category: Category;
  /** Isi artikel dalam Markdown. */
  body: string;
  /** Menit baca, dihitung dari jumlah kata. */
  readTime: number;
};

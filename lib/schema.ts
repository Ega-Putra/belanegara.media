import { z } from "zod";
import { authors, type AuthorId } from "@/data/authors";
import { categories, type CategoryId } from "@/data/categories";
import { slugify } from "@/lib/format";

const categoryIds = categories.map((c) => c.id) as [CategoryId, ...CategoryId[]];
const authorIds = Object.keys(authors) as [AuthorId, ...AuthorId[]];

const httpsUrl = z.url({ protocol: /^https$/ });

export const coverImageSchema = z.object({
  /** Path di /public, WebP 1200x630, < 200 KB. Dipakai juga sebagai og:image. */
  src: z.string().regex(/^\/images\/articles\/[a-z0-9-]+\.webp$/, "harus /images/articles/<slug>.webp"),
  alt: z.string().min(20, "alt harus berupa kalimat deskriptif"),
  credit: z.string().min(1),
  sourceUrl: httpsUrl,
  license: z.string().min(1),
  licenseUrl: httpsUrl.optional(),
});

export const sourceSchema = z.object({
  publication: z.string().min(1),
  title: z.string().min(1),
  url: httpsUrl,
});

export const articleFrontmatterSchema = z
  .object({
    title: z.string().min(10),
    /** Dibekukan saat artikel dibuat agar URL tidak berubah walau judul diedit. */
    slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
    category: z.enum(categoryIds),
    authorId: z.enum(authorIds),
    date: z.iso.date(),
    draft: z.boolean().default(false),
    excerpt: z.string().min(40).max(155),
    cover: coverImageSchema.optional(),
    sources: z.array(sourceSchema).min(1),
  })
  .strict()
  .superRefine((fm, ctx) => {
    if (fm.cover && fm.cover.src !== `/images/articles/${fm.slug}.webp`) {
      ctx.addIssue({ code: "custom", path: ["cover", "src"], message: "nama gambar harus sama dengan slug" });
    }
    if (slugify(fm.title) !== fm.slug) {
      // Hanya peringatan: slug boleh berbeda dari judul setelah judul diedit.
      console.warn(`[content] slug "${fm.slug}" tidak lagi sama dengan judulnya (boleh, slug sengaja dibekukan).`);
    }
  });

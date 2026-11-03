import type { Metadata } from "next";

export const SITE_NAME = "Bela Negara Media";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.belanegara.web.id").replace(/\/$/, "");
export const SITE_DESCRIPTION = "Artikel dan opini bertema Bela Negara untuk Indonesia.";
export const SITE_TAGLINE = "Portal artikel untuk menumbuhkan rasa cinta tanah air lewat tulisan.";
export const CONTACT_EMAIL = "redaksi@belanegara.web.id";

export const OG_SIZE = { width: 1200, height: 630 };

export const DEFAULT_OG_IMAGE = {
  url: "/og-default.png",
  ...OG_SIZE,
  alt: `${SITE_NAME} – ${SITE_DESCRIPTION}`,
  type: "image/png",
};

/**
 * Next.js menimpa objek `openGraph`/`twitter` milik layout secara utuh (bukan digabung),
 * jadi setiap halaman yang mengatur openGraph sendiri harus menyertakan nilai dasar ini.
 */
export function baseOpenGraph(): NonNullable<Metadata["openGraph"]> {
  return {
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
  };
}

/** Potong teks di batas kata agar muat di deskripsi pratinjau (~155 karakter). */
export function truncate(text: string, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s.,;:–-]+$/, "") + "…";
}

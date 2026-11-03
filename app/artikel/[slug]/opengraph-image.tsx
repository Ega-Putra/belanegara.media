import { ImageResponse } from "next/og";
import { articles } from "@/data/articles";
import { getArticle, getCategoryByName } from "@/lib/articles";
import { LOGO_MARK_DATA_URI, loadLoraFonts } from "@/lib/og";
import { OG_SIZE, SITE_NAME } from "@/lib/site";

export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

/**
 * Artikel yang punya field `image` tidak dibuatkan gambar otomatis,
 * sehingga og:image dari generateMetadata di page.tsx yang dipakai.
 */
export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug);
  if (!article || article.image) return [];
  return [{ id: "og", size: OG_SIZE, alt: article.title, contentType }];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug)!;
  const { color } = getCategoryByName(article.category);
  const titleSize = article.title.length > 60 ? 58 : 66;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#fff",
          background: `linear-gradient(160deg, ${color} 0%, ${color} 35%, #6fd6a6 100%)`,
          fontFamily: "Lora",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 76,
              height: 76,
              borderRadius: 18,
              background: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_MARK_DATA_URI} width={52} height={52} alt="" />
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>{SITE_NAME}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              fontSize: 28,
              fontWeight: 500,
              padding: "6px 24px",
              borderRadius: 99,
              background: "rgba(255,255,255,.22)",
            }}
          >
            {article.category}
          </div>
          <div style={{ fontSize: titleSize, fontWeight: 700, lineHeight: 1.15 }}>
            {article.title}
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await loadLoraFonts() },
  );
}

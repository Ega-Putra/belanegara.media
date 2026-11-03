import { ImageResponse } from "next/og";
import { articles } from "@/data/articles";
import { SITE_NAME, getArticle, getCategoryByName } from "@/lib/articles";

export const alt = "Artikel BelaNegara.id";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug)!;
  const { color } = getCategoryByName(article.category);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#fff",
          background: `linear-gradient(160deg, ${color}, #6fd6a6 90%)`,
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700 }}>{SITE_NAME}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              fontSize: 28,
              padding: "6px 22px",
              borderRadius: 99,
              background: "rgba(255,255,255,.2)",
            }}
          >
            {article.category}
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15 }}>{article.title}</div>
        </div>
      </div>
    ),
    size,
  );
}

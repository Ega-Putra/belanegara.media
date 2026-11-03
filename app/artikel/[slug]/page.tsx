import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/ArticleBody";
import PopularSidebar from "@/components/PopularSidebar";
import { articles } from "@/data/articles";
import { formatDate, getArticle, getCategoryByName } from "@/lib/articles";
import { OG_SIZE, baseOpenGraph, truncate } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const url = `/artikel/${article.slug}`;
  const description = truncate(article.excerpt);
  // Tanpa `image`, og:image diisi otomatis oleh opengraph-image.tsx.
  const images = article.image
    ? [{ url: article.image.src, ...OG_SIZE, alt: article.image.alt, type: "image/webp" }]
    : undefined;

  return {
    title: article.title,
    description,
    authors: [{ name: article.author.name }],
    alternates: { canonical: url },
    openGraph: {
      ...baseOpenGraph(),
      type: "article",
      url,
      title: article.title,
      description,
      publishedTime: article.date,
      authors: [article.author.name],
      section: article.category,
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      ...(images && { images }),
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const category = getCategoryByName(article.category);
  const { image } = article;

  return (
    <>
      <Link href="/" className="back">
        ← Kembali ke beranda
      </Link>
      <div className="grid">
        <article className="art">
          <Link href={`/kategori/${category.slug}`} className="tag">
            {article.category}
          </Link>
          <h1>{article.title}</h1>
          <div className="meta">
            Oleh <b>{article.author.name}</b> ·{" "}
            <time dateTime={article.date}>{formatDate(article.date)}</time> ·{" "}
            {article.readTime} menit baca
          </div>

          {image ? (
            <figure className="art-figure">
              <Image
                src={image.src}
                alt={image.alt}
                width={OG_SIZE.width}
                height={OG_SIZE.height}
                sizes="(max-width: 860px) 100vw, 720px"
                priority
              />
              <figcaption>
                Foto: <a href={image.sourceUrl}>{image.credit}</a> / Wikimedia Commons,{" "}
                {image.licenseUrl ? (
                  <a href={image.licenseUrl} rel="license">
                    {image.license}
                  </a>
                ) : (
                  image.license
                )}
                {" "}(dipotong)
              </figcaption>
            </figure>
          ) : (
            <div
              className="art-cover"
              style={{ background: `linear-gradient(90deg, ${category.color}, #6fd6a6)` }}
              aria-hidden="true"
            />
          )}

          <ArticleBody content={article.content} />

          <section className="art-sources" aria-labelledby="sumber">
            <h2 id="sumber">Sumber</h2>
            <ol>
              {article.sources.map((s) => (
                <li key={s.url}>
                  {s.publication}, “<a href={s.url}>{s.title}</a>”
                </li>
              ))}
            </ol>
          </section>

          <aside className="author-box" aria-label="Tentang penulis">
            <b>{article.author.name}</b>
            <span>{article.author.bio}</span>
          </aside>
        </article>
        <PopularSidebar />
      </div>
    </>
  );
}

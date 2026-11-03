import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleFigure from "@/components/article/ArticleFigure";
import ArticleMeta from "@/components/article/ArticleMeta";
import AuthorBox from "@/components/article/AuthorBox";
import MarkdownBody from "@/components/article/MarkdownBody";
import SourceList from "@/components/article/SourceList";
import PopularSidebar from "@/components/listing/PopularSidebar";
import { getAllArticles, getArticle } from "@/lib/content";
import { OG_SIZE, baseOpenGraph, truncate } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const url = `/artikel/${article.slug}`;
  const description = truncate(article.excerpt);
  // Tanpa `cover`, og:image diisi otomatis oleh opengraph-image.tsx.
  const images = article.cover
    ? [{ url: article.cover.src, ...OG_SIZE, alt: article.cover.alt, type: "image/webp" }]
    : undefined;

  return {
    title: article.title,
    description,
    authors: [{ name: article.author.name }],
    alternates: { canonical: url },
    ...(article.draft && { robots: { index: false, follow: false } }),
    openGraph: {
      ...baseOpenGraph(),
      type: "article",
      url,
      title: article.title,
      description,
      publishedTime: article.date,
      authors: [article.author.name],
      section: article.category.name,
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
  const { category, cover } = article;

  return (
    <>
      <Link href="/" className="back">
        ← Kembali ke beranda
      </Link>
      <div className="grid">
        <article className="art">
          <Link href={`/kategori/${category.id}`} className="tag">
            {category.name}
          </Link>
          <h1>{article.title}</h1>
          <ArticleMeta article={article} showAuthor />

          {cover ? (
            <ArticleFigure cover={cover} />
          ) : (
            <div
              className="art-cover"
              style={{ background: `linear-gradient(90deg, ${category.color}, #6fd6a6)` }}
              aria-hidden="true"
            />
          )}

          <MarkdownBody markdown={article.body} />
          <SourceList sources={article.sources} />
          <AuthorBox author={article.author} />
        </article>
        <PopularSidebar />
      </div>
    </>
  );
}

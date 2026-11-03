import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PopularSidebar from "@/components/PopularSidebar";
import { articles } from "@/data/articles";
import { SITE_NAME, formatDate, getArticle, getCategoryByName } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const url = `/artikel/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      locale: "id_ID",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const category = getCategoryByName(article.category);

  return (
    <>
      <Link href="/" className="back">
        ← Kembali ke beranda
      </Link>
      <div className="grid">
        <article className="art">
          <div
            className="art-cover"
            style={{ background: `linear-gradient(90deg, ${category.color}, #6fd6a6)` }}
            aria-hidden="true"
          />
          <Link href={`/kategori/${category.slug}`} className="tag">
            {article.category}
          </Link>
          <h1>{article.title}</h1>
          <div className="meta">
            Oleh <b>{article.author}</b> ·{" "}
            <time dateTime={article.date}>{formatDate(article.date)}</time> ·{" "}
            {article.readTime} menit baca
          </div>
          {article.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
        <PopularSidebar />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleFigure from "@/components/article/ArticleFigure";
import ArticleMeta from "@/components/article/ArticleMeta";
import AuthorBox from "@/components/article/AuthorBox";
import Breadcrumbs from "@/components/article/Breadcrumbs";
import MarkdownBody from "@/components/article/MarkdownBody";
import ReadingProgressBar from "@/components/article/ReadingProgressBar";
import ShareButtons from "@/components/article/ShareButtons";
import SourceList from "@/components/article/SourceList";
import PopularSidebar from "@/components/listing/PopularSidebar";
import RelatedArticles from "@/components/listing/RelatedArticles";
import { getAllArticles, getArticle, getRelatedArticles } from "@/lib/content";
import { DEFAULT_OG_IMAGE, OG_SIZE, SITE_URL, baseOpenGraph, truncate } from "@/lib/site";

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
  const relatedArticles = getRelatedArticles(article.slug);
  const articleUrl = new URL(`/artikel/${article.slug}`, SITE_URL).toString();
  const categoryUrl = new URL(`/kategori/${category.id}`, SITE_URL).toString();
  const articleImage = new URL(cover?.src ?? DEFAULT_OG_IMAGE.url, SITE_URL).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        image: [articleImage],
        datePublished: article.date,
        dateModified: article.date,
        inLanguage: "id-ID",
        articleSection: category.name,
        mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
        author: { "@type": "Person", name: article.author.name },
        publisher: {
          "@type": "Organization",
          name: "Bela Negara Media",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: new URL("/icon.svg", SITE_URL).toString() },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: category.name,
            item: categoryUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <ReadingProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumbs category={category} title={article.title} />
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
          <ShareButtons title={article.title} url={articleUrl} />
          <SourceList sources={article.sources} />
          <AuthorBox author={article.author} />
          <RelatedArticles articles={relatedArticles} />
        </article>
        <PopularSidebar />
      </div>
    </>
  );
}

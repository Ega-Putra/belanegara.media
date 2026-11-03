import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleListing from "@/components/listing/ArticleListing";
import CategoryFilter from "@/components/listing/CategoryFilter";
import { categories, getArticlesByCategory, getCategory } from "@/lib/content";
import { DEFAULT_OG_IMAGE, SITE_NAME, baseOpenGraph } from "@/lib/site";

type Props = { params: Promise<{ kategori: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ kategori: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).kategori);
  if (!category) return {};
  const title = `Kategori ${category.name}`;
  const description = category.description;
  const url = `/kategori/${category.id}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...baseOpenGraph(),
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).kategori);
  if (!category) notFound();

  return (
    <>
      <CategoryFilter active={category.id} />
      <h1 className="page-title">{category.name}</h1>
      <ArticleListing
        articles={getArticlesByCategory(category.id)}
        heading={`Artikel ${category.name}`}
      />
    </>
  );
}

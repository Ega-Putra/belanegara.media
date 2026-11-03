import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleListing from "@/components/ArticleListing";
import CategoryFilter from "@/components/CategoryFilter";
import { categories } from "@/data/articles";
import { getArticlesByCategory, getCategory } from "@/lib/articles";

type Props = { params: Promise<{ kategori: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ kategori: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).kategori);
  if (!category) return {};
  const description = `Kumpulan artikel kategori ${category.name} di BelaNegara.id.`;
  return {
    title: `Kategori ${category.name}`,
    description,
    alternates: { canonical: `/kategori/${category.slug}` },
    openGraph: { title: `Kategori ${category.name}`, description, url: `/kategori/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).kategori);
  if (!category) notFound();

  return (
    <>
      <CategoryFilter active={category.slug} />
      <h1 className="page-title">{category.name}</h1>
      <ArticleListing
        articles={getArticlesByCategory(category.name)}
        heading={`Artikel ${category.name}`}
      />
    </>
  );
}

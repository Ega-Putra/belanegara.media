import type { Metadata } from "next";
import ArticleListing from "@/components/ArticleListing";
import CategoryFilter from "@/components/CategoryFilter";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <CategoryFilter />
      <h1 className="sr-only">Artikel terbaru Bela Negara</h1>
      <ArticleListing articles={articles} heading="Artikel terbaru" />
    </>
  );
}

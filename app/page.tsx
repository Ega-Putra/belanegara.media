import type { Metadata } from "next";
import ArticleListing from "@/components/listing/ArticleListing";
import CategoryFilter from "@/components/listing/CategoryFilter";
import { getAllArticles } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <CategoryFilter />
      <h1 className="sr-only">Artikel terbaru Bela Negara</h1>
      <ArticleListing articles={getAllArticles()} heading="Artikel terbaru" />
    </>
  );
}

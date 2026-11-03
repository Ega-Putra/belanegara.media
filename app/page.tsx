import type { Metadata } from "next";
import ArticleListing from "@/components/listing/ArticleListing";
import { getAllArticles } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const articles = getAllArticles();

  return (
    <>
      <h1 className="sr-only">Artikel terbaru Bela Negara</h1>
      <ArticleListing articles={articles} heading="Artikel terbaru" />
    </>
  );
}

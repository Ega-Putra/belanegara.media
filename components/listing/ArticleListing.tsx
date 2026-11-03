import ArticleCard from "@/components/article/ArticleCard";
import FeaturedArticle from "@/components/article/FeaturedArticle";
import type { Article } from "@/types/content";
import PopularSidebar from "./PopularSidebar";

/** Tata letak beranda/kategori: artikel unggulan + grid kartu + sidebar Terpopuler. */
export default function ArticleListing({
  articles,
  heading,
}: {
  articles: Article[];
  heading: string;
}) {
  const [featured, ...rest] = articles;

  return (
    <div className="grid">
      <section aria-label={heading}>
        {featured ? <FeaturedArticle article={featured} /> : <p>Belum ada artikel.</p>}
        {rest.length > 0 && (
          <div className="list">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </section>
      <PopularSidebar />
    </div>
  );
}

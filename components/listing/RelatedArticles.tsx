import ArticleCard from "@/components/article/ArticleCard";
import type { Article } from "@/types/content";

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="related" aria-labelledby="artikel-terkait">
      <h2 id="artikel-terkait">Artikel terkait</h2>
      <div className="list">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}

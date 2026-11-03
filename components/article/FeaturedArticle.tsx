import Link from "next/link";
import type { Article } from "@/types/content";
import ArticleMeta from "./ArticleMeta";

export default function FeaturedArticle({ article }: { article: Article }) {
  const { category } = article;

  return (
    <article
      className="hero"
      style={{ background: `linear-gradient(160deg, ${category.color}, #6fd6a6 90%)` }}
    >
      <Link href={`/artikel/${article.slug}`}>
        <div>
          <span className="tag">{category.name}</span>
          <h2>{article.title}</h2>
          <ArticleMeta article={article} />
        </div>
      </Link>
    </article>
  );
}

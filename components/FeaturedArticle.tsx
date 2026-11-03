import Link from "next/link";
import type { Article } from "@/data/articles";
import { formatDate, getCategoryByName } from "@/lib/articles";

export default function FeaturedArticle({ article }: { article: Article }) {
  const { color } = getCategoryByName(article.category);

  return (
    <article
      className="hero"
      style={{ background: `linear-gradient(160deg, ${color}, #6fd6a6 90%)` }}
    >
      <Link href={`/artikel/${article.slug}`}>
        <div>
          <span className="tag">{article.category}</span>
          <h2>{article.title}</h2>
          <div className="meta">
            <time dateTime={article.date}>{formatDate(article.date)}</time> ·{" "}
            {article.readTime} menit baca
          </div>
        </div>
      </Link>
    </article>
  );
}

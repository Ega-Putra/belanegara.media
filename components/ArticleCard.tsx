import Link from "next/link";
import type { Article } from "@/data/articles";
import { formatDate, getCategoryByName } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  const { color } = getCategoryByName(article.category);

  return (
    <article className="card">
      <Link href={`/artikel/${article.slug}`}>
        <div
          className="thumb"
          style={{ background: `linear-gradient(135deg, ${color}, #6fd6a6)` }}
          aria-hidden="true"
        >
          {article.category[0]}
        </div>
        <span className="tag">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="meta">
          <time dateTime={article.date}>{formatDate(article.date)}</time> ·{" "}
          {article.readTime} menit baca
        </div>
      </Link>
    </article>
  );
}

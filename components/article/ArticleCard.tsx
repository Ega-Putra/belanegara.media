import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/content";
import ArticleMeta from "./ArticleMeta";

export default function ArticleCard({ article }: { article: Article }) {
  const { category, cover } = article;

  return (
    <article className="card">
      <Link href={`/artikel/${article.slug}`}>
        <div
          className="thumb"
          style={{ background: `linear-gradient(135deg, ${category.color}, #6fd6a6)` }}
          aria-hidden={cover ? undefined : true}
        >
          {cover ? (
            <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 360px" />
          ) : (
            category.name[0]
          )}
        </div>
        <span className="tag">{category.name}</span>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <ArticleMeta article={article} />
      </Link>
    </article>
  );
}

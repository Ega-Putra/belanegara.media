import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/content";
import ArticleMeta from "./ArticleMeta";

export default function FeaturedArticle({ article }: { article: Article }) {
  const { category, cover } = article;

  return (
    <article
      className={cover ? "hero has-image" : "hero"}
      style={{ background: `linear-gradient(160deg, ${category.color}, #6fd6a6 90%)` }}
    >
      {cover && (
        <Image src={cover.src} alt={cover.alt} fill priority sizes="(max-width: 860px) 100vw, 720px" />
      )}
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

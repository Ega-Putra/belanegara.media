import type { Article } from "@/types/content";
import { formatDate } from "@/lib/format";

/** Baris "tanggal · menit baca". Nama penulis hanya dipakai di halaman artikel. */
export default function ArticleMeta({
  article,
  showAuthor = false,
}: {
  article: Article;
  showAuthor?: boolean;
}) {
  return (
    <div className="meta">
      {article.draft && <span className="draft-badge">Draf</span>}
      {showAuthor && (
        <>
          Oleh <b>{article.author.name}</b> ·{" "}
        </>
      )}
      <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readTime} menit baca
    </div>
  );
}

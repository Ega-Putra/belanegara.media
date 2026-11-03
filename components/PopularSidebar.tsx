import Link from "next/link";
import { getPopularArticles } from "@/lib/articles";

export default function PopularSidebar() {
  return (
    <aside aria-labelledby="terpopuler">
      <h2 id="terpopuler">Terpopuler</h2>
      <ol className="pop">
        {getPopularArticles().map((a) => (
          <li key={a.slug}>
            <Link href={`/artikel/${a.slug}`}>{a.title}</Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}

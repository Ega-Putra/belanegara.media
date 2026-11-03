import type { Source } from "@/types/content";

export default function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section className="art-sources" aria-labelledby="sumber">
      <h2 id="sumber">Sumber</h2>
      <ol>
        {sources.map((s) => (
          <li key={s.url}>
            {s.publication}, “<a href={s.url}>{s.title}</a>”
          </li>
        ))}
      </ol>
    </section>
  );
}

import type { Author } from "@/types/content";

export default function AuthorBox({ author }: { author: Author }) {
  return (
    <aside className="author-box" aria-label="Tentang penulis">
      <b>{author.name}</b>
      <span>{author.bio}</span>
    </aside>
  );
}

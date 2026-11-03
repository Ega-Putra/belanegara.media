import { Fragment, type ReactNode } from "react";

/** Mengubah **tebal** dan penanda [VERIFY ...] / [ISI: ...] menjadi elemen inline. */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[(?:VERIFY|ISI)[^\]]*\])/g).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (/^\[(VERIFY|ISI)/.test(part)) return <mark key={i} className="todo">{part}</mark>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Paragraf biasa, "## " = subjudul, baris "- " berurutan = daftar butir. */
export default function ArticleBody({ content }: { content: string[] }) {
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (!list.length) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`}>
        {list.map((item, i) => (
          <li key={i}>{inline(item)}</li>
        ))}
      </ul>,
    );
    list = [];
  };

  content.forEach((line, i) => {
    if (line.startsWith("- ")) return void list.push(line.slice(2));
    flush();
    blocks.push(
      line.startsWith("## ") ? (
        <h2 key={i}>{line.slice(3)}</h2>
      ) : (
        <p key={i}>{inline(line)}</p>
      ),
    );
  });
  flush();

  return <>{blocks}</>;
}

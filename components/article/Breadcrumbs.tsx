import Link from "next/link";
import type { Category } from "@/types/content";

export default function Breadcrumbs({
  category,
  title,
}: {
  category: Category;
  title: string;
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Beranda</Link>
        </li>
        <li aria-hidden="true" className="sep">
          /
        </li>
        <li>
          <Link href={`/kategori/${category.id}`}>{category.name}</Link>
        </li>
        <li aria-hidden="true" className="sep">
          /
        </li>
        <li aria-current="page" className="current">
          <span>{title}</span>
        </li>
      </ol>
    </nav>
  );
}

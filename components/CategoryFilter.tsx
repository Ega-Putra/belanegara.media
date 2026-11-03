import Link from "next/link";
import { categories } from "@/data/articles";

/** Chip kategori. `active` = slug kategori aktif, kosong untuk "Semua". */
export default function CategoryFilter({ active }: { active?: string }) {
  const items = [{ name: "Semua", href: "/", slug: undefined as string | undefined }].concat(
    categories.map((c) => ({ name: c.name, href: `/kategori/${c.slug}`, slug: c.slug })),
  );

  return (
    <nav aria-label="Filter kategori">
      <ul className="cats">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="chip"
              aria-current={item.slug === active ? "page" : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

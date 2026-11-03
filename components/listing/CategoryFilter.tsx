import Link from "next/link";
import { categories } from "@/data/categories";

/** Chip kategori. `active` = id kategori aktif, kosong untuk "Semua". */
export default function CategoryFilter({ active }: { active?: string }) {
  const items = [
    { name: "Semua", href: "/", id: undefined as string | undefined },
    ...categories.map((c) => ({ name: c.name, href: `/kategori/${c.id}`, id: c.id })),
  ];

  return (
    <nav aria-label="Filter kategori">
      <ul className="cats">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="chip"
              aria-current={item.id === active ? "page" : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

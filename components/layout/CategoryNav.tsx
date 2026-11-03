"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";

export default function CategoryNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Beranda", href: "/", isCurrent: pathname === "/" },
    ...categories.map((c) => {
      const href = `/kategori/${c.id}`;
      return {
        name: c.name,
        href,
        isCurrent: pathname === href,
      };
    }),
  ];

  return (
    <nav className="rubrik-nav" aria-label="Kanal berita dan rubrik">
      <ul className="rubrik-list">
        {navItems.map((item) => (
          <li key={item.name} className="rubrik-item">
            <Link
              href={item.href}
              className={`rubrik-link ${item.isCurrent ? "is-active" : ""}`}
              aria-current={item.isCurrent ? "page" : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { SearchArticle } from "@/types/content";

export default function HeaderSearch({ articles }: { articles: SearchArticle[] }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const listboxId = useId();

  const normalizedQuery = query.trim().toLocaleLowerCase("id-ID");
  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    return articles
      .filter((article) =>
        [article.title, article.excerpt, article.category.name]
          .join(" ")
          .toLocaleLowerCase("id-ID")
          .includes(normalizedQuery),
      )
      .slice(0, 5);
  }, [articles, normalizedQuery]);

  // Handle click outside to close results dropdown and mobile search bar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsMobileSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      setIsMobileSearchOpen(false);
      return;
    }

    if (!isOpen || results.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1 < results.length ? prev + 1 : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : results.length - 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const targetArticle = activeIndex >= 0 ? results[activeIndex] : results[0];
      if (targetArticle) {
        setIsOpen(false);
        setIsMobileSearchOpen(false);
        setQuery("");
        router.push(`/artikel/${targetArticle.slug}`);
      }
    }
  };

  const handleSelect = () => {
    setIsOpen(false);
    setIsMobileSearchOpen(false);
    setQuery("");
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => inputRef.current?.focus(), 80);
      }
      return next;
    });
  };

  return (
    <div className={`search-nav ${isMobileSearchOpen ? "mobile-open" : ""}`} ref={containerRef}>
      {/* Tombol Toggle Pencarian untuk Mobile */}
      <button
        type="button"
        className="search-mobile-toggle"
        aria-label={isMobileSearchOpen ? "Tutup pencarian" : "Cari artikel"}
        aria-expanded={isMobileSearchOpen}
        onClick={toggleMobileSearch}
      >
        {isMobileSearchOpen ? (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        )}
      </button>

      {/* Input Pencarian */}
      <div className="search-field-wrap">
        <label htmlFor="header-search" className="sr-only">
          Cari artikel berdasarkan judul atau kategori
        </label>
        <input
          ref={inputRef}
          id="header-search"
          type="search"
          role="combobox"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => {
            if (normalizedQuery) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Cari artikel…"
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-expanded={isOpen && Boolean(normalizedQuery)}
          aria-activedescendant={
            activeIndex >= 0 && results[activeIndex] ? `search-item-${results[activeIndex].slug}` : undefined
          }
        />
        {isOpen && normalizedQuery && (
          <div id={listboxId} className="search-nav-results" role="listbox" aria-label="Hasil pencarian artikel">
            {results.length > 0 ? (
              <>
                <p>{results.length === 1 ? "1 hasil ditemukan" : `${results.length} hasil teratas`}</p>
                <ul>
                  {results.map((article, index) => {
                    const isSelected = index === activeIndex;
                    return (
                      <li key={article.slug} id={`search-item-${article.slug}`} role="option" aria-selected={isSelected}>
                        <Link
                          href={`/artikel/${article.slug}`}
                          onClick={handleSelect}
                          className={isSelected ? "is-active" : undefined}
                        >
                          <b>{article.title}</b>
                          <span>{article.category.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <p>Tidak ada artikel yang cocok.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

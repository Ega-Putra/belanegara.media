import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { SITE_NAME } from "@/lib/site";
import CategoryNav from "./CategoryNav";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
import Ticker from "./Ticker";

export default function Header() {
  const articles = getAllArticles();
  const searchArticles = articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    category: { name: a.category.name },
  }));

  return (
    <>
      {/* LAPIS 1: Header Utama (Sticky) */}
      <header className="main-header">
        <div className="flag" />
        <div className="wrap main-header-wrap">
          <Link href="/" className="logo-link" aria-label={`${SITE_NAME} – Beranda`}>
            <Logo />
          </Link>

          <div className="main-header-nav">
            <CategoryNav />
          </div>

          <div className="main-header-actions">
            <HeaderSearch articles={searchArticles} />
            <a href="#kontak" className="opini-btn" title="Kirim artikel Anda ke redaksi">
              Kirim Artikel
            </a>
          </div>
        </div>
      </header>

      {/* LAPIS 2: Sub-bar Berita Terkini & Tanggal (Tersatu) */}
      <Ticker />
    </>
  );
}

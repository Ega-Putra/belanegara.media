import Link from "next/link";
import Logo from "./Logo";
import Ticker from "./Ticker";
import { SITE_NAME } from "@/lib/site";

export default function Header() {
  return (
    <>
      <div className="flag" />
      <header className="top">
        <div className="wrap bar">
          <Link href="/" className="logo-link" aria-label={`${SITE_NAME} – Beranda`}>
            <Logo />
          </Link>
          <nav className="nav" aria-label="Navigasi utama">
            <Link href="/">Artikel</Link>
            <a href="#kontak">Kontak</a>
          </nav>
          <a className="cta" href="#kontak">
            Hubungi kami
          </a>
        </div>
      </header>
      <Ticker />
    </>
  );
}

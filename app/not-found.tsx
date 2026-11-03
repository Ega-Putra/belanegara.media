import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="big">404</div>
      <h1>Halaman tidak ditemukan</h1>
      <p>Artikel atau halaman yang Anda cari tidak tersedia atau sudah dipindahkan.</p>
      <Link href="/" className="cta">
        Kembali ke beranda
      </Link>
    </section>
  );
}

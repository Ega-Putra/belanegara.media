import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGE, SITE_NAME, baseOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description: `Syarat dan ketentuan penggunaan portal ${SITE_NAME}, hak cipta tulisan, etika pengiriman naskah, dan tanggung jawab pembaca.`,
  alternates: { canonical: "/syarat-ketentuan" },
  openGraph: {
    ...baseOpenGraph(),
    url: "/syarat-ketentuan",
    title: `Syarat dan Ketentuan | ${SITE_NAME}`,
    description: `Syarat dan ketentuan penggunaan portal ${SITE_NAME}.`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `Syarat dan Ketentuan | ${SITE_NAME}`,
    description: `Syarat dan ketentuan penggunaan portal ${SITE_NAME}.`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function SyaratKetentuanPage() {
  return (
    <div className="legal-wrap">
      <Link href="/" className="back">
        ← Kembali ke beranda
      </Link>
      <article className="art">
        <h1>Syarat dan Ketentuan</h1>
        <div className="meta">Terakhir diperbarui: 3 November 2026</div>

        <p>
          Selamat datang di <strong>{SITE_NAME}</strong>. Dengan mengakses dan
          menggunakan portal ini, Anda menyatakan setuju untuk terikat oleh Syarat dan
          Ketentuan yang berlaku di bawah ini. Jika Anda tidak menyetujui salah satu poin,
          kami menyarankan untuk tidak melanjutkan penggunaan portal.
        </p>

        <h2>1. Tujuan Portal</h2>
        <p>
          {SITE_NAME} adalah media publikasi independen berbasis edukasi dan literasi
          yang memuat artikel, ulasan, serta opini seputar nilai-nilai Bela Negara,
          wawasan kebangsaan, kepedulian lingkungan, literasi digital, dan kontribusi
          generasi muda di Indonesia.
        </p>

        <h2>2. Hak Cipta &amp; Penggunaan Konten</h2>
        <ul>
          <li>
            Seluruh naskah tulisan, logo, dan karya editorial yang diterbitkan di portal
            ini dilindungi oleh undang-undang hak cipta.
          </li>
          <li>
            Pembaca diperkenankan mengutip sebagian isi artikel untuk keperluan
            akademis, edukasi, atau diskusi non-komersial dengan kewajiban{" "}
            <strong>menyertakan atribusi yang jelas</strong> (mencantumkan nama penulis
            dan tautan langsung ke artikel asli di {SITE_NAME}).
          </li>
          <li>
            Dilarang menggandakan, mempublikasikan ulang (*repost*) seluruh naskah
            secara utuh, atau memanfaatkan konten untuk kepentingan komersial tanpa izin
            tertulis dari redaksi atau penulis bersangkutan.
          </li>
          <li>
            Gambar rujukan berlisensi terbuka (seperti dari Wikimedia Commons dengan
            lisensi CC BY-SA) tunduk pada ketentuan lisensi masing-masing sumber yang
            tercantum pada takarir (*caption*) gambar.
          </li>
        </ul>

        <h2>3. Pengiriman Naskah &amp; Opini Pembaca</h2>
        <p>
          Bagi pembaca, mahasiswa, atau kontributor yang mengirimkan tulisan melalui
          tombol &ldquo;Kirim Artikel&rdquo; atau kontak redaksi:
        </p>
        <ul>
          <li>
            Naskah harus merupakan karya orisinal, bukan hasil plagiarisme atau fabrikasi
            informasi.
          </li>
          <li>
            Naskah tidak boleh memuat unsur disinformasi/hoaks, ujaran kebencian,
            pencemaran nama baik, atau provokasi SARA.
          </li>
          <li>
            Redaksi berhak menyunting judul, tata bahasa, dan format naskah tanpa
            mengubah substansi pemikiran penulis sebelum diterbitkan.
          </li>
          <li>
            Opini yang dimuat sepenuhnya menjadi tanggung jawab moral dan intelektual
            masing-masing penulis.
          </li>
        </ul>

        <h2>4. Batasan Tanggung Jawab (Disclaimer)</h2>
        <p>
          Informasi yang disajikan di {SITE_NAME} ditujukan untuk tujuan edukasi dan
          pertukaran gagasan publik. Meskipun kami berupaya memastikan akurasi data
          rujukan pada saat penulisan, kami tidak memberikan jaminan mutlak atas
          kelengkapan atau kesesuaian informasi untuk situasi tertentu. {SITE_NAME} tidak
          bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul
          dari pemanfaatan informasi di portal ini.
        </p>

        <h2>5. Perubahan Ketentuan</h2>
        <p>
          Redaksi berhak mengubah dan memperbarui Syarat dan Ketentuan ini sewaktu-waktu.
          Penggunaan berkelanjutan atas situs ini setelah adanya perubahan merupakan
          bentuk persetujuan Anda terhadap ketentuan yang diperbarui.
        </p>

        <h2>6. Kontak &amp; Korespondensi</h2>
        <p>
          Segala pertanyaan, klarifikasi hak cipta, atau sanggahan terkait konten dapat
          diajukan kepada kami melalui:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:redaksi@belanegara.web.id">redaksi@belanegara.web.id</a>
          </li>
          <li>
            WhatsApp:{" "}
            <a
              href="https://wa.me/6283854581262"
              target="_blank"
              rel="noopener noreferrer"
            >
              083854581262 ↗
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}

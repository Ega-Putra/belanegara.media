import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, baseOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: `Kebijakan privasi portal ${SITE_NAME} mengenai perlindungan data, keterbukaan informasi, dan privasi pembaca.`,
  alternates: { canonical: "/kebijakan-privasi" },
  openGraph: {
    ...baseOpenGraph(),
    url: "/kebijakan-privasi",
    title: `Kebijakan Privasi | ${SITE_NAME}`,
    description: `Kebijakan privasi portal ${SITE_NAME}.`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `Kebijakan Privasi | ${SITE_NAME}`,
    description: `Kebijakan privasi portal ${SITE_NAME}.`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="legal-wrap">
      <Link href="/" className="back">
        ← Kembali ke beranda
      </Link>
      <article className="art">
        <h1>Kebijakan Privasi</h1>
        <div className="meta">Terakhir diperbarui: 3 November 2026</div>

        <p>
          Selamat datang di <strong>{SITE_NAME}</strong> (
          <a href={SITE_URL}>{SITE_URL}</a>). Kami menghargai dan berkomitmen untuk
          melindungi privasi serta keamanan informasi setiap pengunjung dan pembaca
          portal kami. Kebijakan Privasi ini menjelaskan bagaimana informasi Anda
          dikelola saat mengakses layanan kami.
        </p>

        <h2>1. Informasi yang Kami Kumpulkan</h2>
        <p>
          {SITE_NAME} adalah portal media artikel publikasi statis. Kami tidak
          mewajibkan registrasi akun atau pengisian data pribadi bagi pembaca umum
          untuk mengakses seluruh artikel dan opini di situs ini. Informasi yang kami
          terima terbatas pada:
        </p>
        <ul>
          <li>
            <strong>Komunikasi Sukarela:</strong> Informasi seperti nama, alamat
            email, atau nomor telepon/WhatsApp yang Anda berikan secara sukarela saat
            menghubungi redaksi atau mengajukan naskah artikel.
          </li>
          <li>
            <strong>Data Teknis Standar:</strong> Log server standar (seperti alamat IP
            anonim, jenis peramban, dan halaman rujukan) yang diproses semata-mata
            untuk menjaga keandalan operasional dan keamanan infrastruktur situs.
          </li>
        </ul>

        <h2>2. Penggunaan Informasi</h2>
        <p>
          Informasi kontak yang Anda kirimkan kepada kami hanya digunakan untuk:
        </p>
        <ul>
          <li>Membalas pesan, masukan, dan pertanyaan dari pembaca.</li>
          <li>
            Proses kurasi, verifikasi, dan penyuntingan naskah opini atau artikel yang
            diajukan kepada redaksi.
          </li>
        </ul>
        <p>
          Kami <strong>tidak pernah</strong> menjual, menyewakan, atau membagikan
          informasi kontak pribadi Anda kepada pihak ketiga untuk kepentingan komersial
          maupun pemasaran.
        </p>

        <h2>3. Penggunaan Cookie &amp; Pelacak</h2>
        <p>
          Portal ini tidak menggunakan *tracking cookie* invasif atau jaringan iklan
          pihak ketiga. Seluruh pencarian artikel di kotak pencarian diproses langsung di
          peramban pengunjung (*client-side*) tanpa menyimpan riwayat pencarian Anda ke
          basis data eksternal.
        </p>

        <h2>4. Tautan ke Situs Eksternal</h2>
        <p>
          Artikel kami dapat memuat tautan rujukan berita, sumber akademis, atau
          regulasi pemerintah (misalnya Kominfo, Wikimedia Commons, atau portal berita
          nasional). Harap dicatat bahwa {SITE_NAME} tidak bertanggung jawab atas
          kebijakan privasi atau isi dari situs eksternal tersebut. Kami menyarankan Anda
          membaca kebijakan privasi masing-masing situs yang Anda kunjungi.
        </p>

        <h2>5. Perubahan Kebijakan</h2>
        <p>
          Kebijakan Privasi ini dapat diperbarui sewaktu-waktu agar tetap selaras dengan
          perkembangan portal dan regulasi yang berlaku. Tanggal pembaruan terakhir akan
          selalu dicantumkan di bagian atas halaman ini.
        </p>

        <h2>6. Kontak Redaksi</h2>
        <p>
          Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau pengelolaan
          naskah, silakan hubungi kami melalui saluran resmi:
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

export type Category =
  | "Wawasan Kebangsaan"
  | "Generasi Muda"
  | "Digital"
  | "Lingkungan";

export type Article = {
  title: string;
  /** Dibuat dari judul saat artikel ditulis, lalu dibekukan agar URL tidak berubah jika judul diedit. */
  slug: string;
  category: Category;
  author: string;
  /** Tanggal terbit, format ISO (YYYY-MM-DD). */
  date: string;
  readTime: number;
  excerpt: string;
  content: string[];
};

export const articles: Article[] = [
  {
    title: "Bela Negara di Era Digital: Cukup Mulai dari Jempol",
    slug: "bela-negara-di-era-digital-cukup-mulai-dari-jempol",
    category: "Digital",
    author: "Rina Maharani",
    date: "2026-11-02",
    readTime: 5,
    excerpt:
      "Menjaga nama baik bangsa bisa dimulai dari cara kita bermedia sosial.",
    content: [
      "Bela negara tidak selalu berarti mengangkat senjata. Di era digital, setiap unggahan adalah wajah Indonesia di mata dunia. Menyebarkan informasi yang benar, menolak hoaks, dan bersikap santun di kolom komentar adalah bentuk nyata cinta tanah air.",
      "Generasi muda punya peran besar karena paling banyak menghabiskan waktu di ruang digital. Satu artikel yang jernih bisa meluruskan seratus kabar yang menyesatkan.",
      "Mulailah dari hal kecil: periksa sumber sebelum membagikan, gunakan bahasa yang baik, dan tampilkan karya anak bangsa.",
    ],
  },
  {
    title: "Pancasila sebagai Kompas Anak Muda Menghadapi Perubahan",
    slug: "pancasila-sebagai-kompas-anak-muda-menghadapi-perubahan",
    category: "Wawasan Kebangsaan",
    author: "Dimas Prakoso",
    date: "2026-11-01",
    readTime: 4,
    excerpt:
      "Lima sila bukan hafalan, melainkan pegangan mengambil keputusan sehari-hari.",
    content: [
      "Perubahan zaman bergerak cepat, tetapi nilai Pancasila tetap relevan. Gotong royong terlihat saat mahasiswa menggalang bantuan bencana, dan keadilan sosial hadir ketika kita membela teman yang diperlakukan tidak adil.",
      "Menghayati Pancasila berarti menerapkannya dalam keputusan kecil di rumah, kampus, dan tempat kerja.",
    ],
  },
  {
    title: "Kontribusi Mahasiswa untuk Kemajuan Bangsa",
    slug: "kontribusi-mahasiswa-untuk-kemajuan-bangsa",
    category: "Generasi Muda",
    author: "Salsabila Putri",
    date: "2026-10-30",
    readTime: 4,
    excerpt:
      "Dari riset sampai pengabdian desa, mahasiswa punya banyak jalan berkontribusi.",
    content: [
      "Kemajuan bangsa dibangun dari kontribusi yang konsisten. Mahasiswa dapat mengembangkan riset yang menjawab masalah lokal, mengajar di daerah tertinggal, atau membuat aplikasi yang memudahkan layanan publik.",
      "Yang terpenting adalah niat untuk memberi manfaat, sekecil apa pun skalanya.",
    ],
  },
  {
    title: "Menjaga Lingkungan adalah Bagian dari Bela Negara",
    slug: "menjaga-lingkungan-adalah-bagian-dari-bela-negara",
    category: "Lingkungan",
    author: "Bagus Wicaksono",
    date: "2026-10-28",
    readTime: 3,
    excerpt:
      "Tanah, air, dan hutan adalah bagian dari kedaulatan yang wajib kita rawat.",
    content: [
      "Negara yang kuat membutuhkan alam yang sehat. Memilah sampah, menghemat air, dan menanam pohon di lingkungan sekitar adalah langkah sederhana yang berdampak panjang.",
      "Menjaga alam berarti menjaga masa depan anak cucu bangsa.",
    ],
  },
  {
    title: "Sumpah Pemuda 98 Tahun Kemudian: Apa yang Kita Wariskan?",
    slug: "sumpah-pemuda-98-tahun-kemudian-apa-yang-kita-wariskan",
    category: "Wawasan Kebangsaan",
    author: "Nadia Kusuma",
    date: "2026-10-28",
    readTime: 5,
    excerpt: "Persatuan masih relevan di tengah beragam perbedaan pandangan.",
    content: [
      "Sembilan dekade lebih setelah Sumpah Pemuda, tantangan persatuan berubah bentuk. Perbedaan pilihan dan pandangan kini sering memanas di dunia maya.",
      "Semangat satu tanah air, satu bangsa, satu bahasa mengingatkan bahwa perbedaan tidak harus memecah.",
    ],
  },
  {
    title: "Literasi Digital: Benteng Pertama Melawan Hoaks",
    slug: "literasi-digital-benteng-pertama-melawan-hoaks",
    category: "Digital",
    author: "Farhan Aditya",
    date: "2026-10-26",
    readTime: 4,
    excerpt:
      "Cek fakta dulu, bagikan kemudian. Kebiasaan sederhana yang menyelamatkan banyak orang.",
    content: [
      "Hoaks menyebar lebih cepat daripada klarifikasi. Karena itu, kemampuan menilai sumber informasi menjadi keterampilan dasar warga negara masa kini.",
      "Biasakan memeriksa tanggal, penulis, dan sumber asli sebelum membagikan sebuah kabar.",
    ],
  },
];

/** Urutan daftar "Terpopuler" di sidebar. */
export const popularSlugs = [
  "sumpah-pemuda-98-tahun-kemudian-apa-yang-kita-wariskan",
  "bela-negara-di-era-digital-cukup-mulai-dari-jempol",
  "pancasila-sebagai-kompas-anak-muda-menghadapi-perubahan",
  "literasi-digital-benteng-pertama-melawan-hoaks",
];

export const categories: { name: Category; slug: string; color: string }[] = [
  { name: "Wawasan Kebangsaan", slug: "wawasan-kebangsaan", color: "#0e9455" },
  { name: "Generasi Muda", slug: "generasi-muda", color: "#2b7fd4" },
  { name: "Digital", slug: "digital", color: "#8a5fd0" },
  { name: "Lingkungan", slug: "lingkungan", color: "#d68a14" },
];

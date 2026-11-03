export type Category =
  | "Wawasan Kebangsaan"
  | "Generasi Muda"
  | "Digital"
  | "Lingkungan";

export type Author = {
  name: string;
  /** Hanya ditampilkan di halaman artikel. */
  bio: string;
};

export type ArticleImage = {
  /** Path di /public, WebP 1200x630, < 200 KB. Dipakai juga sebagai og:image. */
  src: string;
  /** Kalimat deskriptif dalam bahasa Indonesia. */
  alt: string;
  /** Nama fotografer/pengunggah. */
  credit: string;
  /** Halaman asli gambar (mis. Wikimedia Commons). */
  sourceUrl: string;
  license: string;
  licenseUrl?: string;
};

export type Source = {
  publication: string;
  title: string;
  url: string;
};

export type Article = {
  title: string;
  /** Dibuat dari judul saat artikel ditulis, lalu dibekukan agar URL tidak berubah jika judul diedit. */
  slug: string;
  category: Category;
  author: Author;
  /** Tanggal terbit, format ISO (YYYY-MM-DD). */
  date: string;
  readTime: number;
  /** Maksimal 155 karakter. */
  excerpt: string;
  /**
   * Paragraf isi artikel. Baris diawali "## " menjadi subjudul, "- " menjadi butir daftar.
   * Penanda [VERIFY ...] dan [ISI: ...] disorot agar mudah dicek sebelum terbit.
   */
  content: string[];
  sources: Source[];
  /** Opsional. Jika kosong, gambar pratinjau dibuat otomatis oleh opengraph-image.tsx. */
  image?: ArticleImage;
};

export const author: Author = {
  name: "Radith Pribadi Tegar",
  bio: 'Mahasiswa UPN "Veteran" Jawa Timur, Kelas Bela Negara G224',
};

const UU_23_2019: Source = {
  publication: "JDIH BPK RI",
  title:
    "Undang-Undang Nomor 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara",
  url: "https://peraturan.bpk.go.id/Home/Download/114482/UU%20Nomor%2023%20Tahun%202019.pdf",
};

const CC_BY_SA_4: Pick<ArticleImage, "license" | "licenseUrl"> = {
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
};

export const articles: Article[] = [
  {
    title: "Outbound Bela Negara: Saat Nilai Kebangsaan Diuji di Luar Kelas",
    slug: "outbound-bela-negara-saat-nilai-kebangsaan-diuji-di-luar-kelas",
    category: "Generasi Muda",
    author,
    date: "2026-11-02",
    readTime: 3,
    excerpt:
      'Di UPN "Veteran" Jawa Timur, praktikum Bela Negara tidak berhenti di kelas. Lewat outbound, nilai yang biasanya dihafal harus benar-benar dipraktikkan.',
    content: [
      'Jujur saja, waktu pertama kali melihat kata "outbound" di jadwal mata kuliah Pendidikan Bela Negara, yang terbayang di kepala saya cuma permainan tali, lari estafet, dan baju yang pulang dalam keadaan kotor. Saya tidak menyangka kegiatan itu justru membuat materi kuliah terasa lebih masuk akal.',
      'Di UPN "Veteran" Jawa Timur, outbound memang bukan acara hiburan tambahan. Berdasarkan pengumuman Lembaga Pengembangan Pembelajaran dan Penjaminan Mutu (LP3M), praktikum mata kuliah Pendidikan Bela Negara terdiri dari dua bagian: outbound luring di kampus dan outbound mandiri. Outbound mandiri dikerjakan lewat aplikasi Sistem Informasi Outbound Bela Negara (SIOBEL). Di sana mahasiswa mengunggah bukti penerapan nilai-nilai bela negara sesuai rubrik, lalu dosen penilai memverifikasi apakah bukti itu memang sesuai.',
      "## Bukan sekadar permainan",
      "Bagian luring di kampus mungkin terlihat seperti permainan biasa. Tetapi hampir setiap tantangan dalam kegiatan kelompok seperti ini menuntut hal yang sama: mau mendengarkan, mau membagi peran, dan mau percaya pada orang yang mungkin baru dikenal hari itu.",
      "[ISI: ceritakan satu tantangan yang benar-benar kamu ikuti saat outbound luring, misalnya apa yang harus dilakukan kelompokmu, bagian mana yang paling sulit, dan bagaimana kelompokmu menyelesaikannya.]",
      'Dari situ saya mulai paham bahwa "sadar berbangsa dan bernegara" tidak selalu harus terdengar besar. Dalam skala kecil, artinya mau menurunkan ego demi tujuan bersama. Dalam kerja kelompok mana pun, ego yang terlalu besar justru memperlambat semua orang, sementara kelompok yang saling mendengar biasanya bergerak lebih ringan.',
      "## Lima nilai dasar, satu rubrik",
      "Yang membuat outbound ini terasa nyambung dengan materi kuliah adalah nilai-nilai yang dipakai sebagai ukuran. Undang-Undang Nomor 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara menyebut lima nilai dasar bela negara:",
      "- cinta tanah air;",
      "- sadar berbangsa dan bernegara;",
      "- setia pada Pancasila sebagai ideologi negara;",
      "- rela berkorban untuk bangsa dan negara; dan",
      "- kemampuan awal bela negara.",
      "Undang-undang yang sama juga menyebut bahwa pembinaan kesadaran bela negara diselenggarakan di lingkup pendidikan, pekerjaan, dan masyarakat. Kampus jelas termasuk lingkup pendidikan itu, dan outbound adalah salah satu cara menerjemahkannya ke kegiatan nyata.",
      "Outbound mandiri lewat SIOBEL membuat kelima nilai itu harus dibuktikan, bukan sekadar dihafal. Rubriknya terdiri dari bagian yang wajib dan bagian pilihan.",
      "[ISI: sebutkan contoh kegiatan yang kamu unggah ke SIOBEL dan nilai bela negara mana yang menurutmu paling terasa dari kegiatan itu.]",
      "Bagian ini yang menurut saya paling jujur. Di kelas, siapa pun bisa menjawab soal tentang cinta tanah air dengan benar. Tetapi ketika diminta menunjukkan bukti, kita jadi bertanya pada diri sendiri: sebenarnya apa yang sudah saya lakukan?",
      "Rubrik seperti ini juga mengubah cara saya memandang penilaian. Nilai akhir tidak ditentukan oleh siapa yang paling lantang saat kegiatan, tetapi oleh kesesuaian bukti dengan rubrik yang diperiksa dosen penilai. Mahasiswa yang pendiam pun punya kesempatan yang sama untuk menunjukkan bahwa ia menjalankan nilai bela negara dengan caranya sendiri, misalnya lewat kegiatan sosial di lingkungan rumah atau di organisasi yang ia ikuti.",
      "## Kenapa ini penting untuk mahasiswa",
      'UPN "Veteran" Jawa Timur dikenal dengan sebutan Kampus Bela Negara [VERIFY]. Sebutan seperti itu bisa saja berhenti jadi tulisan di spanduk kalau mahasiswanya tidak pernah diajak mempraktikkan nilai-nilainya. Outbound adalah salah satu cara memastikan sebutan itu punya isi.',
      "Bagi saya, pelajaran terbesarnya sederhana: bela negara bukan acara satu hari. Outbound memang selesai dalam waktu singkat, tetapi kebiasaan yang dilatih di sana, seperti disiplin waktu, berani bicara di depan kelompok, dan mau menunggu teman yang tertinggal, bisa terus dibawa ke organisasi, tugas kelompok, bahkan nanti ke dunia kerja.",
      "Kalau kamu adik tingkat yang sebentar lagi mengikuti outbound, saran saya cuma satu: jangan datang hanya untuk mengisi presensi. Datanglah dengan niat belajar dari orang-orang di kelompokmu. Bisa jadi kamu pulang dengan pemahaman bela negara yang jauh lebih nyata daripada yang tertulis di slide kuliah.",
    ],
    sources: [
      {
        publication: 'LP3M UPN "Veteran" Jawa Timur',
        title:
          "Pengumuman tentang Pengisian Rubrik Outbound Mandiri Praktikum Mata Kuliah Pendidikan Bela Negara Tahun 2023",
        url: "https://mku.upnjatim.ac.id/storage/attachment/Pengumuman%20Tentang%20Pengisian%20Rubrik%20Outbound%20Mandiri%20Praktikum%20Mata%20Kuliah%20Pendidikan%20Bela%20Negara%20Tahun%202023%20(1)_1700019556.pdf",
      },
      {
        publication: 'MKU UPN "Veteran" Jawa Timur',
        title:
          "Pengumuman tentang Pengisian Rubrik Outbound Mandiri Praktikum MK Pendidikan Bela Negara Tahun 2022",
        url: "https://mku.upnjatim.ac.id/public/storage/file-support/Pengumuman%20SIOBEL%202022date1668652464.pdf",
      },
      {
        publication: 'UPN "Veteran" Jawa Timur',
        title: "Sistem Informasi Outbound Bela Negara (SIOBEL)",
        url: "https://siobel.upnjatim.ac.id/",
      },
      UU_23_2019,
    ],
    image: {
      src: "/images/outbound-bela-negara-upn-jatim.webp",
      alt: 'Gedung Rektorat UPN "Veteran" Jawa Timur di Surabaya dengan atap oranye bergaya joglo pada sore hari.',
      credit: "Princess Chiks Chiks",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rektorat_UPN_Jatim.jpg",
      ...CC_BY_SA_4,
    },
  },
  {
    title: "Pemuda Tidak Perlu Menunggu Jadi Pejabat untuk Membangun Negeri",
    slug: "pemuda-tidak-perlu-menunggu-jadi-pejabat-untuk-membangun-negeri",
    category: "Generasi Muda",
    author,
    date: "2026-10-28",
    readTime: 3,
    excerpt:
      "Sumpah Pemuda lahir dari anak muda yang berani berkumpul dan bersepakat. Hari ini, kontribusi pemuda bisa dimulai dari bidang yang sedang kita pelajari.",
    content: [
      'Setiap 28 Oktober, linimasa media sosial penuh dengan unggahan Sumpah Pemuda. Banyak yang memasang bingkai foto, mengutip ikrar tentang satu tanah air, satu bangsa, dan bahasa persatuan, lalu besoknya semua kembali seperti biasa. Tidak ada yang salah dengan merayakan, tetapi rasanya sayang kalau semangatnya hanya bertahan sehari.',
      "Kalau dipikir lagi, Sumpah Pemuda 1928 lahir dari Kongres Pemuda yang diikuti anak-anak muda dari berbagai organisasi kedaerahan dan kepemudaan. Mereka belum menjadi pejabat, belum punya jabatan penting, dan negara Indonesia sendiri belum merdeka. Yang mereka punya adalah keberanian untuk berkumpul, berdebat, lalu bersepakat tentang sesuatu yang lebih besar dari daerah asal masing-masing.",
      "## Siapa yang disebut pemuda?",
      "Menurut Undang-Undang Nomor 40 Tahun 2009 tentang Kepemudaan, pemuda adalah warga negara Indonesia yang berusia 16 sampai 30 tahun. Artinya, sebagian besar mahasiswa, termasuk saya dan teman-teman seangkatan, masuk dalam kelompok ini. Kita bukan calon pemuda yang baru akan berperan nanti. Kita sudah ada di fase itu sekarang.",
      "UUD 1945 Pasal 30 ayat (1) menyebut bahwa tiap-tiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara. Lalu UU Nomor 23 Tahun 2019 menjabarkan bahwa keikutsertaan warga negara dalam usaha bela negara bisa dilakukan melalui pendidikan kewarganegaraan, pelatihan dasar kemiliteran secara wajib, pengabdian sebagai prajurit TNI, dan pengabdian sesuai dengan profesi.",
      "Poin terakhir itu yang menurut saya paling dekat dengan mahasiswa. Pengabdian sesuai profesi berarti ilmu yang sedang kita pelajari bisa menjadi jalan bela negara.",
      "Ini sedikit mengubah cara saya melihat kuliah. Tugas yang selama ini dikerjakan demi nilai sebenarnya adalah latihan untuk keahlian yang kelak dipakai melayani orang lain. Dokter yang teliti, insinyur yang jujur menghitung kekuatan bangunan, dan akuntan yang menolak memanipulasi laporan keuangan, semuanya sedang menjalankan bela negara lewat profesinya, walaupun mungkin tidak pernah menyebutnya begitu.",
      "## Mulai dari jurusan sendiri",
      "Bentuknya tidak harus besar. Beberapa contoh yang bisa dilakukan mahasiswa dari berbagai bidang:",
      "- mahasiswa informatika membantu UMKM di sekitar kos membuat katalog produk atau halaman toko daring sederhana;",
      "- mahasiswa akuntansi atau manajemen membantu pedagang kecil merapikan catatan keuangan;",
      "- mahasiswa pertanian berbagi cara menanam sayur di lahan sempit dengan warga sekitar;",
      "- mahasiswa komunikasi membuat konten edukasi yang mudah dipahami tentang isu yang sering disalahpahami;",
      "- mahasiswa hukum ikut kegiatan penyuluhan hukum dasar bersama organisasi kampus.",
      "Kampus juga biasanya menyediakan jalur yang lebih terstruktur lewat Kuliah Kerja Nyata (KKN). Di UPN \"Veteran\" Jawa Timur, ada program KKN Tematik Bela Negara [VERIFY]. Program seperti ini bisa menjadi kesempatan pertama untuk melihat langsung masalah di masyarakat, bukan hanya membacanya di jurnal.",
      "Meski begitu, kontribusi tidak harus menunggu program resmi. Program kampus memberi struktur, tetapi inisiatif kecil di luar itu juga punya nilai. Membantu tetangga mengisi formulir daring, mengajari orang tua memakai aplikasi pembayaran dengan aman, atau menjadi relawan di kegiatan kampung adalah kontribusi yang nyata, hanya saja jarang dianggap sebagai sesuatu yang istimewa.",
      "## Konsisten lebih penting daripada viral",
      "Godaan terbesar anak muda sekarang mungkin adalah ingin kontribusinya langsung terlihat. Padahal banyak perubahan baik justru datang dari hal kecil yang dilakukan terus-menerus: mengajar adik-adik di kampung setiap akhir pekan, rutin membantu kegiatan karang taruna, atau konsisten menulis hal-hal yang bermanfaat.",
      "Para pemuda tahun 1928 tidak tahu bahwa pertemuan mereka akan dikenang hampir seratus tahun kemudian. Mereka hanya melakukan apa yang menurut mereka perlu dilakukan pada zamannya. Mungkin itu juga yang perlu kita tiru: berhenti menunggu momen besar, lalu mulai dari apa yang bisa dikerjakan hari ini, dengan ilmu yang sedang kita pelajari.",
    ],
    sources: [
      {
        publication: "JDIH BPK RI",
        title: "Undang-Undang Nomor 40 Tahun 2009 tentang Kepemudaan",
        url: "https://peraturan.bpk.go.id/Details/38784/uu-no-40-tahun-2009",
      },
      {
        publication: "JDIH Kementerian Hukum (peraturan.go.id)",
        title: "Perubahan Kedua Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
        url: "https://peraturan.go.id/files/UUD+1945+Perubahan+Kedua.pdf",
      },
      UU_23_2019,
    ],
    image: {
      src: "/images/pemuda-membangun-negeri.webp",
      alt: "Sekelompok anak muda Indonesia berdiskusi di atas bebatuan di bawah rimbun pepohonan sambil membuka laptop.",
      credit: "Fauzul",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Indonesian_youth.jpg",
      ...CC_BY_SA_4,
    },
  },
  {
    title: "Cek Dulu, Baru Bagikan: Literasi Digital sebagai Bentuk Bela Negara",
    slug: "cek-dulu-baru-bagikan-literasi-digital-sebagai-bentuk-bela-negara",
    category: "Digital",
    author,
    date: "2026-10-24",
    readTime: 3,
    excerpt:
      "Hoaks jarang datang dari orang asing. Ia sering masuk lewat grup keluarga dan teman sendiri. Di sinilah literasi digital menjadi bentuk bela negara.",
    content: [
      'Hampir semua dari kita pernah menerima pesan berantai di grup WhatsApp keluarga. Polanya mirip: kabar yang bikin panik, sumbernya tidak jelas, lalu ditutup dengan kalimat "sebarkan sebelum dihapus!". Yang mengirim pun biasanya bukan orang asing, melainkan om, tante, atau teman sendiri yang niatnya baik.',
      'Justru di situ masalahnya. Hoaks tidak selalu menyebar karena ada orang yang berniat jahat. Sering kali ia menyebar karena orang ingin menolong, ingin terlihat paling cepat tahu, atau sekadar tidak sempat mengecek. Satu kali menekan tombol "teruskan" terasa sepele, padahal dampaknya bisa ke mana-mana.',
      "## Apa hubungannya dengan bela negara?",
      'Mungkin terdengar berlebihan mengaitkan pesan berantai dengan bela negara. Tetapi coba lihat nilai dasar bela negara dalam UU Nomor 23 Tahun 2019. Di sana ada "sadar berbangsa dan bernegara" dan "setia pada Pancasila sebagai ideologi negara". Hoaks yang mengadu domba suku, agama, atau pilihan politik jelas bertabrakan dengan dua nilai itu, karena merusak rasa percaya antarwarga yang membuat masyarakat yang beragam bisa hidup berdampingan.',
      "Undang-undang yang sama juga membagi ancaman menjadi ancaman militer, ancaman nonmiliter, dan ancaman hibrida. Artinya, ancaman terhadap negara tidak selalu datang dalam bentuk senjata. Menurut saya, informasi palsu yang memecah belah masyarakat layak dilihat dengan kacamata yang sama, karena yang diserang adalah persatuan.",
      "## Wajah Indonesia di kolom komentar",
      "Selain hoaks, ada hal lain yang sering luput: cara kita bersikap di media sosial. Kita mungkin pernah melihat kolom komentar akun luar negeri diserbu komentar kasar setelah ada pertandingan olahraga atau kontroversi tertentu. Saat itu terjadi, yang dinilai orang lain bukan hanya akun pribadi, tetapi juga citra orang Indonesia secara umum.",
      "Menjaga nama baik bangsa di internet tidak berarti harus selalu memuji Indonesia atau menutupi kritik. Kritik tetap perlu. Bedanya ada pada cara: berargumen dengan data, bukan dengan makian.",
      "Hal yang sama berlaku ketika kita membela Indonesia dari komentar negatif orang luar. Membalas hinaan dengan hinaan tidak membuat bangsa ini terlihat lebih baik. Jawaban yang tenang, sopan, dan berisi fakta justru lebih mungkin mengubah pandangan orang yang membacanya, termasuk mereka yang hanya diam mengamati percakapan.",
      "## Kebiasaan kecil yang bisa dimulai",
      "- Baca sampai habis, bukan hanya judulnya. Judul sering dibuat untuk memancing emosi.",
      "- Cek sumbernya: siapa yang menerbitkan, kapan, dan siapa yang dikutip.",
      "- Cari pembanding. Untuk kabar yang sedang ramai, situs pemeriksa fakta seperti turnbackhoax.id yang dikelola Masyarakat Antifitnah Indonesia (Mafindo) dan cekfakta.com bisa membantu.",
      "- Kalau masih ragu, jangan dibagikan. Diam tidak membuat kita ketinggalan, tetapi ikut menyebarkan hoaks membuat kita ikut bertanggung jawab.",
      "Kebiasaan ini memang membuat kita sedikit lebih lambat dalam membagikan kabar. Tetapi dalam urusan informasi, terlambat beberapa menit jauh lebih baik daripada ikut menyebarkan sesuatu yang keliru kepada ratusan orang.",
      "Untuk konten negatif yang meresahkan, masyarakat juga bisa melapor melalui kanal aduan konten Kementerian Komunikasi dan Digital [VERIFY: pastikan alamat kanal aduan resmi yang berlaku saat ini].",
      "## Bagian tersulit: meluruskan",
      'Menurut saya, bagian paling sulit bukan mengecek, melainkan meluruskan, apalagi kalau yang menyebarkan adalah orang tua di grup keluarga. Cara yang lebih mudah diterima biasanya bukan langsung menulis "itu hoaks!", tetapi mengirim tautan klarifikasi dengan bahasa yang sopan, misalnya, "Om, tadi aku cek, ternyata kabar ini sudah diklarifikasi. Ini tautannya, ya."',
      "Sebagai mahasiswa, kita sering merasa bela negara adalah urusan yang jauh. Padahal di ruang digital, kita semua ada di garis depan. Setiap hari kita memutuskan apa yang dibagikan dan apa yang tidak. Keputusan kecil itu, kalau dilakukan oleh banyak orang, ikut menentukan apakah ruang digital kita menjadi tempat yang sehat atau penuh kecurigaan.",
    ],
    sources: [
      {
        publication: "Masyarakat Antifitnah Indonesia (Mafindo)",
        title: "TurnBackHoax.id",
        url: "https://turnbackhoax.id/",
      },
      {
        publication: "CekFakta.com",
        title: "CekFakta.com",
        url: "https://cekfakta.com/",
      },
      UU_23_2019,
    ],
    image: {
      src: "/images/literasi-digital-hoaks.webp",
      alt: "Seorang siswi berkerudung menunduk sambil memegang dan membaca sesuatu di ponselnya.",
      credit: "Dicky Herlambang",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Seorang_siswa_sedang_bermain_handphone.jpg",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
  },
  {
    title: "Pancasila Tidak Cukup Dihafal, Harus Terlihat dalam Kebiasaan",
    slug: "pancasila-tidak-cukup-dihafal-harus-terlihat-dalam-kebiasaan",
    category: "Wawasan Kebangsaan",
    author,
    date: "2026-10-20",
    readTime: 3,
    excerpt:
      "Sejak SD kita hafal lima sila. Pertanyaannya, seberapa sering nilai-nilai itu benar-benar terlihat dalam keputusan kecil kita sehari-hari?",
    content: [
      "Sejak SD, hampir setiap Senin kita mendengar Pancasila dibacakan saat upacara bendera. Saya yakin sebagian besar dari kita masih bisa mengucapkannya tanpa salah satu kata pun. Tetapi kalau ditanya kapan terakhir kali kita sengaja menerapkan salah satu sila dalam keputusan sehari-hari, jawabannya mungkin tidak secepat itu.",
      "Pancasila punya sejarah yang panjang. Melalui Keputusan Presiden Nomor 24 Tahun 2016, pemerintah menetapkan 1 Juni sebagai Hari Lahir Pancasila sekaligus hari libur nasional. Tanggal itu merujuk pada 1 Juni 1945, ketika Sukarno menyampaikan pidatonya tentang dasar negara di hadapan sidang BPUPK. Negara juga memiliki Badan Pembinaan Ideologi Pancasila (BPIP) yang khusus mengurusi pembinaan ideologi ini.",
      'Dalam konteks bela negara, Pancasila bukan sekadar materi pelajaran PKn. UU Nomor 23 Tahun 2019 menempatkan "setia pada Pancasila sebagai ideologi negara" sebagai salah satu dari lima nilai dasar bela negara. Artinya, menjalankan Pancasila dalam hidup sehari-hari adalah bagian dari membela negara itu sendiri.',
      "## Lima sila, lima kebiasaan kecil",
      "Supaya tidak terlalu abstrak, saya mencoba menerjemahkan setiap sila ke situasi yang dekat dengan kehidupan mahasiswa.",
      "**Ketuhanan Yang Maha Esa.** Menghormati teman yang berbeda keyakinan bisa sesederhana tidak menjadwalkan rapat kelompok tepat di waktu ibadah teman, atau tidak menjadikan keyakinan orang lain sebagai bahan bercanda.",
      "**Kemanusiaan yang Adil dan Beradab.** Tidak ikut menertawakan teman yang sedang dijadikan bahan olok-olok, termasuk di grup chat. Kadang diam saja sudah cukup untuk tidak memperpanjang perundungan, tetapi akan lebih baik lagi kalau berani bilang, \"Sudah, cukup.\"",
      "**Persatuan Indonesia.** Di kampus, kita bertemu teman dari berbagai daerah dengan logat dan kebiasaan yang berbeda. Persatuan dimulai dari berhenti membuat lelucon yang merendahkan daerah atau suku tertentu, meskipun niatnya hanya bercanda.",
      "**Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan.** Dalam rapat organisasi, beri kesempatan bicara kepada semua anggota, bukan hanya yang paling lantang. Kalau keputusan bersama ternyata bukan usulan kita, tetap jalankan dengan sungguh-sungguh.",
      '**Keadilan Sosial bagi Seluruh Rakyat Indonesia.** Dalam tugas kelompok, bagi pekerjaan secara adil dan jangan hanya "titip nama". Di luar kampus, keadilan sosial juga berarti peduli pada orang-orang yang sering terlupakan, misalnya membayar jasa pekerja dengan layak dan tidak menawar berlebihan kepada pedagang kecil.',
      "Daftar ini tentu tidak lengkap, dan setiap orang mungkin punya contoh yang berbeda. Yang penting adalah kebiasaan bertanya pada diri sendiri sebelum bertindak: apakah keputusan ini adil, apakah ini menghormati orang lain, apakah ini membuat kelompok kita lebih bersatu atau justru lebih terpecah? Pertanyaan sederhana seperti itu adalah cara paling praktis untuk membawa Pancasila keluar dari buku catatan.",
      "## Nilai besar diuji di situasi kecil",
      "Mungkin contoh-contoh ini terdengar remeh. Tetapi justru di situ intinya. Jarang ada orang yang menolak Pancasila secara terang-terangan. Yang lebih sering terjadi adalah kita setuju dengan nilai-nilainya, lalu lupa menerapkannya ketika sedang lelah, kesal, atau merasa tidak ada yang melihat.",
      "Godaan untuk mengabaikan nilai biasanya muncul di saat-saat kecil: ketika antre dan ada kesempatan menyerobot, ketika tugas kelompok menumpuk dan ada teman yang bisa dijadikan tempat melempar pekerjaan, atau ketika lelucon yang merendahkan orang lain sedang ramai di grup chat.",
      "Upacara bendera hari Senin mungkin sudah lama tidak kita ikuti sejak lulus sekolah. Tetapi kebiasaan mengingat Pancasila tidak harus ikut berhenti. Bedanya, sekarang kita tidak lagi sekadar membacakannya dengan lantang. Kita menunjukkannya lewat cara kita memperlakukan orang lain.",
    ],
    sources: [
      {
        publication: "JDIH BPK RI",
        title: "Keputusan Presiden Nomor 24 Tahun 2016 tentang Hari Lahir Pancasila",
        url: "https://peraturan.bpk.go.id/Details/54321/keppres-no-24-tahun-2016",
      },
      {
        publication: "Sekretariat Kabinet Republik Indonesia",
        title: "Jadi Hari Libur Nasional, Inilah Keppres Penetapan 1 Juni Sebagai Hari Lahir Pancasila",
        url: "https://setkab.go.id/jadi-hari-libur-nasional-inilah-keppres-penetapan-1-juni-sebagai-hari-lahir-pancasila",
      },
      {
        publication: "Badan Pembinaan Ideologi Pancasila",
        title: "Situs resmi BPIP",
        url: "https://bpip.go.id/",
      },
      UU_23_2019,
    ],
    image: {
      src: "/images/pancasila-upacara-bendera.webp",
      alt: "Siswa berseragam putih mengikuti upacara bendera di halaman sekolah sementara petugas mengibarkan bendera Merah Putih.",
      credit: "Arifinulburhan",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Upacara_bendera_di_sekolah.jpg",
      ...CC_BY_SA_4,
    },
  },
  {
    title: "Belajar dari Mangrove Wonorejo: Merawat Lingkungan juga Bela Negara",
    slug: "belajar-dari-mangrove-wonorejo-merawat-lingkungan-juga-bela-negara",
    category: "Lingkungan",
    author,
    date: "2026-10-13",
    readTime: 3,
    excerpt:
      "Hutan mangrove di pesisir timur Surabaya mengingatkan bahwa menjaga lingkungan bukan urusan pecinta alam saja, tetapi bagian dari membela negara.",
    content: [
      "Bagi banyak mahasiswa di Surabaya, kawasan mangrove Wonorejo mungkin lebih dikenal sebagai tempat jalan-jalan akhir pekan: naik perahu, menyusuri jalur kayu, lalu berfoto di antara pepohonan. Kawasan ini berada di pesisir timur Surabaya, di wilayah Kecamatan Rungkut [VERIFY], tidak terlalu jauh dari kampus-kampus di bagian timur kota.",
      "Padahal mangrove bukan sekadar latar foto. Akar-akarnya yang rapat membantu menahan lumpur dan meredam gelombang, sehingga garis pantai tidak mudah tergerus abrasi. Kawasan mangrove juga menjadi tempat hidup dan berkembang biak berbagai jenis ikan, kepiting, udang, dan burung. Kalau kawasan seperti ini rusak, yang hilang bukan hanya pemandangan, tetapi juga pelindung alami bagi warga pesisir.",
      "Inilah yang membuat Wonorejo menarik untuk direnungkan. Kawasan yang sama bisa dilihat sebagai tempat wisata, sebagai laboratorium alam, atau sebagai benteng pesisir. Cara kita memandangnya ikut menentukan cara kita memperlakukannya.",
      "## Hak dan kewajiban yang datang sepaket",
      "UUD 1945 Pasal 28H ayat (1) menyatakan bahwa setiap orang berhak mendapatkan lingkungan hidup yang baik dan sehat. Di sisi lain, Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup, Pasal 67, menegaskan bahwa setiap orang berkewajiban memelihara kelestarian fungsi lingkungan hidup serta mengendalikan pencemaran dan/atau kerusakan lingkungan hidup.",
      "Jadi, lingkungan yang baik bukan hanya hak yang bisa kita tuntut dari pemerintah. Ada kewajiban yang melekat pada setiap orang, termasuk mahasiswa yang setiap hari menghasilkan sampah dari kopi kemasan, makanan pesan antar, dan fotokopian tugas.",
      "## Cinta tanah air, secara harfiah",
      'Nilai dasar bela negara yang pertama dalam UU Nomor 23 Tahun 2019 adalah cinta tanah air. Saya suka memikirkan frasa ini secara harfiah: tanah dan air. Rasanya aneh mengaku cinta tanah air, tetapi tetap membuang sampah ke selokan yang airnya akhirnya mengalir ke sungai dan laut.',
      "Bela negara sering dibayangkan sebagai menjaga perbatasan dari ancaman luar. Padahal kerusakan lingkungan juga melemahkan negara dari dalam: banjir yang berulang, abrasi pantai, dan sumber air yang tercemar membuat warga lebih rentan dan pembangunan harus mengulang dari awal.",
      "Menjaga lingkungan juga berkaitan dengan nilai rela berkorban untuk bangsa dan negara. Pengorbanannya memang tidak dramatis. Bentuknya bisa berupa melepas sedikit kenyamanan: membawa tas belanja sendiri, berjalan kaki atau naik kendaraan umum untuk jarak dekat, atau meluangkan satu hari libur untuk ikut kegiatan bersih-bersih. Pengorbanan kecil seperti ini, kalau dilakukan bersama-sama, dampaknya jauh lebih besar daripada aksi besar yang hanya dilakukan sekali.",
      "## Yang bisa dilakukan mahasiswa",
      "- Kurangi plastik sekali pakai. Membawa botol minum dan kotak makan ke kampus terlihat sepele, tetapi kalau dilakukan setiap hari selama empat tahun kuliah, jumlah sampah yang dihindari tidak sedikit.",
      "- Saat berkunjung ke kawasan mangrove atau pantai, bawa pulang sampah sendiri dan jangan menginjak atau mematahkan bibit yang baru ditanam.",
      "- Kalau organisasi kampus atau komunitas mengadakan penanaman mangrove atau bersih pantai, ikutlah setidaknya sekali. Melihat langsung kondisi lapangan sering lebih membekas daripada membaca beritanya.",
      "- Gunakan ilmu dari jurusan masing-masing. Mahasiswa teknik lingkungan bisa membuat kajian sederhana tentang pengelolaan sampah di sekitar kos, mahasiswa desain atau komunikasi bisa membuat kampanye yang tidak menggurui.",
      "Mangrove tumbuh pelan. Bibit yang ditanam hari ini butuh waktu bertahun-tahun untuk menjadi pelindung pantai yang kokoh. Mungkin itu pelajaran paling penting dari Wonorejo: merawat negara, seperti merawat mangrove, adalah pekerjaan jangka panjang yang hasilnya sering baru dinikmati oleh generasi berikutnya.",
    ],
    sources: [
      {
        publication: "JDIH Kementerian Hukum (peraturan.go.id)",
        title: "Perubahan Kedua Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
        url: "https://peraturan.go.id/files/UUD+1945+Perubahan+Kedua.pdf",
      },
      {
        publication: "JDIH BPK RI",
        title:
          "Undang-Undang Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
        url: "https://peraturan.bpk.go.id/Details/38771/uu-no-32-tahun-2009",
      },
      UU_23_2019,
    ],
    image: {
      src: "/images/mangrove-wonorejo-surabaya.webp",
      alt: "Hutan mangrove Ekowisata Wonorejo di Surabaya dengan perahu kayu yang bersandar di aliran sungai berwarna cokelat.",
      credit: "Lasthib",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ekowisata_Mangrove_Wonorejo.jpg",
      ...CC_BY_SA_4,
    },
  },
];

/** Urutan daftar "Terpopuler" di sidebar. */
export const popularSlugs = [
  "outbound-bela-negara-saat-nilai-kebangsaan-diuji-di-luar-kelas",
  "cek-dulu-baru-bagikan-literasi-digital-sebagai-bentuk-bela-negara",
  "pancasila-tidak-cukup-dihafal-harus-terlihat-dalam-kebiasaan",
  "belajar-dari-mangrove-wonorejo-merawat-lingkungan-juga-bela-negara",
];

export const categories: { name: Category; slug: string; color: string }[] = [
  { name: "Wawasan Kebangsaan", slug: "wawasan-kebangsaan", color: "#0e9455" },
  { name: "Generasi Muda", slug: "generasi-muda", color: "#2b7fd4" },
  { name: "Digital", slug: "digital", color: "#8a5fd0" },
  { name: "Lingkungan", slug: "lingkungan", color: "#d68a14" },
];

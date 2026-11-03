import type { Category } from "@/types/content";

/** Urutan di sini = urutan chip filter kategori. */
export const categories = [
  {
    id: "wawasan-kebangsaan",
    name: "Wawasan Kebangsaan",
    color: "#0e9455",
    description: "Artikel tentang Pancasila, sejarah, dan nilai-nilai kebangsaan.",
  },
  {
    id: "generasi-muda",
    name: "Generasi Muda",
    color: "#2b7fd4",
    description: "Artikel tentang peran dan kontribusi pemuda serta mahasiswa.",
  },
  {
    id: "digital",
    name: "Digital",
    color: "#8a5fd0",
    description: "Artikel tentang literasi digital, hoaks, dan etika bermedia sosial.",
  },
  {
    id: "lingkungan",
    name: "Lingkungan",
    color: "#d68a14",
    description: "Artikel tentang kepedulian lingkungan sebagai bagian dari bela negara.",
  },
] as const satisfies readonly Category[];

export type CategoryId = (typeof categories)[number]["id"];

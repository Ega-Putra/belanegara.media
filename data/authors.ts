import type { Author } from "@/types/content";

export const authors = {
  "radith-pribadi-tegar": {
    id: "radith-pribadi-tegar",
    name: "Radith Pribadi Tegar",
    bio: 'Mahasiswa UPN "Veteran" Jawa Timur, Kelas Bela Negara G224',
  },
} as const satisfies Record<string, Author>;

export type AuthorId = keyof typeof authors;

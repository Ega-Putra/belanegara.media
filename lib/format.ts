/** Mengubah teks menjadi slug: huruf kecil, dipisah tanda hubung. */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const dateFormat = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "2026-10-30" → "30 Okt 2026" */
export function formatDate(iso: string) {
  return dateFormat.format(new Date(iso));
}

const longDateFormat = new Intl.DateTimeFormat("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Jakarta",
});

/** Date → "Selasa, 3 November 2026" (WIB) */
export function formatLongDate(date: Date) {
  return longDateFormat.format(date);
}

const WORDS_PER_MINUTE = 200;

/** Perkiraan menit baca dari teks Markdown. */
export function readingTime(markdown: string) {
  const words = markdown
    .replace(/[#>*_`\[\]()-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

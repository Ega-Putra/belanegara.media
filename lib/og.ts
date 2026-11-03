import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** SVG ikon perisai sebagai data URI, untuk dipakai di dalam ImageResponse (next/og). */
export const LOGO_MARK_DATA_URI =
  "data:image/svg+xml;base64," +
  Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
      '<path d="M16 1.5 3.5 6v9.2c0 7.4 5.3 13.3 12.5 15.3 7.2-2 12.5-7.9 12.5-15.3V6L16 1.5Z" fill="#0e8a4f"/>' +
      '<path d="m16 8.6 2.1 4.6 5 .5-3.7 3.4 1 4.9L16 19.5 11.6 22l1-4.9-3.7-3.4 5-.5L16 8.6Z" fill="#fff"/>' +
      "</svg>",
  ).toString("base64");

/** Font Lora (woff) untuk satori — woff2 tidak didukung. */
export async function loadLoraFonts() {
  const dir = join(process.cwd(), "assets/fonts");
  const [bold, medium] = await Promise.all([
    readFile(join(dir, "Lora-Bold.woff")),
    readFile(join(dir, "Lora-Medium.woff")),
  ]);
  return [
    { name: "Lora", data: bold, weight: 700 as const, style: "normal" as const },
    { name: "Lora", data: medium, weight: 500 as const, style: "normal" as const },
  ];
}

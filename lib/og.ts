import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Ikon helm (app/icon.svg) sebagai data URI, untuk dipakai di dalam ImageResponse (next/og). */
export async function loadLogoMark() {
  const svg = await readFile(join(process.cwd(), "app/icon.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

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

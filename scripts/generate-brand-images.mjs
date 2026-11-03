// Membuat aset branding statis: public/og-default.png (1200x630) dan app/apple-icon.png (180x180).
// Jalankan ulang setelah mengubah logo/tagline: `npm run brand`.
import { readFile, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const root = new URL("..", import.meta.url);
const path = (p) => new URL(p, root);

const SITE_NAME_A = "Bela";
const SITE_NAME_B = "Negara";
const DESCRIPTION = "Artikel dan opini bertema Bela Negara untuk Indonesia.";
const DOMAIN = "www.belanegara.web.id";

const iconSvg = await readFile(path("app/icon.svg"));
const icon = `data:image/svg+xml;base64,${iconSvg.toString("base64")}`;
const fonts = [
  { name: "Lora", data: await readFile(path("assets/fonts/Lora-Bold.woff")), weight: 700, style: "normal" },
  { name: "Lora", data: await readFile(path("assets/fonts/Lora-Medium.woff")), weight: 500, style: "normal" },
];

async function save(element, size, file) {
  const res = new ImageResponse(element, { ...size, fonts });
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(path(file), buf);
  console.log(`${file}: ${size.width}x${size.height}, ${(buf.length / 1024).toFixed(1)} KB`);
}

// Gambar pratinjau default
await save(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        background: "linear-gradient(160deg, #f0faf4 0%, #e0f4e9 60%, #c9ecd8 100%)",
        color: "#1c3326",
        fontFamily: "Lora",
        borderTop: "14px solid #0e8a4f",
      },
    },
    h(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 30 } },
      h("img", { src: icon, width: 150, height: 150 }),
      h(
        "div",
        { style: { display: "flex", flexDirection: "column", lineHeight: 1 } },
        h(
          "div",
          { style: { display: "flex", fontSize: 96, fontWeight: 700, gap: 24 } },
          h("span", null, SITE_NAME_A),
          h("span", { style: { color: "#0e8a4f" } }, SITE_NAME_B),
        ),
        h(
          "div",
          { style: { display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: 14, color: "#51705e", marginTop: 14 } },
          "MEDIA",
        ),
      ),
    ),
    h("div", { style: { display: "flex", fontSize: 42, fontWeight: 500, color: "#51705e", marginTop: 40, maxWidth: 940 } }, DESCRIPTION),
    h("div", { style: { display: "flex", fontSize: 28, fontWeight: 700, color: "#0e8a4f", marginTop: 36 } }, DOMAIN),
  ),
  { width: 1200, height: 630 },
  "public/og-default.png",
);

// Ikon Apple (latar penuh, iOS membulatkan sudutnya sendiri)
await save(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#e0f4e9",
      },
    },
    h("img", { src: icon, width: 136, height: 136 }),
  ),
  { width: 180, height: 180 },
  "app/apple-icon.png",
);

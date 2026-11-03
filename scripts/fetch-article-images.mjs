// Mengunduh foto artikel dari Wikimedia Commons, lalu memotongnya menjadi WebP 1200x630 (< 200 KB).
// Jalankan: `node scripts/fetch-article-images.mjs`. Lisensi & kredit dicatat di frontmatter content/articles/<slug>.md.
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const UA = { "User-Agent": "belanegara-media/1.0 (https://www.belanegara.web.id)" };
const MAX_BYTES = 195_000;

/**
 * [file di Commons, <slug>.webp, posisi potong]
 * Gambar non-Commons (foto pribadi Eco-Pave, poster Kominfo) diproses manual dengan sharp
 * ke ukuran & batas yang sama, jadi tidak tercantum di sini.
 */
const images = [
  ["Rektorat UPN Jatim.jpg", "outbound-bela-negara-saat-nilai-kebangsaan-diuji-di-luar-kelas.webp", "centre"],
  ["Upacara bendera di sekolah.jpg", "pancasila-tidak-cukup-dihafal-harus-terlihat-dalam-kebiasaan.webp", "south"],
  ["Ekowisata Mangrove Wonorejo.jpg", "belajar-dari-mangrove-wonorejo-merawat-lingkungan-juga-bela-negara.webp", "centre"],
];

async function commonsUrl(title) {
  const q = new URLSearchParams({
    action: "query", format: "json", titles: `File:${title}`,
    prop: "imageinfo", iiprop: "url|extmetadata", iiurlwidth: "2400",
  });
  const data = await (await fetch(`https://commons.wikimedia.org/w/api.php?${q}`, { headers: UA })).json();
  const info = Object.values(data.query.pages)[0].imageinfo[0];
  return { url: info.thumburl ?? info.url, license: info.extmetadata.LicenseShortName?.value };
}

for (const [title, out, position] of images) {
  const { url, license } = await commonsUrl(title);
  const input = Buffer.from(await (await fetch(url, { headers: UA })).arrayBuffer());
  let quality = 82, buf;
  do {
    buf = await sharp(input).resize(1200, 630, { fit: "cover", position }).webp({ quality }).toBuffer();
    quality -= 6;
  } while (buf.length > MAX_BYTES && quality > 40);
  await writeFile(`public/images/articles/${out}`, buf);
  console.log(`${out}: ${(buf.length / 1024).toFixed(0)} KB, q${quality + 6}, ${license}`);
}

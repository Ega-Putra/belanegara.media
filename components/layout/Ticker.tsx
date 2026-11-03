import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { formatLongDate } from "@/lib/format";
import TodayDate from "./TodayDate";

/** Lapis 2: Sub-bar ramping yang menggabungkan berita terkini + tanggal hari ini. */
export default function Ticker() {
  const latest = getAllArticles()[0];
  if (!latest) return null;

  return (
    <div className="sub-bar" aria-label="Sorotan berita terkini dan tanggal">
      <div className="wrap sub-bar-wrap">
        <div className="sub-bar-left">
          <span className="ticker-badge">TERKINI</span>
          <Link href={`/artikel/${latest.slug}`} className="ticker-link">
            <span className="ticker-category">{latest.category.name}</span>
            <span className="ticker-sep" aria-hidden="true">
              ·
            </span>
            <span className="ticker-title">{latest.title}</span>
          </Link>
        </div>

        <div className="sub-bar-right">
          <TodayDate buildDate={formatLongDate(new Date())} />
        </div>
      </div>
    </div>
  );
}

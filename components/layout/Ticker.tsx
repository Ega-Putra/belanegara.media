import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { formatLongDate } from "@/lib/format";
import TodayDate from "./TodayDate";

/** Baris "Terbaru": tanggal hari ini + artikel terbaru. */
export default function Ticker() {
  const latest = getAllArticles()[0];

  return (
    <div className="ticker">
      <div className="wrap">
        <b>Terbaru</b>
        <TodayDate buildDate={formatLongDate(new Date())} />
        {latest && (
          <>
            {" · "}
            <Link href={`/artikel/${latest.slug}`}>{latest.title}</Link>
          </>
        )}
      </div>
    </div>
  );
}

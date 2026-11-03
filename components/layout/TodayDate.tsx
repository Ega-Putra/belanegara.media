"use client";

import { useSyncExternalStore } from "react";
import { formatLongDate } from "@/lib/format";

const noop = () => () => {};

/** Tanggal hari ini (WIB). HTML statis memuat tanggal build, lalu diperbarui di browser pengunjung. */
export default function TodayDate({ buildDate }: { buildDate: string }) {
  const today = useSyncExternalStore(noop, () => formatLongDate(new Date()), () => buildDate);
  return <time suppressHydrationWarning>{today}</time>;
}

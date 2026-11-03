"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        if (scrollY >= docHeight - 6) {
          setProgress(100);
        } else {
          const pct = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
          setProgress(pct);
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="reading-progress-track" aria-hidden="true">
      <div
        className="reading-progress-bar"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Kemajuan membaca artikel"
      />
    </div>
  );
}

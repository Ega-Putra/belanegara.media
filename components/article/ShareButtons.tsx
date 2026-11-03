"use client";

import { useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function ShareButtons({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);
  const canShare = useSyncExternalStore(
    emptySubscribe,
    () => typeof navigator !== "undefined" && typeof navigator.share === "function",
    () => false,
  );

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title,
        text: title,
        url,
      });
    } catch {
      // User cancelled share or it's not supported
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard write failed
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n${url}`)}`;

  return (
    <section className="share-bar" aria-label="Bagikan artikel ini">
      <span className="share-label">Bagikan:</span>
      <div className="share-actions">
        {canShare && (
          <button type="button" onClick={handleNativeShare} className="share-btn native" title="Bagikan">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
            <span>Bagikan</span>
          </button>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn wa"
          title="Bagikan ke WhatsApp"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="share-btn copy"
          title="Salin tautan artikel"
          aria-live="polite"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          <span>{copied ? "Tersalin! ✓" : "Salin Tautan"}</span>
        </button>
      </div>
    </section>
  );
}

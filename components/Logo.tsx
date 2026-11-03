/** Ikon perisai dengan bintang — dipakai di logo, favicon, dan gambar pratinjau. */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className="logo-mark"
    >
      <path
        d="M16 1.5 3.5 6v9.2c0 7.4 5.3 13.3 12.5 15.3 7.2-2 12.5-7.9 12.5-15.3V6L16 1.5Z"
        fill="#0e8a4f"
      />
      <path
        d="M16 4.6 6.5 8v7.3c0 5.8 4 10.5 9.5 12.2 5.5-1.7 9.5-6.4 9.5-12.2V8L16 4.6Z"
        fill="#e0f4e9"
        opacity=".18"
      />
      <path
        d="m16 8.6 2.1 4.6 5 .5-3.7 3.4 1 4.9L16 19.5 11.6 22l1-4.9-3.7-3.4 5-.5L16 8.6Z"
        fill="#fff"
      />
    </svg>
  );
}

/** Wordmark "Bela Negara" + label kecil "Media". */
export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo-text">
        Bela <span>Negara</span>
      </span>
      <span className="logo-label">Media</span>
    </span>
  );
}

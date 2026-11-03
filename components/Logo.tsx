/** Varian ikon saja: helm prajurit dengan bintang. Sumber yang sama dengan app/icon.svg. */
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
      <path d="M6 22C6 12.8 10.5 6.5 16 6.5S26 12.8 26 22Z" fill="#0e8a4f" />
      <rect x="3" y="20.5" width="26" height="4.5" rx="2.25" fill="#0b6b3c" />
      <path
        d="M16 10.40L17.12 13.46L20.37 13.58L17.81 15.59L18.70 18.72L16 16.90L13.30 18.72L14.19 15.59L11.63 13.58L14.88 13.46Z"
        fill="#fff"
      />
    </svg>
  );
}

/** Varian horizontal: ikon + wordmark "Bela Negara" dengan label kecil "Media" di bawahnya. */
export default function Logo({ size = 38 }: { size?: number }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo-words">
        <span className="logo-text">
          Bela <span>Negara</span>
        </span>
        <span className="logo-label">Media</span>
      </span>
    </span>
  );
}

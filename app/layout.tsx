import type { Metadata, Viewport } from "next";
import { Lora, Public_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/articles";
import "./globals.css";

const serif = Lora({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Portal artikel untuk menumbuhkan rasa cinta tanah air lewat tulisan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Portal Artikel Bela Negara`,
    template: `%s – ${SITE_NAME}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Portal Artikel Bela Negara`,
    description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0e8a4f",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#konten" className="skip">
          Langsung ke konten
        </a>
        <Header />
        <main className="wrap" id="konten">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

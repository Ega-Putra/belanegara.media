import Link from "next/link";
import Logo from "./Logo";
import { CONTACT_EMAIL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="kontak">
      <div className="wrap">
        <div>
          <Logo size={34} />
          <p>{SITE_TAGLINE}</p>
        </div>
        <div>
          <b>Hubungi kami</b>
          <address>
            <p>
              WhatsApp: <a href="https://wa.me/6283854581262">083854581262</a>
              <br />
              Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </address>
          <p className="footer-links">
            <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
            {" · "}
            <Link href="/syarat-ketentuan">Syarat & Ketentuan</Link>
            {" · "}
            <Link href="/feed.xml">RSS</Link>
          </p>
          <p className="footer-copy">© 2026 {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}

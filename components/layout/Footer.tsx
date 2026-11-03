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
          <p>Untuk harga dan pemesanan, kirim pesan ke kami.</p>
          <address>
            <p>
              WhatsApp: <a href="https://wa.me/6281200000000">0812-0000-0000</a>
              <br />
              Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </address>
          <p>© 2026 {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}

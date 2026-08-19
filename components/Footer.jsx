import Link from "next/link";
import { brandConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="brand footer-logo" href="/" data-brand-name>
            {brandConfig.name}
          </Link>
          <p>Портфоліо веброзробника з фокусом на живі сайти, чіткий текст і акуратну фронтенд-систему.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <span>Навігація</span>
          <Link href="/projects">Портфоліо</Link>
          <Link href="/about">Про нас</Link>
          <Link href="/contacts">Контакти</Link>
        </nav>
        <div className="footer-links" aria-label="Contact links">
          <span>Зв'язок</span>
          <a href={`mailto:${brandConfig.email}`}>Email</a>
          <a href={brandConfig.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="footer-word" aria-hidden="true">
        MYSHCHYSHYN
      </div>
    </footer>
  );
}

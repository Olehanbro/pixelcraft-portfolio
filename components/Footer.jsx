import Link from "next/link";
import { brandConfig } from "@/lib/data";

const footerContactLinks = [
  {
    label: "Email",
    value: brandConfig.email,
    href: `mailto:${brandConfig.email}`
  },
  {
    label: "Номер телефону",
    value: brandConfig.phone,
    href: `tel:${brandConfig.phone}`
  },
  {
    label: "Telegram",
    value: brandConfig.telegram.label,
    href: brandConfig.telegram.href,
    external: true
  },
  {
    label: "Instagram",
    value: brandConfig.instagram.label,
    href: brandConfig.instagram.href,
    external: true
  }
];

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
          {footerContactLinks.map((link) => (
            <a
              className="footer-contact-link"
              href={link.href}
              key={link.label}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <em>{link.label}</em>
              <i aria-hidden="true" />
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-word" aria-hidden="true">
        MYSHCHYSHYN
      </div>
    </footer>
  );
}

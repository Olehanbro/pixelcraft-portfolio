"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brandConfig } from "@/lib/data";

const navItems = [
  { href: "/", label: "Головна" },
  { href: "/projects", label: "Портфоліо" },
  { href: "/about", label: "Про нас" },
  { href: "/contacts", label: "Контакти" }
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} data-header>
      <Link className="brand" href="/" aria-label={`${brandConfig.name} home`} data-brand-name>
        {brandConfig.name}
      </Link>

      <nav className="nav" aria-label="Primary navigation" data-menu>
        {navItems.map((item) => (
          <Link key={item.href} className={isActive(item.href) ? "is-active" : ""} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <Link className="ghost-link" href="/contacts">
          Почати проєкт
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

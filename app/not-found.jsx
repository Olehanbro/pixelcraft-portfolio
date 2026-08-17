import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="page-hero">
      <p className="hero-kicker">404 · page not found</p>
      <h1>Сторінку не знайдено</h1>
      <Link className="primary-link" href="/projects">
        До портфоліо
      </Link>
    </section>
  );
}

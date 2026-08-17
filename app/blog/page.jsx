import { journalPosts } from "@/lib/data";

export const metadata = {
  title: "Журнал",
  description: "Нотатки Myshchyshyn про сайти, кейси, структуру портфоліо й фронтенд."
};

export default function JournalPage() {
  const featured = journalPosts[0];

  return (
    <>
      <section className="page-hero journal-hero" aria-labelledby="journal-title">
        <p className="hero-kicker">Журнал · том I · випуск 01</p>
        <h1 id="journal-title">Нотатки про сайти, кейси і живий фронтенд.</h1>
        <p>Короткі матеріали про портфоліо, структуру кейсів, дизайн-рішення й те, як не перетворити сайт на набір випадкових блоків.</p>
      </section>
      <section className="section-block journal-feature" aria-labelledby="featured-post-title">
        <article className="featured-post reveal-up">
          <div>
            <p className="hero-kicker">★ Матеріал номера · {featured.date}</p>
            <h2 id="featured-post-title">{featured.title}</h2>
            <p>{featured.excerpt}</p>
          </div>
          <span>{featured.readTime}</span>
        </article>
      </section>
      <section className="section-block journal-grid-section" aria-label="Матеріали журналу">
        <div className="journal-grid">
          {journalPosts.slice(1).map((post) => (
            <article className="journal-card reveal-up" key={post.title}>
              <div className="journal-card-top">
                <span>{post.tag}</span>
                <em>{post.readTime}</em>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <small>{post.date}</small>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

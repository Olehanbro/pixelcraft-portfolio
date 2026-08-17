import Image from "next/image";
import Link from "next/link";
import { OwnerPortrait, TeamPortrait } from "@/components/OwnerPortrait";
import { ProjectCard } from "@/components/ProjectCard";
import {
  brandConfig,
  fieldCount,
  fieldDetails,
  fieldFilters,
  firstProjectForField,
  numbered,
  principles,
  processSteps,
  projectUrl,
  projects,
  teamRoles
} from "@/lib/data";

export function HomeHero() {
  return (
    <section className="hero hero-stage" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-overlay" />
      <div className="hero-content hero-layout reveal-up">
        <div className="hero-copy">
          <p className="hero-kicker">— Портфоліо веброзробника · 2026</p>
          <h1 id="hero-title">
            Сайти, які працюють <span>наживо.</span>
          </h1>
          <p>Добірка production-сторінок, де перший екран, текст і адаптивність працюють разом.</p>
          <Link className="primary-link hero-cta" href="/projects">
            Подивитись роботи
          </Link>
        </div>
        <aside className="hero-owner-card" aria-label="Місце для майбутнього фото власника">
          <OwnerPortrait modifier="hero-owner" />
          <p>Слот для майбутнього портрета</p>
        </aside>
      </div>
    </section>
  );
}

export function FavoritesSection() {
  const favorites = projects.filter((project) => project.favorite).slice(0, 3);

  return (
    <section className="section-block favorites" aria-labelledby="favorites-title">
      <div className="section-heading split reveal-up">
        <h2 id="favorites-title">
          Улюблені <span>роботи</span>
        </h2>
        <Link className="text-link" href="/projects">
          Усі проєкти
        </Link>
      </div>
      <div className="favorite-grid">
        {favorites.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}

export function FieldsSection() {
  const fields = fieldFilters.filter((field) => field.value !== "all");
  const highlighted = fields.find((field) => fieldCount(field.value) > 0) || fields[0];
  const highlightedProject = firstProjectForField(highlighted.value) || projects[0];

  return (
    <section className="section-block fields-section" aria-labelledby="fields-title">
      <div className="section-heading split reveal-up">
        <h2 id="fields-title">За сферами</h2>
        <Link className="text-link" href="/projects">
          Усі напрями
        </Link>
      </div>
      <div className="fields-layout">
        <Link className="field-feature reveal-up" href={projectUrl(highlightedProject)}>
          <Image
            src={highlightedProject.screenshots[0]}
            alt={`${highlightedProject.title} field preview`}
            fill
            sizes="(max-width: 1180px) 100vw, 60vw"
            style={{ objectFit: "cover" }}
          />
          <div>
            <p className="hero-kicker">— {numbered(0)} · Категорія</p>
            <h3>{fieldDetails[highlighted.value].title}</h3>
            <p>{fieldDetails[highlighted.value].text}</p>
            <span className="primary-link">Усі проєкти</span>
          </div>
        </Link>
        <div className="field-list reveal-up">
          {fields.map((field, index) => {
            const count = fieldCount(field.value);
            return count ? (
              <Link className="field-row" key={field.value} href={`/projects?field=${field.value}`}>
                <span>{numbered(index)}</span>
                <strong>{field.label}</strong>
                <em>{count}</em>
              </Link>
            ) : (
              <button className="field-row is-empty" key={field.value} type="button" disabled>
                <span>{numbered(index)}</span>
                <strong>{field.label}</strong>
                <em>{count}</em>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ManifestSection({ compact = false, children, label = "Маніфест" }) {
  return (
    <section className={`manifest-section ${compact ? "compact" : ""}`} aria-label={label}>
      <blockquote className="reveal-up">{children}</blockquote>
      <p>{compact ? "— нотатка Myshchyshyn · 2026" : "— принцип Myshchyshyn · 2026"}</p>
    </section>
  );
}

export function PrinciplesSection({ title = "Три принципи, яких тримається портфоліо." }) {
  return (
    <section className="section-block principles-section" aria-labelledby="principles-title">
      <h2 id="principles-title">{title}</h2>
      <div className="principle-grid">
        {principles.map((principle, index) => (
          <article className="principle-card reveal-up" key={principle.title}>
            <span>{["I.", "II.", "III."][index]}</span>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="section-block team-section" aria-labelledby="team-title">
      <div className="section-heading split reveal-up">
        <h2 id="team-title">Ролі команди в одному робочому ритмі.</h2>
        <span className="section-note">Портрети — нейтральні слоти. Фото власника міняється через /assets/owner-portrait.jpg.</span>
      </div>
      <div className="team-layout">
        <aside className="team-photo-panel reveal-up" aria-label="Місця для майбутніх фото команди">
          <div className="team-photo-grid">
            {teamRoles.map((role, index) => (
              <article className={`team-photo-slot ${role.type}`} key={role.title}>
                <TeamPortrait role={role} />
                <span>
                  {numbered(index)} · {role.label}
                </span>
              </article>
            ))}
          </div>
        </aside>
        <div className="team-role-list">
          {teamRoles.map((role, index) => (
            <article className="team-role reveal-up" key={role.title}>
              <span>
                {numbered(index)} · {role.label}
              </span>
              <h3>{role.title}</h3>
              <p>{role.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section-block process-section" aria-labelledby="process-title">
      <h2 id="process-title">Процес — чотири фази, кожна зі своїм завданням.</h2>
      <div className="process-list">
        {processSteps.map(([number, title, text]) => (
          <article className="process-row reveal-up" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

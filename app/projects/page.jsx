import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { fieldCount, fieldFilters, projects } from "@/lib/data";

export const metadata = {
  title: "Портфоліо",
  description: "Повний каталог живих сайтів Myshchyshyn з фільтрами за сферами й direct case pages."
};

export default async function ProjectsPage({ searchParams }) {
  const params = await searchParams;
  const activeField = params?.field || "all";
  const visibleProjects = activeField === "all" ? projects : projects.filter((project) => project.fields.includes(activeField));

  return (
    <>
      <section className="page-hero catalog-hero" aria-labelledby="catalog-title">
        <p className="hero-kicker">Головна / Портфоліо</p>
        <h1 id="catalog-title">Добірка сайтів, які вже працюють.</h1>
        <p>Фільтруй за сферою, відкривай кейси, дивись прев'ю і переходь на live URL.</p>
        <div className="filter-bar" aria-label="Фільтри за сферами">
          {fieldFilters.map((field) => {
            const count = fieldCount(field.value);
            const disabled = field.value !== "all" && count === 0;
            return disabled ? (
              <button className="filter-button" key={field.value} type="button" disabled aria-pressed={field.value === activeField}>
                {field.label}
                <span>{count}</span>
              </button>
            ) : (
              <Link
                className="filter-button"
                key={field.value}
                href={field.value === "all" ? "/projects" : `/projects?field=${field.value}`}
                aria-pressed={field.value === activeField}
              >
                {field.label}
                <span>{count}</span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="catalog-section" aria-label="Проєкти">
        <div className="catalog-count">
          {visibleProjects.length} з {projects.length} проєктів
        </div>
        {visibleProjects.length ? (
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index === 0} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>У цій сфері поки немає роботи.</h2>
            <p>Коли з'явиться релевантний кейс, він буде доданий через дані проєкту.</p>
          </div>
        )}
      </section>
    </>
  );
}

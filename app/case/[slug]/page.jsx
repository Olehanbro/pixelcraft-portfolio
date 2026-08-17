import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fieldLabel, projectBySlug, projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) {
    return {
      title: "Кейс не знайдено"
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Myshchyshyn`,
      description: project.description,
      images: [project.screenshots[0]]
    },
    twitter: {
      title: `${project.title} | Myshchyshyn`,
      description: project.description,
      images: [project.screenshots[0]]
    }
  };
}

export default async function CasePage({ params }) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="case-page">
      <section className="case-hero" aria-labelledby="case-title">
        <div className="case-copy reveal-up">
          <p className="hero-kicker">Case · {project.category}</p>
          <h1 id="case-title">{project.title}</h1>
          <p>{project.description}</p>
          <div className="case-actions">
            <a className="primary-link" href={project.url} target="_blank" rel="noreferrer">
              Live сайт
            </a>
            <Link className="ghost-link strong" href="/projects">
              Портфоліо
            </Link>
          </div>
        </div>
        <div className="case-visual reveal-up">
          <Image
            src={project.screenshots[0]}
            alt={`${project.title} hero preview`}
            fill
            priority
            sizes="(max-width: 1180px) 100vw, 56vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
      <section className="case-details">
        <div className="case-text reveal-up">
          <p className="hero-kicker">Опис</p>
          <h2>Що показує цей кейс</h2>
          <p>{project.caseSummary}</p>
        </div>
        <aside className="case-aside reveal-up">
          <div>
            <span>Сфери</span>
            <p>{project.fields.map(fieldLabel).join(" · ")}</p>
          </div>
          <div>
            <span>Технології</span>
            <p>{project.technologies.join(" · ")}</p>
          </div>
          <div>
            <span>Посилання</span>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.url.replace("https://", "")}
            </a>
          </div>
        </aside>
      </section>
      <section className="case-preview-section" aria-label={`${project.title} previews`}>
        <p className="hero-kicker">Прев'ю</p>
        <div className="case-preview-grid">
          {project.screenshots.map((src, index) => (
            <div className="case-preview-image" key={src}>
              <Image src={src} alt={`${project.title} preview ${index + 1}`} fill sizes="(max-width: 820px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

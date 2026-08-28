import Image from "next/image";
import Link from "next/link";
import { fieldLabel, projectUrl } from "@/lib/data";

export function BadgeList({ items }) {
  return items.map((item) => <span key={item}>{item}</span>);
}

export function ProjectCard({ project, featured = false, priority = false }) {
  const previewImage = project.heroImage || project.screenshots[0];
  const benefits = project.benefits || project.technologies;
  const coverLabel = project.coverLabel || project.fields.map(fieldLabel).slice(0, 1).join("");
  const coverTitle = project.coverTitle || project.category;

  return (
    <Link className={`project-card reveal-up ${featured ? "featured" : ""}`} href={projectUrl(project)} aria-label={`Відкрити кейс ${project.title}`}>
      <div className="project-main-image">
        <Image
          src={previewImage}
          alt={`${project.title} preview`}
          fill
          priority={priority}
          sizes="(max-width: 820px) 100vw, (max-width: 1180px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <span className="project-field">{coverLabel}</span>
        <div className="project-cover-copy">
          <strong>{coverTitle}</strong>
        </div>
      </div>
      <div className="project-info">
        <div>
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-meta">
          <div>{benefits.slice(0, 3).map((item) => <span key={`${project.slug}-${item}`}>{item}</span>)}</div>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}

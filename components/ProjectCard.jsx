import Image from "next/image";
import Link from "next/link";
import { fieldLabel, projectUrl } from "@/lib/data";

export function BadgeList({ items }) {
  return items.map((item) => <span key={item}>{item}</span>);
}

export function ProjectCard({ project, featured = false, priority = false }) {
  return (
    <Link className={`project-card reveal-up ${featured ? "featured" : ""}`} href={projectUrl(project)} aria-label={`Відкрити кейс ${project.title}`}>
      <div className="project-main-image">
        <Image
          src={project.screenshots[0]}
          alt={`${project.title} preview`}
          fill
          priority={priority}
          sizes="(max-width: 820px) 100vw, (max-width: 1180px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <span className="project-field">{project.fields.map(fieldLabel).slice(0, 1).join("")}</span>
      </div>
      <div className="project-info">
        <div>
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-meta">
          <div>{project.technologies.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}

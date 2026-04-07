import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
    return null;
  }

  return (
    <article className="project-page">
      <div className="project-page__inner">

        <Link href="/work" className="project-page__back">
          ← Back to all projects
        </Link>

        {/* Header */}
        <header className="project-page__header">
          <p className="section-label">{project.role}</p>
          <h1 className="section-title">{project.title}</h1>
          <p className="project-page__summary">{project.summary}</p>

          <ul className="project-card__tags" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="project-card__tag">{tag}</li>
            ))}
          </ul>

          {project.href.startsWith('http') && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="hero__button hero__button--primary"
            >
              View live site ↗
            </a>
          )}
        </header>

        {/* Case study content */}
        <div className="project-page__body">

          {project.overview && (
            <div className="project-page__section">
              <h2 className="project-page__section-title">Overview</h2>
              <p>{project.overview}</p>
            </div>
          )}

          {project.challenge && (
            <div className="project-page__section">
              <h2 className="project-page__section-title">The challenge</h2>
              <p>{project.challenge}</p>
            </div>
          )}

          {project.approach && (
            <div className="project-page__section">
              <h2 className="project-page__section-title">My approach</h2>
              <p>{project.approach}</p>
            </div>
          )}

          {project.outcome && (
            <div className="project-page__section">
              <h2 className="project-page__section-title">Outcome</h2>
              <p>{project.outcome}</p>
            </div>
          )}

        </div>

      </div>
    </article>
  );
}
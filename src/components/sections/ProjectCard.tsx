import Link from 'next/link';

type ProjectCardProps = {
  id?: number;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export default function ProjectCard({ title, summary, tags, href, slug }: ProjectCardProps) {
  const isExternal = href.startsWith('http');

  return (
    <article className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__text">{summary}</p>

      <ul className="project-card__tags" aria-label={`${title} technologies`}>
        {tags.map((tag) => (
          <li key={tag} className="project-card__tag">{tag}</li>
        ))}
      </ul>

      {/* Always links to the internal project page */}
      <Link href={`/work/${slug}`} className="text-link">
        View project
      </Link>

      {/* Only shows if there's a live external site */}
      {isExternal && (
        <a href={href} className="text-link" target="_blank" rel="noreferrer">
          View live site ↗
        </a>
      )}
    </article>
  );
}
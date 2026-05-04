import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr';

type ProjectCardProps = {
  id?: number;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  featured?: boolean;
  image?: string;
};

export default function ProjectCard({ title, summary, tags, href, slug, featured, image }: ProjectCardProps) {
  const isExternal = href.startsWith('http');

  return (
    <article className={`card project-card ${featured ? 'project-card--featured' : ''}`}>
      {image && (
        <div className="card__image project-card__image">
          <Image
            src={image}
            alt={`${title} project screenshot`}
            width={800}
            height={450}
            className="project-card__img"
          />
        </div>
      )}

      <div className="project-card__body">
        <ul className="project-card__tags" aria-label={`${title} technologies`}>
          {tags.map((tag) => (
            <li key={tag} className="project-card__tag tag">{tag}</li>
          ))}
        </ul>

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__text ">{summary}</p>

        <div className="project-card__links">
          {/* <Link href={`/work/${slug}`} className="project-card__link pill pill--primary">
            View project <ArrowRightIcon size={18} weight="regular" />
          </Link> */}
          {isExternal && (
            <a href={href} className="project-card__link pill pill--secondary" target="_blank" rel="noreferrer">
              Live site <ArrowUpRightIcon size={18} weight="regular" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
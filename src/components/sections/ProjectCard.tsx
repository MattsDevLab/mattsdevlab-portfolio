import Link from 'next/link';

type ProjectCardProps = {
    title: string;
    summary: string;
    tags: string[];
    href: string;
};

export default function ProjectCard({
    title,
    summary,
    tags,
    href,
}: ProjectCardProps) {
    return(
        <article className="project-card">
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__text">{summary}</p>
            <ul className="project-card__tags" aria-label={`${title} technologies`}>
                {tags.map((tag) => (
                    <li key={tag} className="project-card__tag">
                        {tag}
                    </li>
                ))}
            </ul>
            <Link href="{href}" className="text-link">View project</Link>

        </article>
    );
}


import Link from 'next/link';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section className="featured-projects s-pad">
      <div className="inner__wrapper">
        <p className="sub-title">Selected Work</p>
        <h2 className="section-title">Frontend accessibility-focused projects</h2>
        <p className="section-text">
          A selection of projects focused on accessibility, performance, and scalable frontend development across custom website builds.
        </p>

        <div className="featured-projects__grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              summary={project.summary}
              tags={project.tags}
              href={project.href}
              slug={project.slug}
              featured={project.featured}
              image={project.image}
            />
          ))}
        </div>

        <Link href="/work" className="pill pill--primary">View all projects</Link>
      </div>
    </section>
  );
}
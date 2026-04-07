import Link from 'next/link';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="featured-projects">
      <div className="featured-projects__inner">
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Featured projects</h2>
        <p className="section-text">
          A selection of frontend and accessibility-focused work across custom website builds.
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
            />
          ))}
        </div>

        <Link href="/work" className="text-link">View all projects</Link>
      </div>
    </section>
  );
}
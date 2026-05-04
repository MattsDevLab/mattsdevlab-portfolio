import Link from 'next/link';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

export default function FeaturedProjects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section id="featured-projects" className="featured-projects s-pad">
      <div className="inner__wrapper">
        <div className="header">
          <div className="header__lh-col">
            <p className="sub-text">// Selected Work</p>
            <h2 className="section-title"><span className="text-highlight">Accessibility-focused</span> Projects</h2>
            <p className="lead-text">
              A selection of projects demonstrating accessibility-first development, performance optimisation, and scalable frontend architecture.
            </p>
          </div>
          <div className="header__rh-col">
            {/* <Link href="/work" className="pill pill--primary pill--large">
              View all projects
                <ArrowRightIcon size={18} weight="regular" aria-hidden="true" /> 
            </Link> */}
          </div>
        </div>
        <div className="featured-projects__grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              summary={project.summary}
              tags={project.tags}
              href={project.href}
              slug={project.slug}
              featured={index === 0}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
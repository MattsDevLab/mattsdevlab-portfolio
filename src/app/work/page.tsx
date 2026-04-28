import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';
import ContactCta from '@/components/sections/ContactCta';
import PageHero from '@/components/sections/PageHero';

export default function WorkPage() {
  return (
    <>
    <PageHero
      label="// Selected Work"
      title={<><span className="text-highlight">Accessibility-focused</span> Projects</>}
      description="A selection of projects demonstrating accessibility-first development, performance optimisation, and scalable frontend architecture."
    />
    <section className="featured-projects s-pad">
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
         
          </div>
        </div>
        <div className="featured-projects__grid">
          {projects.map((project) => (
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

      </div>
    </section>
    <ContactCta />
  </>
  );
}
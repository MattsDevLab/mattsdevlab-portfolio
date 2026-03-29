import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';

export default function WorkPage() {
    return(
        <section className="work-page">
            <div className="work-page__inner">
                <p className="section-label">Work</p>
                <h1 className="section-title">Selected projects</h1>
                <p className="section-text">
                    A collection of projects focused on frontend development, accessibility, component-based architecture, and custom website builds.
                </p>
                <div className="featured-projects__grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            summary={project.summary}
                            tags={project.tags}
                            href={project.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
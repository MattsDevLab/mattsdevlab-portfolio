export type TechCard  = {
    id: string;
    iconId: string;
    title: string;
    description: string;
    tags: string[];
    featured?: boolean;
};

export const techCards: TechCard[] = [
     {
        id: 'frontend-architecture',
        iconId: 'frame-corners',
        title: 'Frontend Architecture',
        description: 'Designing scalable frontend systems using BEM, 7:1 SASS architecture, and component-based patterns that teams can build on confidently over the long term.',
        tags: ['HTML5', 'SASS', 'Design Systems', 'BEM'],
    },
     {
        id: 'accessibility',
        iconId: 'eye',
        title: 'Accessibility',
        description: 'Specialist expertise in WCAG 2.2 AA compliance — including screen reader testing, accessibility audits, audit documentation, and embedding accessible patterns into every component by default.',
        tags: ['WCAG 2.2', 'Keyboard Controls', 'Screen Readers'],
        featured: true,
    },
    {
        id: 'javascript',
        iconId: 'lightning',
        title: 'Modern JavaScript',
        description: 'Writing clean, modular JavaScript using ES2020+ features, ES Modules, and a custom component loader architecture with lazy loading for optimal runtime performance.',
        tags: ['ES Modules', 'React', 'Next.js'],
    },
    {
        id: 'cms',
        iconId: 'stack',
        title: 'CMS Systems',
        description: 'Deep experience architecting custom WordPress and Joomla builds using Twig, Timber, and ACF to create reusable, data-driven component systems at scale.',
        tags: ['WordPress', 'Joomla', 'ACF'],
    },
    {
        id: 'build-tools',
        iconId: 'wrench',
        title: 'Build Tools',
        description: 'Setting up and maintaining modern frontend build pipelines using Vite and Gulp, with SASS compilation, asset optimisation, and GitHub-based version control.',
        tags: ['Vite', 'Gulp', 'GitHub'],
    },
    {
        id: 'component-architecture',
        iconId: 'cube',
        title: 'Component Architecture',
        description: 'Building and maintaining scalable component libraries with clear documentation, consistent naming conventions, and reusable patterns that reduce build time and improve developer experience.',
        tags: ['Component Library', 'Design Systems', 'BEM'],
    },
];
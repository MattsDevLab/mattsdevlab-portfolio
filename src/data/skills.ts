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
        id: 'technical-leadership',
        iconId: 'crown',
        title: 'Technical Leadership',
        description: 'Leading technical direction across projects — from client consultancy and scoping to architecture decisions, team leadership, and infrastructure improvements that drive scalable, efficient delivery.',
        tags: ['Strategy', 'Client Consultancy', 'Team Leadership', 'Scoping & Estimation'],
        featured: true,
    },
     {
        id: 'frontend-architecture',
        iconId: 'frame-corners',
        title: 'Frontend Architecture',
        description: 'Designing scalable frontend systems using BEM, 7:1 SASS architecture, and component-based patterns that enable teams to build, scale, and maintain systems with confidence',
        tags: ['HTML5', 'SASS', 'Design Systems', 'BEM', 'Component Architecture'],
    },
     {
        id: 'accessibility',
        iconId: 'eye',
        title: 'Accessibility',
        description: 'Specialist expertise in WCAG 2.2 AA compliance — including screen reader testing, accessibility audits, audit documentation, and embedding accessible patterns into every component by default.',
        tags: ['WCAG 2.2', 'Keyboard Controls', 'Screen Readers'],
        featured: false,
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
        id: 'performance-engineering',
        iconId: 'cube',
        title: 'Performance Engineering',
        description: 'Optimising frontend performance through Lighthouse-driven audits, code splitting, lazy loading, and scalable asset strategies to deliver fast, high-performing user experiences.',
        tags: ['Lighthouse', 'Core Web Vitals', 'LAZY LOADING', 'OPTIMISATION'],
    },
];
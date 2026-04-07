export type Project = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  featured: boolean;
  role?: string;
  overview?: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'new-horizon-youth-centre',
    title: 'New Horizon Youth Centre',
    summary: 'Accessibility-first WordPress build focused on usability, performance, and inclusive access to community services.',
    tags: ['WordPress', 'Accessibility', 'Frontend Development'],
    href: 'https://nhyouthcentre.org.uk/',
    featured: true,
    role: 'Frontend Developer',
    overview: 'New Horizon Youth Centre needed a website that was genuinely accessible to all users, including those with disabilities, while clearly communicating their community services.',
    challenge: 'The main challenge was building a site that met WCAG accessibility standards without compromising on design quality or usability for non-disabled users.',
    approach: 'I built the site on WordPress with a strong focus on semantic HTML, keyboard navigation, colour contrast, and screen reader compatibility throughout every component.',
    outcome: 'The finished site passes WCAG 2.1 AA standards and gives the organisation a clear, maintainable platform to communicate their services.',
  },
  {
    id: 2,
    slug: 'coppafeel-self-checkout',
    title: 'CoppaFeel Self-Checkout',
    summary: 'Frontend-focused build with strong accessibility considerations, usability improvements, and a clear user journey.',
    tags: ['Accessibility', 'UI Development', 'Performance'],
    href: 'https://self-checkout.coppafeel.org/',
    featured: true,
    role: 'Frontend Developer',
    overview: 'CoppaFeel needed a self-checkout experience that was simple, accessible, and on-brand — guiding users through a sensitive journey with clarity.',
    challenge: 'Balancing a clear user flow with accessibility requirements in a single-page application context, ensuring every interaction was usable without a mouse.',
    approach: 'I focused on logical focus management, clear error states, and accessible form patterns to make sure the journey worked for all users.',
    outcome: 'The self-checkout experience delivers a smooth, accessible journey that reflects the brand and serves a wide range of users effectively.',
  },
  {
    id: 3,
    slug: 'custom-wordpress-development',
    title: 'Custom WordPress Development',
    summary: 'Reusable component-based builds using WordPress, Timber, Twig, ACF, and modern frontend practices.',
    tags: ['Timber', 'Twig', 'ACF', 'Component Architecture'],
    href: '/work/custom-wordpress-development',
    featured: false,
    role: 'Frontend Developer',
    overview: 'A range of custom WordPress projects built with a component-based approach using Timber, Twig, and ACF for flexible, maintainable page building.',
    challenge: 'Creating reusable, editor-friendly components that maintain frontend quality and accessibility without requiring developer intervention for every content change.',
    approach: 'I used Timber and Twig to separate logic from presentation, and ACF to give editors flexible control, while keeping the frontend clean and consistent.',
    outcome: 'Delivered scalable WordPress builds that editors can manage independently, reducing maintenance overhead and keeping frontend quality high.',
  },
];
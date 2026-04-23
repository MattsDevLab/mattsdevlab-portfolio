export type Project = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  featured: boolean;
  image?: string;
  role?: string;
  overview?: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'west-london-institute-of-technology',
    title: 'West London Institute of Technology',
    summary: 'Accessibility-first WordPress build focused on usability, performance, and inclusive access to community services.',
    tags: ['Joomla', 'Module System', 'Accessibility'],
    href: 'https://wliot.ac.uk/',
    featured: true,
    image: '/images/projects/wliot-showcase-thumbnail.jpeg',
    role: 'Frontend Developer',
    overview: 'New Horizon Youth Centre needed a website that was genuinely accessible to all users, including those with disabilities, while clearly communicating their community services.',
    challenge: 'The main challenge was building a site that met WCAG accessibility standards without compromising on design quality or usability for non-disabled users.',
    approach: 'I built the site on WordPress with a strong focus on semantic HTML, keyboard navigation, colour contrast, and screen reader compatibility throughout every component.',
    outcome: 'The finished site passes WCAG 2.1 AA standards and gives the organisation a clear, maintainable platform to communicate their services.',
  },
  {
    id: 2,
    slug: 'bodyset',
    title: 'BodySet',
    summary: 'Frontend-focused build with strong accessibility considerations, usability improvements, and a clear user journey.',
    tags: ['WordPress', 'Custom Components', 'Data Mapping'],
    href: 'https://bodyset.co.uk/',
    featured: true,
    image: '/images/projects/bodyset-showcase-thumbnail.jpeg',
    role: 'Frontend Developer',
    overview: 'CoppaFeel needed a self-checkout experience that was simple, accessible, and on-brand — guiding users through a sensitive journey with clarity.',
    challenge: 'Balancing a clear user flow with accessibility requirements in a single-page application context, ensuring every interaction was usable without a mouse.',
    approach: 'I focused on logical focus management, clear error states, and accessible form patterns to make sure the journey worked for all users.',
    outcome: 'The self-checkout experience delivers a smooth, accessible journey that reflects the brand and serves a wide range of users effectively.',
  },
  {
    id: 3,
    slug: 'western-gateway',
    title: 'Western Gateway',
    summary: 'Reusable component-based builds using WordPress, Timber, Twig, ACF, and modern frontend practices.',
    tags: ['Wordpress'],
    href: '/work/western-gateway',
    featured: true,
    image: '/images/projects/western-gateway-showcase-thumbnail.jpeg',
    role: 'Frontend Developer',
    overview: 'A range of custom WordPress projects built with a component-based approach using Timber, Twig, and ACF for flexible, maintainable page building.',
    challenge: 'Creating reusable, editor-friendly components that maintain frontend quality and accessibility without requiring developer intervention for every content change.',
    approach: 'I used Timber and Twig to separate logic from presentation, and ACF to give editors flexible control, while keeping the frontend clean and consistent.',
    outcome: 'Delivered scalable WordPress builds that editors can manage independently, reducing maintenance overhead and keeping frontend quality high.',
  },
  {
    id: 4,
    slug: 'find-fusion',
    title: 'Find Fusion',
    summary: 'Skills-building platform developed for the City of London Corporation connecting young people with opportunities.',
    tags: ['Wordpress'],
    href: 'https://findfusion.org.uk/',
    featured: true,
    image: '/images/projects/find-fusion-showcase-thumbnail.jpeg',
    role: 'Frontend Developer',
    overview: 'Find Fusion needed a platform to connect young people with skills-building opportunities across London.',
    challenge: 'Building an accessible, performant platform that works for a diverse range of users including those with disabilities.',
    approach: 'Focused on accessible component architecture and clear user journeys throughout the application.',
    outcome: 'Delivered a platform that serves thousands of young people across London with a clear, accessible experience.',
  },
  {
    id: 5,
    slug: 'shani-dhanda',
    title: 'Shani Dhanda',
    summary: 'Personal brand website for multi-award-winning disability activist and keynote speaker.',
    tags: ['WordPress', 'Accessibility', 'Performance'],
    href: 'https://shanidhanda.com/',
    featured: false,
    image: '/images/projects/shani-dhanda-showcase-thumbnail.jpeg',
    role: 'Frontend Developer',
    overview: 'Shani Dhanda needed a personal brand website that reflected her work as a disability activist and keynote speaker.',
    challenge: 'Creating a site that was both visually striking and deeply accessible — fitting given the subject matter.',
    approach: 'Built with accessibility at the core, ensuring every interaction worked for all users regardless of ability.',
    outcome: 'Delivered a premium personal brand site that reflects her profile and is fully accessible.',
  },
  {
    id: 6,
    slug: 'coppafeel',
    title: 'CoppaFeel',
    summary: 'Accessible self-checkout experience for the UK\'s only youth-focused breast cancer awareness charity.',
    tags: ['Accessibility', 'React', 'UI Development'],
    href: 'https://coppafeel.org/',
    featured: false,
    image: '/images/projects/coppafeel-showcase-thumbnail.jpeg',
    role: 'Frontend Developer',
    overview: 'CoppaFeel needed a self-checkout experience that guided users through a sensitive journey with clarity and accessibility.',
    challenge: 'Balancing a clear user flow with accessibility requirements in a sensitive context.',
    approach: 'Focused on logical focus management, clear error states, and accessible form patterns.',
    outcome: 'Delivered a smooth, accessible checkout journey that reflects the brand and serves all users effectively.',
  },
];
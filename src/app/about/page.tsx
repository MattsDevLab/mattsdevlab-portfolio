import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContactCta from '@/components/sections/ContactCta';

export default function AboutPage(){
    return(
        <>
    <PageHero
      label="// About Me"
      title={<>Senior <span className="text-highlight">Frontend Engineer</span></>}
      description="10+ years building accessible, scalable frontend systems — from WCAG-compliant component libraries to large-scale architecture and technical leadership."
    />
    <div className="about-page">
            <div className="about-page__inner">

            {/* Intro */}

            <header className="about-page__header">
            <p className="section-label">About Me</p>
            <h1 className="section-title">Senior frontend engineer specialising in accessibility, scalable UI architecture, and modern web systems</h1>
            <p className="about-page__lead">
                I'm Matt — a senior frontend engineer and accessibility specialist based in the UK,
                with over 10 years of experience building accessible, scalable, and well-crafted
                websites and frontend systems.
            </p>
            </header>

            {/* Story */}

            <section className="about-page__section">
                <h2 className="about-page__section-title">My journey</h2>
                <p>My relationship with technology started long before I wrote a line of code.</p>
                <p>As a kid in Cape Town, I saved up birthday money to buy my first computer — then immediately pulled it apart to understand how it worked. That curiosity has stayed with me ever since.</p>
                <p>I studied interactive graphics and frontend development at Concept Interactive (2008–2011), covering typography, design, frontend development, and WordPress. Early on, I became the person others turned to when they were stuck — something that naturally evolved into mentoring and technical leadership.</p>
                <p>Since then, I’ve worked across agencies, in-house teams, and freelance — building custom WordPress platforms, leading frontend delivery, managing developers, and becoming the sole accessibility specialist at a WCAG-focused agency.</p>
                <p>Along the way, I’ve navigated setbacks — including redundancies and a formal performance warning that I turned around within three months and ended with me being promoted. Each time, I came back stronger, with a broader skillset and clearer direction.</p>
            </section>

            {/* What I do */}

            <section className="about-page__section">
            <h2 className="about-page__section-title">What I do</h2>
            <p>My work sits at the intersection of frontend engineering, accessibility, and system thinking.</p>
            <p>I don’t just build components — I design the systems those components live in.</p>
            <p>I'm now deepening my JavaScript foundations and building production experience in React and Next.js</p>
            <p>My experience includes:</p>
            <ul>
                <li>leading frontend architecture on large-scale builds</li>
                <li>creating reusable component systems</li>
                <li>running client discovery sessions</li>
                <li>mentoring developers and improving team practices</li>
                <li>leading frontend architecture on large-scale builds</li>
            </ul>
            <p>In 2025, I led the frontend architecture for a large Joomla project — learning the framework’s MVC structure from scratch and delivering 20+ custom modules alongside a fully accessible custom template.</p>
            <p>That kind of challenge — learning quickly under pressure and delivering at a high level — is where I do my best work.</p>
            <p>I’m now deepening my JavaScript foundations and building production experience in React and Next.js, with the goal of moving fully into modern frontend engineering and technical leadership within a product-focused environment.</p>
            </section>

            {/* Accessibility */}

            <section className="about-page__section">
            <h2 className="about-page__section-title">Why accessibility matters</h2>
            <p>Accessibility isn’t a checklist — it’s a core design constraint.</p>
            <p>I’ve built WCAG 2.2-compliant components, conducted audits, written accessibility statements, tested with screen readers, and helped teams understand what accessible frontend looks like in practice.</p>
            <p>The web works better when it works for everyone.</p>
            </section>

            {/* Beyond the work */}

            <section className="about-page__section">
            <h2 className="about-page__section-title">Beyond the work</h2>
            <p>
                Outside of development I'm passionate about men's personal development. I've led
                men's groups, run retreats and events, and built communities from scratch. I'm
                working toward building digital products and resources in that space — combining
                my frontend skills with something I care deeply about.
            </p>
            <p>
                I'm originally from Cape Town, South Africa — graffiti artist, surfer, hiker,
                and someone who has never taken the straightforward path. I think that shows in
                how I work.
            </p>
            </section>

            {/* CTA */}

            <section className="about-page__section">
            <h2 className="about-page__section-title">Let's work together</h2>
            <p>
                I'm currently open to senior frontend and accessibility-focused roles, ideally at
                companies that care about quality, inclusion, and building things that last. If
                that sounds like you, I'd love to hear from you.
            </p>
            <Link href="/contact" className="hero__button hero__button--primary">
                Get in touch
            </Link>
        </section>
      </div>
    </div>
    <ContactCta />
    </>
    );
}
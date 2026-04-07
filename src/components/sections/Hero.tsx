import Link from 'next/link';

export default function Hero(){
    return(
        <section className="hero">
            <div className="hero__inner">
                <p className="hero__eyebrow">Accessibility Specialist / UI Component Systems Architect / React & Next.js</p>
                <h1 className="hero__title">Senior Frontend Engineer</h1>
                <p className="hero__text">
                    I architect accessible, scalable frontend systems built to last — then I make them better. 
                    Performance, maintainability, and continuous improvement aren&apos;t afterthoughts. They&apos;re the foundation.
                </p>
                 <p className="hero__text">
                    Specialising in WCAG 2.2 AA accessibility engineering and component-based UI architecture, 
                    with a growing focus on React and Next.js.
                </p>
                 <div className="hero__cta">
                    <Link href="/work" className="hero__cta-primary">
                        See what I build
                    </Link>
                    <a href="/Matt-Bagley-Senior-Frontend-Engineer-CV.pdf" className="hero__cta-secondary" download>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}
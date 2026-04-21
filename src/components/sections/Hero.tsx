import Link from 'next/link';
import ScrollIndicator from '@/components/elements/ScrollIndicator';
import { ArrowRightIcon, GithubLogoIcon, LinkedinLogoIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr';

export default function Hero(){
    return(
        <section className="hero s-pad">
            <div className="hero__noise" aria-hidden="true" />
            <div className="inner__wrapper">
                <div className="hero__content">
                    <p className="hero__tags">
                        <span className="tags">Accessibility Specialist</span>
                        <span className="tags">UI Component Systems Architect</span>
                        <span className="tags">React & Next.js</span> 
                    </p>
                    <h1 className="hero__title">Senior <span className="text-highlight">Frontend Engineer</span></h1>
                    <div className="hero__text ">
                        <p className="lead-text">I architect accessible, scalable frontend systems built to last — then I make them better. 
                        Performance, maintainability, and continuous improvement aren&apos;t afterthoughts. They&apos;re the foundation.</p>
                        <p className="lead-text"> Specialising in WCAG 2.2 AA accessibility engineering and component-based UI architecture, 
                        with a growing focus on React and Next.js.</p>
                    </div>
                    <div className="hero__cta">
                        <Link href="/work" className="pill pill--primary">
                            See what I build <ArrowRightIcon size={18} weight="regular" />
                        </Link>
                        <Link href="/about" className="pill pill--secondary">
                            About me <ArrowRightIcon size={18} weight="regular" />
                        </Link>
                    </div>
                </div>
                <div className="hero__meta">
                    <div className="hero__socials">
                        <p className="hero__socials-label">// Connect</p>
                        <div className="hero__socials-links">
                        <a href="https://github.com/..." className="hero__social-link" aria-label="Matt's GitHub profile">
                            <GithubLogoIcon size={18} weight="light" />
                        </a>
                        <a href="https://linkedin.com/..." className="hero__social-link" aria-label="Matt's LinkedIn profile">
                            <LinkedinLogoIcon size={18} weight="light" />
                        </a>
                        <a href="mailto:..." className="hero__social-link" aria-label="Email Matt">
                            <EnvelopeSimpleIcon size={18} weight="light" />
                        </a>
                        </div>
                    </div>
                    <div className="hero__location">
                        <p className="hero__location-label">// Location</p>
                        <p className="hero__location-text">REMOTE · UK</p>
                    </div>
                </div>
            </div>
            <ScrollIndicator />
        </section>
    );
}
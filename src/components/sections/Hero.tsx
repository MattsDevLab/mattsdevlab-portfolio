import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

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
                    <h1 className="hero__title">Senior <span className="text-highlgiht">Frontend Engineer</span></h1>
                    <div className="hero__text">
                        <p>I architect accessible, scalable frontend systems built to last — then I make them better. 
                        Performance, maintainability, and continuous improvement aren&apos;t afterthoughts. They&apos;re the foundation.</p>
                        <p> Specialising in WCAG 2.2 AA accessibility engineering and component-based UI architecture, 
                        with a growing focus on React and Next.js.</p>
                    </div>
                    <div className="hero__cta">
                        <Link href="/work" className="pill pill--primary">
                            See what I build <ArrowRightIcon size={18} weight="regular" />
                        </Link>
                        <Link href="/about" className="pill pill--secondary">
                            About me <ArrowRightIcon size={18} weight="light" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
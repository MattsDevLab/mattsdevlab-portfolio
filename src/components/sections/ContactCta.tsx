import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

export default function CTABanner() {
    return (
        <section className="cta-banner s-pad">
            <div className="hero__noise" aria-hidden="true" />
            <div className="inner__wrapper">
                <div className="cta-banner__content">
                    <h2 className="cta-banner__title">
                        Serious about quality, performance and scalability?
                        <span className="text-highlight">let&apos;s talk.</span>
                    </h2>
                    <p className="cta-banner__text">
                        I work with teams who value accessibility, performance, and long-term thinking — not shortcuts. If that sounds like your approach, I’d like to hear from you.
                    </p>
                    <div className="cta-banner__actions">
                        <Link href="/contact" className="pill pill--primary">
                            Let&apos;s work together
                            <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
                        </Link>
                        <Link href="/work" className="pill pill--secondary">
                            See my work
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
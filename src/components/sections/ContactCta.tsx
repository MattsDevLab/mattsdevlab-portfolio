import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

export default function CTABanner() {
    return (
        <section className="cta-banner s-pad">
            <div className="inner__wrapper">
                <div className="cta-banner__card">
                    <h2 className="cta-banner__title">
                        If you build things that matter —{' '}
                        <span className="text-highlight">let&apos;s talk.</span>
                    </h2>
                    <p className="cta-banner__text">
                        I take on selective projects and collaborations where accessibility, 
                        quality, and long-term thinking are non-negotiable. If that sounds 
                        like your team — I&apos;d like to hear from you.
                    </p>
                    <div className="cta-banner__actions">
                        <Link href="/contact" className="pill pill--primary">
                            Let&apos;s work together
                            <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
                        </Link>
                        <Link href="/work" className="pill pill--secondary">
                            View my work
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
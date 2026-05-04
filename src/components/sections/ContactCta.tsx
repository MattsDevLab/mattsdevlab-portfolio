import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

export default function CTABanner() {
    return (
        <section className="cta-banner s-pad">
            <div className="hero__noise" aria-hidden="true" />
            <div className="inner__wrapper">
                <div className="cta-banner__content">
                    <p className="sub-text">// Let&apos;s talk.</p>
                    <h2 className="cta-banner__title heading-h2">
                        Built to last
                    </h2>
                    <p className="cta-banner__text lead-text">
                        I work with teams who value accessibility, performance, and long-term thinking — not shortcuts. If that sounds like your approach, I’d like to hear from you.
                    </p>
                    <div className="cta-banner__actions">
                         {/* <Link href="/work" className="pill pill--secondary pill--large">
                            See my work
                            <ArrowRightIcon size={18} weight="regular" aria-hidden="true" />
                        </Link> */}
                        <Link href="mailto:mattsdevlab@gmail.com" className="pill pill--primary pill--large">
                            Let&apos;s work together
                            <ArrowRightIcon size={18} weight="regular" aria-hidden="true" />
                        </Link>
                       
                    </div>
                </div>
            </div>
        </section>
    );
}
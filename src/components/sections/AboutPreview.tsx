import Link from 'next/link';

export default function AboutPreview(){

    const stats = [
        { label: 'Experience', value: '10+', unit: 'Years' },
        { label: 'Projects', value: '20+', unit: 'Delivered' },
        { label: 'Specialism', value: 'WCAG', unit: '2.2 AA' },
        { label: 'Location', value: 'UK', unit: 'Remote' },
    ];

    return(
        <section className="about-preview s-pad">
            <div className="inner__wrapper">
                <div className="about-preview__lh-col">
                    <p className="sub-title">About Me / Origin Story</p>
                    <h2 className="about-preview__title">
                        From 52 cents to<span className="text-highlgiht">{' '}</span>
                        <span className="text-highlight">Senior Engineer.</span>
                    </h2>
                    <div className="about-preview__divider" aria-hidden="true"></div>
                    <ul className="about-preview__stats" aria-label="Key facts">
                        {stats.map((stat) => (
                            <li key={stat.label} className="about-preview__stat">
                                <span className="about-preview__stat-label">{stat.label}</span>
                                <span className="about-preview__stat-value">
                                    {stat.value}
                                    <span className="about-preview__stat-unit">{stat.unit}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="about-preview__rh-col">
                    <p className="lead-text">
                        I&apos;m Matt — a senior frontend engineer who can&apos;t leave a system 
                        alone until it&apos;s faster, cleaner, and more accessible than I found it.
                    </p>
                    <p>
                        My relationship with technology started long before I wrote a line of code. 
                        As a kid in Cape Town, I saved up birthday money to buy my first computer — 
                        then immediately pulled it apart to understand how it worked. That curiosity 
                        has stayed with me ever since.
                    </p>
                    <p>
                        Over 10 years later I&apos;ve architected accessible component systems, led 
                        agency teams, owned entire accessibility practices overnight, and rebuilt 
                        myself from scratch more than once. The drive that pulled apart that first 
                        computer still powers everything I build today.
                    </p>
                    <Link href="/about" className="pill pill--secondary">
                        Read My Story
                    </Link>
                </div>
            </div>
        </section>
    );
}
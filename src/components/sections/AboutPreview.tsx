import Link from 'next/link';

export default function AboutPreview(){
    return(
        <section className="about-preview s-pad">
            <div className="inner__wrapper">
                <p className="section-label">About</p>
                <h2 className="section-title">A frontend developer focused on clarity, usability, and growth</h2>
                <p className="section-text">
                I have strong experience in WordPress, accessibility, semantic HTML, robust CSS, and
                component-based frontend development. I’m now building deeper expertise in JavaScript,
                React, and Next.js to move further into modern frontend engineering.
                </p>

                <Link href="/about" className="text-link">
                Learn more about me
                </Link>
            </div>
        </section>
    );
}
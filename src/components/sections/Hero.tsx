import Link from 'next/link';

export default function Hero(){
    return(
        <section className="hero">
            <div className="hero__inner">
                <p className="hero__eyebrow">Frontend Developer / Accessibility / Mordern Web</p>
                <h1 className="hero__title">Senior web developer building accessible, scalable digital experiences</h1>
                <p className="hero__text">I specialise in accessibility-first frontend evelopment, scalable UI Architecture, and custom website builds - with deep experience in WordPress and growing experience in Next.js and React.</p>
            </div>
        </section>
    );
}
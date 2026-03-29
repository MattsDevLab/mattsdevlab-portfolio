import Link from 'next/link';

export default function contactCta(){
    return(
        <section className="contact-cta">
            <div className="contact-cta__inner">
                <p className="section-label">Contact</p>
                <h2 className="section-title">Let’s build something strong</h2>
                <p className="section-text">
                Whether you need frontend development, accessibility support, or a developer who cares
                about quality and maintainability, I’d love to connect.
                </p>

                <Link href="/contact" className="hero__button hero__button--primary">Get in touch</Link>
        </div>
    </section> 
    );
}
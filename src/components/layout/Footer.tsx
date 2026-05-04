import Link from 'next/link';
import { GithubLogoIcon, LinkedinLogoIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="site-footer">
            <div className="inner__wrapper">
                <div className="site-footer__meta">
                    <p className="site-footer__copyright">
                        © {currentYear} MattsDevLab. All rights reserved. 
                    </p>
                </div>
                <ul className="site-footer__social-links">
                    <li>
                        <a href="https://github.com/MattsDevLab" className="hero__social-link" aria-label="Matt's GitHub profile">
                            <GithubLogoIcon size={18} weight="light" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mattsdevlab/" className="hero__social-link" aria-label="Matt's LinkedIn profile">
                            <LinkedinLogoIcon size={18} weight="light" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:mattsdevlab@gmail.com" className="hero__social-link" aria-label="Email Matt">
                            <EnvelopeSimpleIcon size={18} weight="light" />
                        </a>
                    </li>
                </ul>
                {/* <nav aria-label="Footer" className="site-footer__nav">
                    <ul className="site-footer__menu">
                        <li>
                            <Link href="/work" className="site-footer__link">
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="site-footer__link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/philosophy" className="site-footer__link">
                                Philosophy
                            </Link>
                        </li>
                        
                        <li>
                          <Link href="/contact" className="site-footer__link">
                            Contact
                          </Link>  
                        </li>
                    </ul>
                </nav> */}
            </div>
        </footer>
    )
}
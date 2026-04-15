import Link from 'next/link';

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
                <nav aria-label="Footer navigation" className="site-footer__nav">
                    
                    <ul className="site-footer__menu">
                        <li>
                            <Link href="/about" className="site-footer__link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/work" className="site-footer__link">
                                Work
                            </Link>
                        </li>
                        <li>
                          <Link href="/contact" className="site-footer__link">
                            Contact
                          </Link>  
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
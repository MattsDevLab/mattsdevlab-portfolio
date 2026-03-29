import Link from 'next/link';

const navItems = [
    { href: '/', label: 'Home'},
    { href: '/about', label: 'About'},
    { href: '/work', label: 'Work'},
    { href: '/contact', label: 'Contact'},
];

export default function Header(){
    return(
        <header className="site-header">
            <div className="site-header__inner">
                <Link href="/" className="site-header__logo">
                    Matt<span className="site-header__logo-accent">sDevLab</span>    
                </Link>
                <nav aria-label="Primary" className="site-header__nav">
                    <ul className="site-header__menu">
                        {navItems.map((item) => (
                            <li key={item.href} className="site-header__menu-item">
                                <Link href={item.href} className="site-header__menu-link">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
          
        </header>
    )
}
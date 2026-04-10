import Link from 'next/link';
import Logo from '@/components/elements/Logo';

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
                <Logo />
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
import Link from 'next/link';
import Logo from '@/components/elements/Logo';

const navItems = [
    { href: '/work', label: 'Work'},
    { href: '/about', label: 'About'},
    { href: '/philosophy', label: 'Philosophy'},
    { href: '/contact', label: 'Contact'},
];

export default function Header(){
    return(
        <header className="site-header">
            <div className="inner__wrapper">
                <Logo />
                {/* <nav aria-label="Primary" className="site-header__nav">
                    <ul className="site-header__menu">
                        {navItems.map((item) => (
                            <li key={item.href} className="site-header__menu-item">
                                <Link href={item.href} className="site-header__menu-link">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav> */}
            </div>
          
        </header>
    )
}
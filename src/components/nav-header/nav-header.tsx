import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './nav-header.module.scss';

const LINKS = [
    { to: '/', label: 'Home', end: true },
    { to: '/work', label: 'Work' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'About' },
];

export const NavHeader = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={classNames(styles.root, { [styles.scrolled]: scrolled })}>
            <div className={styles.inner}>
                <NavLink to="/" className={styles.brand}>
                    Joshua Goodman
                    <span className={styles.brandRole}>CTO, Dialogica AI</span>
                </NavLink>
                <nav className={styles.nav}>
                    {LINKS.map(({ to, label, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) =>
                                classNames(styles.link, { [styles.active]: isActive })
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

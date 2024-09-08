import classNames from 'classnames';
import styles from './nav-header.module.scss';
import { NavLink } from "react-router-dom";

export interface NavHeaderProps {
    className?: string;
}

export const NavHeader = ({ className }: NavHeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divContent}>
                <span className={styles.spanClass}>
                    <h1 className={styles.nameH1}>Joshua Goodman</h1>
                    <div className={styles.div}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                classNames(styles.navLink, { [styles.activeLink]: isActive })
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/work"
                            className={({ isActive }) =>
                                classNames(styles.navLink, { [styles.activeLink]: isActive })
                            }
                        >
                            Work
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                classNames(styles.navLink, { [styles.activeLink]: isActive })
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                classNames(styles.navLink, { [styles.activeLink]: isActive })
                            }
                        >
                            About
                        </NavLink>
                    </div>
                </span>
            </div>
        </div>
    );
};

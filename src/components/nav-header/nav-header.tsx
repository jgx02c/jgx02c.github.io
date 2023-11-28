import classNames from 'classnames';
import styles from './nav-header.module.scss';

import { Link } from "react-router-dom";

export interface NavHeaderProps {
    className?: string;
}




/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavHeader = ({ className }: NavHeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divContent}>
                <span className={styles.spanClass}>
                    <h1 className={styles.nameH1}>Joshua Goodman</h1>
                    <div className={styles.div}>
                    <Link to="/">
                        <a href="/" className={styles.navLink}>Home</a>
                    </Link>
                    <Link to="/work">
                        <a href="/work" className={styles.navLink}>Work</a>
                    </Link>
                    <Link to="/projects">
                        <a href="/projects" className={styles.navLink}>Projects</a>
                    </Link>
                    <Link to="/contact">
                        <a href="/contact" className={styles.navLink}>About</a>
                    </Link>
                    </div>
                </span>
            </div>
        </div>
    );
};
import classNames from 'classnames';
import styles from './navbar.module.scss';
import Logo from '../../assets/jglogo.png';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divContent}>
                <span className={styles.spanClass}>
                    <img src={Logo} alt="" className={styles.imgNav} />
                    <div className={styles.div}>
                        <a href="/" className={styles.navLink}>
                            Projects
                        </a>
                        <a href="/" className={styles.navLink}>
                            Skills
                        </a>
                        <a href="/" className={styles.navLink}>
                            Education
                        </a>
                        <a href="/" className={styles.navLink}>
                            Contact
                        </a>
                    </div>
                </span>
            </div>
        </div>
    );
};

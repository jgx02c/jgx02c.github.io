import { Link } from 'react-router-dom';
import styles from './nav-footer.module.scss';

const RESUME_URL =
    'https://docs.google.com/document/d/1XNtqMK-W0VmqscDLTBxo_3hFB4gC1uKtl-cc3yRL9So/export?format=pdf';

export const NavFooter = () => {
    return (
        <footer className={styles.root}>
            <div className={styles.inner}>
                <div className={styles.cta}>
                    <h2 className={styles.headline}>
                        Let&rsquo;s build something{' '}
                        <em className="serif-accent">extraordinary.</em>
                    </h2>
                    <a href="mailto:joshua.goodman02@gmail.com" className={styles.emailLink}>
                        joshua.goodman02@gmail.com
                    </a>
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <span className={styles.columnTitle}>Site</span>
                        <Link to="/" className={styles.link}>Home</Link>
                        <Link to="/work" className={styles.link}>Work</Link>
                        <Link to="/projects" className={styles.link}>Projects</Link>
                        <Link to="/contact" className={styles.link}>About</Link>
                    </div>
                    <div className={styles.column}>
                        <span className={styles.columnTitle}>Elsewhere</span>
                        <a href="https://www.dialogicaai.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Dialogica AI</a>
                        <a href="https://github.com/jgx02c" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                        <a href="https://www.linkedin.com/in/joshuajgoodman" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                        <a href="https://www.instagram.com/jgx02/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>Resume</a>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <span>© {new Date().getFullYear()} Joshua Goodman</span>
                <span>Co-Founder &amp; CTO, Dialogica AI</span>
            </div>
        </footer>
    );
};

export default NavFooter;

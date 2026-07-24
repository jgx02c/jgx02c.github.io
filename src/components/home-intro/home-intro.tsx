import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './home-intro.module.scss';

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

export const HomeIntro = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section className={styles.root}>
            <motion.div
                className={styles.content}
                variants={reduceMotion ? undefined : container}
                initial="hidden"
                animate="show"
            >
                <motion.span variants={item} className="eyebrow">
                    Joshua Goodman · Co-Founder &amp; CTO, Dialogica AI
                </motion.span>

                <motion.h1 variants={item} className={styles.headline}>
                    I build products from first idea{' '}
                    <em className="serif-accent">to first customer.</em>
                </motion.h1>

                <motion.p variants={item} className={styles.sub}>
                    Today that&rsquo;s <a href="https://www.dialogicaai.com" target="_blank" rel="noopener noreferrer">Dialogica AI</a> —
                    a new class of legal cognition, built by lawyers, for lawyers.
                    Before that: two companies founded, a design patent filed, an npm
                    package published, and a decade of shipping across the stack.
                </motion.p>

                <motion.div variants={item} className={styles.actions}>
                    <a
                        href="https://www.dialogicaai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.primary}
                    >
                        See Dialogica
                    </a>
                    <Link to="/work" className={styles.secondary}>
                        The full story
                    </Link>
                </motion.div>

                <motion.div variants={item} className={styles.links}>
                    <a href="https://github.com/jgx02c" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <span aria-hidden="true">·</span>
                    <a href="https://www.linkedin.com/in/joshuajgoodman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <span aria-hidden="true">·</span>
                    <Link to="/contact">Contact</Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { Reveal } from '../reveal/reveal';
import styles from './founder-timeline.module.scss';

export type ChapterTint = 'gold' | 'silver' | 'maroon';

interface TimelineChapterProps {
    year: string;
    company: string;
    tint: ChapterTint;
    children: ReactNode;
}

/** One chapter of the founder arc — a sticky year on the rail, content on the right. */
export const TimelineChapter = ({ year, company, tint, children }: TimelineChapterProps) => (
    <section className={`${styles.chapter} ${styles[tint]}`}>
        <div className={styles.rail}>
            <div className={styles.railInner}>
                <span className={styles.node} aria-hidden="true" />
                <span className={styles.year}>{year}</span>
                <span className={styles.company}>{company}</span>
            </div>
        </div>
        <div className={styles.content}>{children}</div>
    </section>
);

interface FounderTimelineProps {
    children: ReactNode;
}

/** The founder arc: one continuous spine running through every chapter. */
export const FounderTimeline = ({ children }: FounderTimelineProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 55%', 'end 65%'],
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className={styles.section} id="ventures">
            <div className={styles.header}>
                <Reveal>
                    <span className="eyebrow">The arc · three companies</span>
                    <h2 className={styles.title}>
                        First idea to first customer,{' '}
                        <em className="serif-accent">three times over.</em>
                    </h2>
                    <p className={styles.intro}>
                        Working back from today: a venture-scale AI company, a patented
                        physical product before it, and the service business I started at
                        nineteen. Same instinct each time — take an idea all the way to a
                        paying customer.
                    </p>
                </Reveal>
            </div>

            <div className={styles.timeline} ref={ref}>
                <div className={styles.spine} aria-hidden="true">
                    {!reduceMotion && (
                        <motion.div className={styles.spineFill} style={{ scaleY }} />
                    )}
                </div>
                {children}
            </div>
        </div>
    );
};

export default FounderTimeline;

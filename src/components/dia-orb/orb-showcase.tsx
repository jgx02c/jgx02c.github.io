import { useRef, useState } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
    useReducedMotion,
    MotionValue,
} from 'framer-motion';
import styles from './orb-showcase.module.scss';
import { DiaOrb, OrbState } from './dia-orb';
import { MiniCard, CardVariant } from './mini-card';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const PROMPTS = [
    'Redline this MSA against our playbook…',
    'Summarize yesterday\u2019s deposition…',
    'Log 1.2 hours to the Meridian matter…',
    'Draft a reply to opposing counsel…',
];

interface Beat {
    state: OrbState;
    kicker: string;
    body: string;
}

const BEATS: Beat[] = [
    { state: 'idle', kicker: 'Meet Dia', body: 'It lives on the desktop, one keystroke away — always in the attorney\u2019s corner.' },
    { state: 'listening', kicker: 'You just talk to it', body: 'Speak naturally, like a colleague. Dia understands the matter and gets to work.' },
    { state: 'thinking', kicker: 'It reasons locally', body: 'Reading, reasoning, and drafting entirely on the machine. Privileged work never leaves.' },
    { state: 'responding', kicker: 'And hands back work product', body: 'Redlines, summaries, citations, logged time — real output, human-in-the-loop at every step.' },
];

/** progress → beat index */
const beatIndexFor = (v: number): number => {
    if (v >= 0.6) return 3;
    if (v >= 0.34) return 2;
    if (v >= 0.16) return 1;
    return 0;
};

interface CardConfig {
    variant: CardVariant;
    tx: number;
    ty: number;
    drift: number;
    a0: number;
}

// Fanned above and below the central bar (never beside it) so the wider
// orb bar and the caption stay clear. Anchored to the content column centre.
const CARDS: CardConfig[] = [
    // arc above the bar
    { variant: 'citations', tx: -285, ty: -182, drift: 46, a0: 0.34 },
    { variant: 'summary', tx: 0, ty: -206, drift: 64, a0: 0.42 },
    { variant: 'checklist', tx: 285, ty: -170, drift: 50, a0: 0.5 },
    // arc below the bar
    { variant: 'nextsteps', tx: -285, ty: 148, drift: 58, a0: 0.72 },
    { variant: 'billable', tx: 0, ty: 176, drift: 40, a0: 0.66 },
    { variant: 'redline', tx: 285, ty: 146, drift: 74, a0: 0.6 },
];

const ParallaxCard = ({ progress, cfg }: { progress: MotionValue<number>; cfg: CardConfig }) => {
    const opacity = useTransform(progress, [cfg.a0, cfg.a0 + 0.06, 1], [0, 1, 1]);
    const x = useTransform(progress, [cfg.a0, cfg.a0 + 0.12], [cfg.tx * 0.55, cfg.tx]);
    const y = useTransform(progress, [0, 1], [cfg.ty + cfg.drift, cfg.ty - cfg.drift]);
    const scale = useTransform(progress, [cfg.a0, cfg.a0 + 0.1], [0.88, 1]);

    return (
        <motion.div className={styles.cardPos} style={{ x, y, opacity, scale }}>
            <div className={styles.cardCenter}>
                <MiniCard variant={cfg.variant} />
            </div>
        </motion.div>
    );
};

/** Pinned parallax stage: scroll drives the orb + product cards spreading out. */
export const OrbShowcase = () => {
    const ref = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const canParallax = useMediaQuery('(min-width: 1000px)');
    const [index, setIndex] = useState(0);
    // Pick a random prompt once, at mount. Using a `useState` initializer keeps
    // the impurity out of the render body (satisfies `react-hooks/purity`).
    const [prompt] = useState(
        () => PROMPTS[Math.floor(Math.random() * PROMPTS.length)],
    );

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    // Derive the beat index from the SAME progress value that drives the
    // cards, so the caption and the card spread stay perfectly in sync.
    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        const next = beatIndexFor(v);
        setIndex((prev) => (prev === next ? prev : next));
    });

    if (reduceMotion || !canParallax) {
        return (
            <div className={styles.static}>
                <div className={styles.staticOrb}>
                    <DiaOrb state="responding" prompt={prompt} composed />
                </div>
                <div className={styles.staticCards}>
                    {CARDS.map((c) => (
                        <MiniCard key={c.variant} variant={c.variant} />
                    ))}
                </div>
                <div className={styles.staticCopy}>
                    {BEATS.map((b) => (
                        <div key={b.kicker} className={styles.staticBeat}>
                            <span className={styles.kicker}>{b.kicker}</span>
                            <p className={styles.body}>{b.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const active = BEATS[index];

    return (
        <div className={styles.scroller} ref={ref}>
            <div className={styles.sticky}>
                <div className={styles.stage}>
                    <div className={styles.cards} aria-hidden="true">
                        {CARDS.map((cfg) => (
                            <ParallaxCard key={cfg.variant} progress={scrollYProgress} cfg={cfg} />
                        ))}
                    </div>

                    <div className={styles.orbCenter}>
                        <DiaOrb state={active.state} prompt={prompt} />
                    </div>

                    <div className={styles.caption}>
                        <span className={styles.step}>
                            0{index + 1} <span aria-hidden="true">/ 0{BEATS.length}</span>
                        </span>
                        <div className={styles.beats}>
                            {BEATS.map((b, i) => (
                                <div key={b.kicker} className={styles.beat} data-active={i === index}>
                                    <span className={styles.kicker}>{b.kicker}</span>
                                    <p className={styles.body}>{b.body}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.progress} aria-hidden="true">
                            {BEATS.map((b, i) => (
                                <span key={b.kicker} data-on={i <= index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrbShowcase;

import { useMemo, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import styles from './orb-showcase.module.scss';
import { DiaOrb, OrbState } from './dia-orb';

interface Beat {
    state: OrbState;
    kicker: string;
    body: string;
}

const PROMPTS = [
    'Redline this MSA against our playbook…',
    'Summarize yesterday\u2019s deposition…',
    'Log 1.2 hours to the Meridian matter…',
    'Draft a reply to opposing counsel…',
];

const BEATS: Beat[] = [
    {
        state: 'idle',
        kicker: 'Meet Dia',
        body: 'It lives on the desktop, one keystroke away — always in the attorney\u2019s corner.',
    },
    {
        state: 'listening',
        kicker: 'You just talk to it',
        body: 'Speak naturally, like a colleague. Dia listens, understands the matter, and gets to work.',
    },
    {
        state: 'thinking',
        kicker: 'It reasons locally',
        body: 'Reading, reasoning, and drafting entirely on the machine. Privileged work never leaves.',
    },
    {
        state: 'responding',
        kicker: 'And hands back work product',
        body: 'Redlines, summaries, and logged time — real output, human-in-the-loop at every step.',
    },
];

/** Pinned 50/50 stage: scroll drives the orb through its real product states. */
export const OrbShowcase = () => {
    const ref = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const [index, setIndex] = useState(0);
    const prompt = useMemo(() => PROMPTS[Math.floor(Math.random() * PROMPTS.length)], []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        const next = Math.min(BEATS.length - 1, Math.floor(v * BEATS.length));
        setIndex((prev) => (prev === next ? prev : next));
    });

    if (reduceMotion) {
        return (
            <div className={styles.static}>
                <div className={styles.staticCopy}>
                    {BEATS.map((beat) => (
                        <div key={beat.kicker} className={styles.staticBeat}>
                            <span className={styles.kicker}>{beat.kicker}</span>
                            <p className={styles.body}>{beat.body}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.staticStage}>
                    <DiaOrb state="responding" prompt={prompt} composed />
                </div>
            </div>
        );
    }

    const active = BEATS[index];

    return (
        <div className={styles.scroller} ref={ref}>
            <div className={styles.sticky}>
                <div className={styles.grid}>
                    <div className={styles.copy}>
                        <span className={styles.step}>
                            0{index + 1} <span aria-hidden="true">/ 0{BEATS.length}</span>
                        </span>
                        <div className={styles.beats}>
                            {BEATS.map((beat, i) => (
                                <div
                                    key={beat.kicker}
                                    className={styles.beat}
                                    data-active={i === index}
                                    aria-hidden={i !== index}
                                >
                                    <span className={styles.kicker}>{beat.kicker}</span>
                                    <p className={styles.body}>{beat.body}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.progress} aria-hidden="true">
                            {BEATS.map((beat, i) => (
                                <span key={beat.kicker} data-on={i <= index} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.stageWrap}>
                        <DiaOrb state={active.state} prompt={prompt} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrbShowcase;

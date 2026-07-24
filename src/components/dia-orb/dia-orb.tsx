import styles from './dia-orb.module.scss';
import emblemWhite from '../../assets/Dialogica/brand/emblem-white.svg';

export type OrbState = 'idle' | 'listening' | 'thinking' | 'responding';

interface DiaOrbProps {
    state: OrbState;
    prompt: string;
    /** Render every layer at once (reduced-motion / static fallback). */
    composed?: boolean;
}

const RESPONSE = {
    title: 'Redline complete',
    rows: [
        '7 issues flagged against the playbook',
        'Liability cap redrafted to standard',
        '0.4 hrs logged to the Meridian matter',
    ],
};

/**
 * A pixel-faithful port of Dialogica's product orb (SolidJS → React).
 * Sphere gradient, shadows, emblem, and motion are lifted from
 * `sidecar/components/orb/bar/OrbBar.tsx` + `OrbBarStyles.tsx`.
 */
export const DiaOrb = ({ state, prompt, composed = false }: DiaOrbProps) => {
    const show = (...states: OrbState[]) => composed || states.includes(state);

    return (
        <div className={styles.stage}>
            {/* Prompt pill — appears once Dia is listening */}
            <div
                className={styles.pill}
                data-visible={show('listening', 'thinking', 'responding')}
            >
                <span className={styles.pillOrb} aria-hidden="true">
                    <img src={emblemWhite} alt="" />
                </span>
                {show('listening') && !composed ? (
                    <span key={prompt} className={styles.typed} style={{ ['--len' as string]: `${prompt.length}ch` }}>
                        {prompt}
                    </span>
                ) : (
                    <span className={styles.pillText}>{prompt}</span>
                )}
            </div>

            {/* The orb itself */}
            <div
                className={styles.orb}
                data-state={state}
                data-composed={composed}
            >
                <span className={styles.glow} aria-hidden="true" />
                <img src={emblemWhite} alt="Dia" className={styles.emblem} />
                {show('thinking') && <span className={styles.spinner} aria-hidden="true" />}
            </div>

            {/* Response card — Dia hands back work product */}
            <div
                className={styles.response}
                data-visible={show('responding')}
                role="status"
            >
                <span className={styles.responseTitle}>{RESPONSE.title}</span>
                <ul className={styles.responseList}>
                    {RESPONSE.rows.map((row) => (
                        <li key={row}>
                            <svg viewBox="0 0 16 16" className={styles.check} aria-hidden="true">
                                <path
                                    d="M13.5 4.5 6.5 11.5 3 8"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {row}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DiaOrb;

import styles from './dia-orb.module.scss';
import emblemWhite from '../../assets/Dialogica/brand/emblem-white.svg';

export type OrbState = 'idle' | 'listening' | 'thinking' | 'responding';

interface DiaOrbProps {
    state: OrbState;
    prompt: string;
    /** Force the open/typed-out state (reduced-motion / static fallback). */
    composed?: boolean;
}

/**
 * A pixel-faithful port of Dialogica's product orb bar (SolidJS → React).
 * Sphere gradient, shadows, emblem, pill and motion are lifted from
 * `sidecar/components/orb/bar/OrbBar.tsx` + `OrbBarStyles.tsx`.
 */
export const DiaOrb = ({ state, prompt, composed = false }: DiaOrbProps) => {
    const open = composed || state !== 'idle';

    return (
        <div className={styles.bar} data-open={open}>
            <div className={styles.orb} data-state={composed ? 'responding' : state}>
                <span className={styles.glow} aria-hidden="true" />
                <img src={emblemWhite} alt="Dia" className={styles.emblem} />
                {(composed ? false : state === 'thinking') && (
                    <span className={styles.spinner} aria-hidden="true" />
                )}
            </div>

            <div className={styles.pill} data-open={open}>
                {state === 'listening' && !composed ? (
                    <span
                        key={prompt}
                        className={styles.typed}
                        style={{ ['--len' as string]: `${prompt.length}ch` }}
                    >
                        {prompt}
                    </span>
                ) : (
                    <span className={styles.pillText}>{prompt}</span>
                )}
            </div>
        </div>
    );
};

export default DiaOrb;

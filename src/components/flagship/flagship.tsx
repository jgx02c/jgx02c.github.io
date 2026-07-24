import styles from './flagship.module.scss';
import { Reveal } from '../reveal/reveal';
import dialogicaLogo from '../../assets/Dialogica/dialogica_logo.png';
import dialogicaDemo from '../../assets/Dialogica/dialogica-demo.png';

const METRICS = [
    { value: '$400k', label: 'Recaptured value per lawyer, per year' },
    { value: '21.5%', label: 'Attorney productivity gain' },
    { value: '2+ hrs', label: 'Saved per attorney, daily' },
    { value: '75+', label: 'Firm integrations supported' },
];

export const Flagship = () => {
    return (
        <section className={styles.root}>
            <div className={styles.inner}>
                <Reveal>
                    <span className="eyebrow">Flagship · 2025 — Present</span>
                    <div className={styles.header}>
                        <img src={dialogicaLogo} alt="Dialogica AI" className={styles.logo} />
                        <h2 className={styles.headline}>
                            A new class of <em className="serif-accent">legal cognition.</em>
                        </h2>
                    </div>
                    <p className={styles.description}>
                        Dialogica (&ldquo;Dia&rdquo;) is a voice-native assistant that manages a
                        law firm&rsquo;s entire workflow — calendar, redlining, email, documents,
                        billable hours — built by lawyers, for lawyers, to empower not replace.
                        As co-founder &amp; CTO, I own the architecture end to end: local-first
                        AI processing, end-to-end encryption, and a desktop-native experience
                        trusted by attorneys from the AmLaw100 and beyond.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className={styles.metrics}>
                        {METRICS.map(({ value, label }) => (
                            <div key={label} className={styles.metric}>
                                <span className={styles.metricValue}>{value}</span>
                                <span className={styles.metricLabel}>{label}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.15}>
                    <a
                        href="https://www.dialogicaai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.screenshotLink}
                    >
                        <img
                            src={dialogicaDemo}
                            alt="The Dialogica product"
                            className={styles.screenshot}
                            loading="lazy"
                        />
                        <span className={styles.screenshotCta}>Visit dialogicaai.com →</span>
                    </a>
                </Reveal>
            </div>
        </section>
    );
};

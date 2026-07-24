import styles from './dia.module.scss';
import { Reveal } from '../reveal/reveal';
import diaEmblem from '../../assets/Dialogica/brand/emblem-maroon.svg';
import diaHero from '../../assets/Dialogica/dia-hero.png';
import clio from '../../assets/Dialogica/integrations/clio.png';
import imanage from '../../assets/Dialogica/integrations/iManage.png';
import ms365 from '../../assets/Dialogica/integrations/ms365.png';
import outlook from '../../assets/Dialogica/integrations/outlook.png';
import word from '../../assets/Dialogica/integrations/word.png';
import google from '../../assets/Dialogica/integrations/google.png';
import intapp from '../../assets/Dialogica/integrations/intapp.png';
import aderant from '../../assets/Dialogica/integrations/aderant.png';

const PILLARS = [
    { title: 'Intentionally designed.', body: 'Native to your desktop, always in your corner.' },
    { title: 'Ready at your command.', body: 'Speak naturally — Dia listens and acts.' },
    { title: 'Effortlessly aware.', body: 'Context from your matters, always current.' },
    { title: 'Automatically integrated.', body: 'Plugged into the tools your firm already runs.' },
    { title: 'Complete control.', body: 'Human-in-the-loop by design, at every step.' },
];

const CAPABILITIES = [
    { name: 'Voice & Text', body: 'Speak naturally, Dia handles it.' },
    { name: 'Calendar', body: 'Your calendar, always current.' },
    { name: 'Redlining', body: 'Contracts reviewed, issues identified.' },
    { name: 'Email', body: 'Drafts composed, inbox managed.' },
    { name: 'Documents', body: 'Precedents pulled, documents filed.' },
    { name: 'Billable Hours', body: 'Speak plainly, billed precisely.' },
    { name: 'To Do', body: 'Tasks captured, deadlines tracked.' },
];

const METRICS = [
    { value: '$400k', label: 'Recaptured value per lawyer, yearly' },
    { value: '21.5%', label: 'Attorney productivity gain' },
    { value: '2+ hrs', label: 'Saved per attorney, daily' },
    { value: '75+', label: 'Firm integrations supported' },
];

const INTEGRATIONS = [
    { src: clio, alt: 'Clio' },
    { src: imanage, alt: 'iManage' },
    { src: ms365, alt: 'Microsoft 365' },
    { src: outlook, alt: 'Outlook' },
    { src: word, alt: 'Microsoft Word' },
    { src: google, alt: 'Google Workspace' },
    { src: intapp, alt: 'Intapp' },
    { src: aderant, alt: 'Aderant' },
];

export const Dia = () => {
    return (
        <section className={styles.root} id="dia">
            <div className={styles.inner}>
                <Reveal>
                    <span className="eyebrow">Flagship · Co-Founder &amp; CTO · 2025 — Present</span>
                    <div className={styles.lockup}>
                        <img src={diaEmblem} alt="" className={styles.emblem} />
                        <span className={styles.wordmark}>Dialogica</span>
                    </div>
                    <h2 className={styles.headline}>
                        A new class of <em className="serif-accent">legal cognition.</em>
                    </h2>
                    <p className={styles.lead}>
                        Meet Dia — a voice-native assistant that manages a law firm&rsquo;s entire
                        workflow, built by lawyers, for lawyers, to empower not replace. As
                        co-founder &amp; CTO I own the architecture end to end: local-first AI
                        processing, end-to-end encryption, and a desktop-native experience trusted
                        by attorneys from the AmLaw100 and beyond.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <a
                        href="https://www.dialogicaai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.heroLink}
                    >
                        <img src={diaHero} alt="The Dialogica product" className={styles.hero} loading="lazy" />
                        <span className={styles.heroCta}>Visit dialogicaai.com →</span>
                    </a>
                </Reveal>

                <div className={styles.pillars}>
                    {PILLARS.map((pillar, i) => (
                        <Reveal key={pillar.title} delay={i * 0.05}>
                            <div className={styles.pillar}>
                                <span className={styles.pillarIndex}>0{i + 1}</span>
                                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                                <p className={styles.pillarBody}>{pillar.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div className={styles.subhead}>
                        <span className="eyebrow">Core capabilities</span>
                        <h3 className={styles.subheadTitle}>
                            Built for legal <em className="serif-accent">excellence.</em>
                        </h3>
                    </div>
                </Reveal>

                <div className={styles.capabilities}>
                    {CAPABILITIES.map((cap, i) => (
                        <Reveal key={cap.name} delay={(i % 4) * 0.05}>
                            <div className={styles.capability}>
                                <h4 className={styles.capName}>{cap.name}</h4>
                                <p className={styles.capBody}>{cap.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div className={styles.metrics}>
                        {METRICS.map((metric) => (
                            <div key={metric.label} className={styles.metric}>
                                <span className={styles.metricValue}>{metric.value}</span>
                                <span className={styles.metricLabel}>{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal>
                    <div className={styles.integrations}>
                        <span className={styles.integrationsLabel}>
                            Plugged into the firm&rsquo;s stack
                        </span>
                        <div className={styles.integrationsRow}>
                            {INTEGRATIONS.map((int) => (
                                <img
                                    key={int.alt}
                                    src={int.src}
                                    alt={int.alt}
                                    title={int.alt}
                                    className={styles.integrationLogo}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Dia;

import { Reveal } from '../reveal/reveal';
import { OrbShowcase } from '../dia-orb/orb-showcase';
import chapter from '../founder-timeline/chapter.module.scss';
import styles from './dia.module.scss';
import diaEmblem from '../../assets/Dialogica/brand/emblem-maroon.svg';
import onboarding from '../../assets/Dialogica/video/dia-onboarding.mp4';
import clio from '../../assets/Dialogica/integrations/clio.png';
import imanage from '../../assets/Dialogica/integrations/iManage.png';
import ms365 from '../../assets/Dialogica/integrations/ms365.png';
import outlook from '../../assets/Dialogica/integrations/outlook.png';
import word from '../../assets/Dialogica/integrations/word.png';
import google from '../../assets/Dialogica/integrations/google.png';
import intapp from '../../assets/Dialogica/integrations/intapp.png';
import aderant from '../../assets/Dialogica/integrations/aderant.png';

const CAPABILITIES = [
    { name: 'Voice & Text', body: 'Speak naturally, Dia handles it.' },
    { name: 'Redlining', body: 'Contracts reviewed, issues identified.' },
    { name: 'Documents', body: 'Precedents pulled, documents filed.' },
    { name: 'Billable Hours', body: 'Speak plainly, billed precisely.' },
    { name: 'Email', body: 'Drafts composed, inbox managed.' },
    { name: 'Calendar', body: 'Deadlines tracked, always current.' },
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
        <div>
            <Reveal>
                <div className={chapter.lockup}>
                    <img src={diaEmblem} alt="" className={styles.emblem} />
                    <span className={styles.wordmark}>Dialogica</span>
                </div>
                <h3 className={chapter.statement}>
                    Voice-native AI that thinks{' '}
                    <em>alongside attorneys.</em>
                </h3>
                <p className={chapter.lead}>
                    The flagship. As co-founder &amp; CTO I own the architecture end to end:
                    a desktop-native assistant that runs a firm&rsquo;s entire workflow —
                    local-first AI processing and end-to-end encryption, so privileged work
                    never leaves the machine. Trusted by attorneys from the AmLaw100 and
                    beyond.
                </p>
            </Reveal>

            <OrbShowcase />

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
                    <Reveal key={cap.name} delay={(i % 3) * 0.05}>
                        <div className={styles.capability}>
                            <h4 className={styles.capName}>{cap.name}</h4>
                            <p className={styles.capBody}>{cap.body}</p>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Reveal>
                <div className={styles.videoFrame}>
                    <video
                        src={onboarding}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        aria-label="Dia in motion"
                    />
                </div>
            </Reveal>

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

            <Reveal>
                <a
                    href="https://www.dialogicaai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={chapter.link}
                >
                    Visit dialogicaai.com →
                </a>
            </Reveal>
        </div>
    );
};

export default Dia;

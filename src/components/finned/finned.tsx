import styles from './finned.module.scss';
import { Reveal } from '../reveal/reveal';
import finnedLogo from '../../assets/finned/finned_logo.png';
import adShot from '../../assets/finned/web/ad.jpg';
import render from '../../assets/finned/web/render.jpg';
import mug from '../../assets/finned/web/mug.jpg';

interface Milestone {
    phase: string;
    title: string;
    body: string;
    image?: string;
    imageAlt?: string;
}

const MILESTONES: Milestone[] = [
    {
        phase: 'The idea · 2022',
        title: 'An air-cooled obsession.',
        body: 'Years spent working on air-cooled VWs and Porsches turned into one question: what if a coffee mug were machined like an engine cylinder? Finned was born from a love of the elegance and simplicity of air-cooled design.',
    },
    {
        phase: 'Design & prototype',
        title: 'Machined, not molded.',
        body: 'I modeled the cylinder body in CAD — real cooling fins, a nickel-plated finish, a cast-style handle — and iterated through prototypes until it looked and felt like it came straight off an engine.',
        image: render,
        imageAlt: 'Nickel-plated Finned cylinder mug render',
    },
    {
        phase: 'Patent · Jul 2023',
        title: 'Protected by design.',
        body: 'Filed the Finned Cylinder Mug design patent (US 29/879,585) — turning the idea into defensible intellectual property.',
    },
    {
        phase: 'Brand & storefront',
        title: 'A passion worth sharing.',
        body: 'Built the full brand identity and a storefront with original photography and content, closing a 13.5% conversion rate on the launch collection.',
        image: mug,
        imageAlt: 'Finned cylinder coffee mug',
    },
    {
        phase: 'To customers · Present',
        title: 'On desks and in cup holders.',
        body: 'Shipped and distributed to retailers and enthusiasts worldwide — a lifetime-warrantied line from the cylinder mug to the cup-holder adapter, backed by international fulfillment.',
        image: adShot,
        imageAlt: 'Finned mug — unmistakably iconic',
    },
];

export const Finned = () => {
    return (
        <section className={styles.root} id="finned">
            <div className={styles.inner}>
                <Reveal>
                    <span className="eyebrow">Venture · Founder · 2022 — Present</span>
                    <img src={finnedLogo} alt="Finned" className={styles.logo} />
                    <h2 className={styles.headline}>
                        Idea to customer, <em className="serif-accent">machined by hand.</em>
                    </h2>
                    <p className={styles.lead}>
                        Finned is an automotive-inspired product brand I founded and built end to
                        end — concept, industrial design, patent, brand, and ecommerce. Proof that
                        &ldquo;first idea to first customer&rdquo; isn&rsquo;t only about software.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <a
                        href="https://finnedmugs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.heroLink}
                    >
                        <img src={adShot} alt="Finned — unmistakably iconic" className={styles.hero} loading="lazy" />
                        <span className={styles.heroCta}>Visit finnedmugs.com →</span>
                    </a>
                </Reveal>

                <div className={styles.timeline}>
                    {MILESTONES.map((milestone) => (
                        <Reveal key={milestone.phase}>
                            <div className={styles.item}>
                                <span className={styles.marker} aria-hidden="true" />
                                <div className={styles.card}>
                                    <div className={styles.text}>
                                        <span className={styles.phase}>{milestone.phase}</span>
                                        <h3 className={styles.itemTitle}>{milestone.title}</h3>
                                        <p className={styles.body}>{milestone.body}</p>
                                    </div>
                                    {milestone.image && (
                                        <div className={styles.media}>
                                            <img src={milestone.image} alt={milestone.imageAlt} loading="lazy" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Finned;

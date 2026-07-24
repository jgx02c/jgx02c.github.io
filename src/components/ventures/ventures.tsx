import styles from './ventures.module.scss';
import { Reveal } from '../reveal/reveal';
import finnedLogo from '../../assets/finned/finned_logo.png';
import finnedMug from '../../assets/finned/mug.png';
import optionalityLogo from '../../assets/optionality_logo.png';
import optionalityArt from '../../assets/logos/artboard.png';

interface Venture {
    name: string;
    logo: string;
    image: string;
    role: string;
    tagline: string;
    description: string;
    link: string;
    proof: string;
}

const VENTURES: Venture[] = [
    {
        name: 'Finned',
        logo: finnedLogo,
        image: finnedMug,
        role: 'Founder',
        tagline: 'Passion worth sharing.',
        description:
            'An automotive-inspired lifestyle brand — product design, brand, ecommerce, and distribution to retail, all built from zero.',
        link: 'https://www.finnedmugs.com',
        proof: 'Design patent filed · 29/879,585',
    },
    {
        name: 'Optionality',
        logo: optionalityLogo,
        image: optionalityArt,
        role: 'Founder & Technical Director',
        tagline: 'Business services & technology solutions.',
        description:
            'A consultancy serving restaurants, retailers, and fitness brands — web platforms, digital marketing, and technical strategy.',
        link: 'https://www.optionality.biz',
        proof: 'Founded at 19 · four years of clients',
    },
];

export const Ventures = () => {
    return (
        <section className={styles.root}>
            <div className={styles.inner}>
                <Reveal>
                    <span className="eyebrow">The founder track</span>
                    <h2 className={styles.headline}>
                        Companies built <em className="serif-accent">before Dialogica.</em>
                    </h2>
                </Reveal>

                <div className={styles.grid}>
                    {VENTURES.map((venture, i) => (
                        <Reveal key={venture.name} delay={i * 0.08}>
                            <a
                                href={venture.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.card}
                            >
                                <div className={styles.imageWrap}>
                                    <img src={venture.image} alt={venture.name} loading="lazy" />
                                </div>
                                <div className={styles.body}>
                                    <img
                                        src={venture.logo}
                                        alt={`${venture.name} logo`}
                                        className={styles.logo}
                                    />
                                    <span className={styles.role}>{venture.role}</span>
                                    <p className={styles.tagline}>{venture.tagline}</p>
                                    <p className={styles.description}>{venture.description}</p>
                                    <span className={styles.proof}>{venture.proof}</span>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

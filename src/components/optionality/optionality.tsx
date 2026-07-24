import { Reveal } from '../reveal/reveal';
import chapter from '../founder-timeline/chapter.module.scss';
import styles from './optionality.module.scss';
import siteShot from '../../assets/optionality/site-full.png';
import gear from '../../assets/logos/artboard.png';

const SERVICES = [
    'Web Design',
    'Social Media Marketing',
    'Technology',
    'Content Creation',
    'Consulting',
    'Accessibility',
];

export const Optionality = () => {
    return (
        <div>
            <Reveal>
                <div className={chapter.lockup}>
                    <img src={gear} alt="" className={styles.gear} />
                    <span className={styles.wordmark}>Optionality</span>
                </div>
                <h3 className={chapter.statement}>
                    Founded at nineteen to serve the businesses{' '}
                    <em>nobody else would.</em>
                </h3>
                <p className={chapter.lead}>
                    My first company. Started in 2021 to serve my local community with{' '}
                    <span className={chapter.quote}>
                        &ldquo;a chance for every business, no matter how small&rdquo;
                    </span>{' '}
                    — full-service web, brand, and technology for restaurants, online
                    retailers, and fitness brands across the San Gabriel Valley. It taught
                    me the whole loop: find a customer, ship for them, run the business.
                </p>
            </Reveal>

            <Reveal delay={0.05}>
                <a
                    href="https://optionality.biz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={chapter.media}
                >
                    <img src={siteShot} alt="The Optionality website" loading="lazy" />
                    <span className={chapter.mediaCta}>Visit optionality.biz →</span>
                </a>
            </Reveal>

            <Reveal delay={0.05}>
                <div className={chapter.chips}>
                    {SERVICES.map((service) => (
                        <span key={service} className={chapter.chip}>
                            {service}
                        </span>
                    ))}
                </div>
            </Reveal>

            <Reveal delay={0.05}>
                <div className={chapter.milestones}>
                    <div className={chapter.milestone}>
                        <span className={chapter.milestonePhase}>Founded · 2021</span>
                        <div className={chapter.milestoneBody}>
                            <h4 className={chapter.milestoneTitle}>A business, at nineteen.</h4>
                            <p className={chapter.milestoneText}>
                                Turned &ldquo;I can build websites&rdquo; into a registered
                                company serving the vibrant business communities of San Dimas,
                                Glendora, La Verne, and Covina.
                            </p>
                        </div>
                    </div>
                    <div className={chapter.milestone}>
                        <span className={chapter.milestonePhase}>The offer</span>
                        <div className={chapter.milestoneBody}>
                            <h4 className={chapter.milestoneTitle}>Six service lines.</h4>
                            <p className={chapter.milestoneText}>
                                Web design with load-time animations, social media marketing,
                                content and product photography, technology, consulting, and
                                accessibility — everything a small business needs to show up.
                            </p>
                        </div>
                    </div>
                    <div className={chapter.milestone}>
                        <span className={chapter.milestonePhase}>The customers</span>
                        <div className={chapter.milestoneBody}>
                            <h4 className={chapter.milestoneTitle}>Real clients, real results.</h4>
                            <p className={chapter.milestoneText}>
                                Local restaurants, online retailers, and fitness brands — menu
                                creation with online ordering, brand development, and advertising
                                campaigns that shipped.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal delay={0.05}>
                <a
                    href="https://optionality.biz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={chapter.link}
                >
                    Explore Optionality →
                </a>
            </Reveal>
        </div>
    );
};

export default Optionality;

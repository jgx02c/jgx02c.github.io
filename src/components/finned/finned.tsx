import { Reveal } from '../reveal/reveal';
import chapter from '../founder-timeline/chapter.module.scss';
import styles from './finned.module.scss';
import finnedLogo from '../../assets/finned/finned_logo.png';
import adShot from '../../assets/finned/web/ad.jpg';
import render from '../../assets/finned/web/render.jpg';
import mug from '../../assets/finned/web/mug.jpg';

export const Finned = () => {
    return (
        <div>
            <Reveal>
                <div className={chapter.lockup}>
                    <img src={finnedLogo} alt="Finned" className={styles.logo} />
                </div>
                <h3 className={chapter.statement}>
                    A coffee mug precision-machined like the{' '}
                    <em>engine cylinders that inspired it.</em>
                </h3>
                <p className={chapter.lead}>
                    From selling services to shipping a physical product. Finned is an
                    automotive-inspired brand I founded and built end to end — concept,
                    industrial design in CAD, a filed design patent, brand, and ecommerce.
                    Proof that &ldquo;first idea to first customer&rdquo; isn&rsquo;t only
                    about software.
                </p>
            </Reveal>

            <Reveal delay={0.05}>
                <a
                    href="https://finnedmugs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={chapter.media}
                >
                    <img src={adShot} alt="Finned cylinder mug — unmistakably iconic" loading="lazy" />
                    <span className={chapter.mediaCta}>Visit finnedmugs.com →</span>
                </a>
            </Reveal>

            <Reveal delay={0.05}>
                <div className={styles.gallery}>
                    <figure className={styles.shot}>
                        <img src={render} alt="Nickel-plated Finned cylinder mug CAD render" loading="lazy" />
                        <figcaption>Modeled in CAD, down to the cooling fins.</figcaption>
                    </figure>
                    <figure className={styles.shot}>
                        <img src={mug} alt="Finned cylinder coffee mug" loading="lazy" />
                        <figcaption>Machined, anodized, ready for the shelf.</figcaption>
                    </figure>
                </div>
            </Reveal>

            <Reveal delay={0.05}>
                <div className={chapter.milestones}>
                    <div className={chapter.milestone}>
                        <span className={chapter.milestonePhase}>The idea · Jan 2023</span>
                        <div className={chapter.milestoneBody}>
                            <h4 className={chapter.milestoneTitle}>An air-cooled obsession.</h4>
                            <p className={chapter.milestoneText}>
                                Years around air-cooled VWs and Porsches became one question:
                                what if a coffee mug were built like an engine cylinder?
                            </p>
                        </div>
                    </div>
                    <div className={chapter.milestone}>
                        <span className={chapter.milestonePhase}>Design &amp; prototype</span>
                        <div className={chapter.milestoneBody}>
                            <h4 className={chapter.milestoneTitle}>Machined, not molded.</h4>
                            <p className={chapter.milestoneText}>
                                Modeled the cylinder body in CAD — real cooling fins, a
                                nickel-plated finish, a cast-style handle — and precision-machined
                                prototypes until it came off like a real engine part.
                            </p>
                        </div>
                    </div>
                    <div className={chapter.milestone}>
                        <span className={chapter.milestonePhase}>Patent · Jul 2023</span>
                        <div className={chapter.milestoneBody}>
                            <h4 className={chapter.milestoneTitle}>Protected by design.</h4>
                            <p className={chapter.milestoneText}>
                                Filed the Finned Cylinder Mug design patent (US&nbsp;29/879,585)
                                on July&nbsp;10, 2023 — turning the idea into defensible IP.
                            </p>
                        </div>
                    </div>
                    <div className={chapter.milestone}>
                        <span className={chapter.milestonePhase}>Brand &amp; storefront</span>
                        <div className={chapter.milestoneBody}>
                            <h4 className={chapter.milestoneTitle}>A passion worth sharing.</h4>
                            <p className={chapter.milestoneText}>
                                Built the full brand identity and a Shopify storefront with
                                original photography, closing a 13.5% conversion on the launch
                                collection.
                            </p>
                        </div>
                    </div>
                    <div className={chapter.milestone}>
                        <span className={chapter.milestonePhase}>To customers</span>
                        <div className={chapter.milestoneBody}>
                            <h4 className={chapter.milestoneTitle}>On desks and in cup holders.</h4>
                            <p className={chapter.milestoneText}>
                                Sold and distributed to retailers and enthusiasts — a
                                lifetime-warrantied line from the cylinder mug to the cup-holder
                                adapter, with international fulfillment.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal delay={0.05}>
                <a
                    href="https://finnedmugs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={chapter.link}
                >
                    Shop Finned →
                </a>
            </Reveal>
        </div>
    );
};

export default Finned;

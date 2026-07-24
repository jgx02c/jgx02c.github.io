import { Link } from 'react-router-dom';
import styles from './selected-projects.module.scss';
import { Reveal } from '../reveal/reveal';
import projectsData from '../../data/projects.json';

const FEATURED_IDS = [3, 4, 1]; // Vaultwrap, React Cursive Handwriting, SEO Web Scraper

export const SelectedProjects = () => {
    const featured = FEATURED_IDS.map((id) =>
        projectsData.find((p) => p.id === id)
    ).filter((p): p is (typeof projectsData)[number] => Boolean(p));

    return (
        <section className={styles.root}>
            <div className={styles.inner}>
                <Reveal>
                    <span className="eyebrow">Selected projects</span>
                    <h2 className={styles.headline}>
                        Range, in <em className="serif-accent">practice.</em>
                    </h2>
                </Reveal>

                <div className={styles.list}>
                    {featured.map((project, i) => (
                        <Reveal key={project.id} delay={i * 0.06}>
                            <a
                                href={project.codeLink || project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.row}
                            >
                                <div className={styles.rowMain}>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.description}>{project.description}</p>
                                </div>
                                <div className={styles.tags}>
                                    {project.madeWith
                                        .filter((tech) => tech !== 'blank')
                                        .slice(0, 4)
                                        .map((tech) => (
                                            <span key={tech} className={styles.tag}>
                                                {tech}
                                            </span>
                                        ))}
                                </div>
                                <span className={styles.arrow} aria-hidden="true">→</span>
                            </a>
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <Link to="/projects" className={styles.allLink}>
                        All projects
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

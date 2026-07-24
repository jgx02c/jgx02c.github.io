import classNames from 'classnames';
import styles from './timeline-item.module.scss';
import { Reveal } from '../reveal/reveal';
import { WorkHistoryItem } from '../timeline/timeline';

export interface TimelineItemProps {
    item: WorkHistoryItem;
    index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
    const { companyName, role, period, description, technologies, achievements, logo } = item;
    const isCurrent = index === 0;

    return (
        <div className={classNames(styles.item, { [styles.current]: isCurrent })}>
            <span className={styles.marker} aria-hidden="true" />
            <Reveal>
                <article className={styles.card}>
                    <header className={styles.header}>
                        {logo && (
                            <img
                                src={logo}
                                alt={`${companyName} logo`}
                                className={styles.logo}
                                loading="lazy"
                            />
                        )}
                        <div>
                            <h3 className={styles.role}>{role}</h3>
                            <div className={styles.meta}>
                                <span className={styles.company}>{companyName}</span>
                                <span className={styles.period}>{period}</span>
                            </div>
                        </div>
                    </header>

                    <p className={styles.description}>{description}</p>

                    {achievements.length > 0 && (
                        <ul className={styles.achievements}>
                            {achievements.map((achievement) => (
                                <li key={achievement}>{achievement}</li>
                            ))}
                        </ul>
                    )}

                    {technologies.length > 0 && (
                        <div className={styles.tags}>
                            {technologies.map((tech) => (
                                <span key={tech} className={styles.tag}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </article>
            </Reveal>
        </div>
    );
};

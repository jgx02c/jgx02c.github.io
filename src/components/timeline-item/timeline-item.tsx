import classNames from 'classnames';
import styles from './timeline-item.module.scss';
import { WorkHistoryItem } from '../timeline/timeline';

export interface TimelineItemProps {
    className?: string;
    item: WorkHistoryItem;
    position: 'left' | 'right';
}

export const TimelineItem = ({ className, item, position }: TimelineItemProps) => {
    if (!item || typeof item !== 'object') {
        console.error('TimelineItem: invalid item prop');
        return null;
    }

    const {
        companyName,
        role,
        period,
        description,
        achievements,
        logo
    } = item;

    if (!companyName || !role || !period || !description) {
        console.error('TimelineItem: missing required item properties');
        return null;
    }

    return (
        <div 
            className={classNames(
                styles.timelineItem, 
                styles[position],
                className
            )}
        >
            <div className={styles.timelinePoint}></div>
            
            <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                    {logo && (
                        <div className={styles.logoContainer}>
                            <img src={logo} alt={`${companyName} logo`} className={styles.logo} />
                        </div>
                    )}
                    <div className={styles.headerText}>
                        <h3 className={styles.role}>{role}</h3>
                        <h4 className={styles.company}>{companyName}</h4>
                        <span className={styles.period}>{period}</span>
                    </div>
                </div>
                
                <p className={styles.description}>{description}</p>
                
                {achievements && Array.isArray(achievements) && achievements.length > 0 && (
                    <div className={styles.achievements}>
                        <h5 className={styles.sectionTitle}>Key Achievements</h5>
                        <ul className={styles.achievementList}>
                            {achievements.map((achievement, index) => (
                                <li key={index} className={styles.achievementItem}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}; 
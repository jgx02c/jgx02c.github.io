import React from 'react';
import styles from './timeline.module.scss';

export interface TimelineItemData {
    id: number;
    title: string;
    organization: string;
    description: string;
    date: string;
    type: string;
}

interface TimelineProps {
    items: TimelineItemData[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className={styles.timelineContainer}>
            <div className={styles.timelineLine}></div>
            {items.map((item) => (
                <div key={item.id} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}></div>
                    <div className={styles.timelineContent}>
                        <h3>{item.organization}</h3>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.type}</p>
                        <span>{item.date}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './timeline.module.scss';
import { TimelineItem } from '../timeline-item/timeline-item';

export interface WorkHistoryItem {
    id: number;
    companyName: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
    achievements: string[];
    logo: string;
}

export interface TimelineProps {
    className?: string;
    items: WorkHistoryItem[];
}

export const Timeline = ({ className, items }: TimelineProps) => {
    const timelineRef = useRef<HTMLDivElement>(null);

    if (!items || !Array.isArray(items)) {
        console.error('Timeline: items prop is invalid');
        return null;
    }

    return (
        <div 
            ref={timelineRef}
            className={classNames(styles.timeline, className)}
        >
            <div className={styles.timelineLine}>
                <div className={styles.timelineStart}></div>
                <div className={styles.timelineEnd}></div>
            </div>
            
            <div className={styles.timelineItems}>
                {items.map((item, index) => {
                    if (!item || typeof item !== 'object') {
                        console.error('Timeline: invalid item at index', index);
                        return null;
                    }
                    
                    return (
                        <TimelineItem 
                            key={item.id}
                            item={item}
                            position={index % 2 === 0 ? 'left' : 'right'} 
                            className={index % 2 === 0 ? styles.leftItem : styles.rightItem}
                        />
                    );
                })}
            </div>
        </div>
    );
};

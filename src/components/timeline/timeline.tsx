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
    items: WorkHistoryItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
    return (
        <div className={styles.timeline}>
            {items.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
            ))}
        </div>
    );
};

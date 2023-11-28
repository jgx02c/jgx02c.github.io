import classNames from 'classnames';
import styles from './timeline.module.scss';
import { TimelineComonentRight } from '../timeline-comonent-right/timeline-comonent-right';

export interface TimelineProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const Timeline = ({ className }: TimelineProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.divCenter}>
            <span className={styles.spanTimeline}><div className={styles.divLeftTimeline}>
                <TimelineComonentRight />
            </div>
                <div className={styles.centerLine} />
                <div className={styles.divTimelineRight}>
                    <TimelineComonentRight />
                </div>
            </span>
        </div></div>;
};

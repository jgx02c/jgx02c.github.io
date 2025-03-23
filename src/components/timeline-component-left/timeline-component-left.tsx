import classNames from 'classnames';
import styles from './timeline-component-left.module.scss';

export interface TimelineComponentLeftProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TimelineComponentLeft = ({ className }: TimelineComponentLeftProps) => {
    return <div className={classNames(styles.root, className)}>TimelineComponentLeft</div>;
};

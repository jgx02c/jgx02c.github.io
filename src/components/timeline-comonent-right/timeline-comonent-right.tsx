import classNames from 'classnames';
import styles from './timeline-comonent-right.module.scss';

export interface TimelineComonentRightProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TimelineComonentRight = ({ className }: TimelineComonentRightProps) => {
    return <div className={classNames(styles.root, className)}>
        <div>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>This is a paragraph.</p></div>
    </div>;
};

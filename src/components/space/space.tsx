import classNames from 'classnames';
import styles from './space.module.scss';

export interface SpaceProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Space = ({ className }: SpaceProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.space} />
        </div>
    );
};

import classNames from 'classnames';
import styles from './line.module.scss';

export interface LineProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Line = ({ className }: LineProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.divLine} />
    </div>;
};

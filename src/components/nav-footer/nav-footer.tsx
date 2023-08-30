import classNames from 'classnames';
import styles from './nav-footer.module.scss';

export interface NavFooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavFooter = ({ className }: NavFooterProps) => {
    return <div className={classNames(styles.root, className)}>NavFooter</div>;
};

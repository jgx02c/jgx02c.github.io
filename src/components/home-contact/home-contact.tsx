import classNames from 'classnames';
import styles from './home-contact.module.scss';

export interface HomeContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomeContact = ({ className }: HomeContactProps) => {
    return <div className={classNames(styles.root, className)}>HomeContact</div>;
};

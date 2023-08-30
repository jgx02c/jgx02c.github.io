import classNames from 'classnames';
import styles from './home-education.module.scss';

export interface HomeEducationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomeEducation = ({ className }: HomeEducationProps) => {
    return <div className={classNames(styles.root, className)}>HomeEducation</div>;
};

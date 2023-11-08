import classNames from 'classnames';
import styles from './projects-intro.module.scss';

export interface ProjectsIntroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProjectsIntro = ({ className }: ProjectsIntroProps) => {
    return <div className={classNames(styles.root, className)}>ProjectsIntro</div>;
};

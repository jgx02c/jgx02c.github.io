import classNames from 'classnames';
import styles from './education.module.scss';

export interface EducationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Education = ({ className }: EducationProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.myEduClass}>My Education</h1>
            <div className={styles.eduClass}>
                <div />
                <span className={styles.spanClass}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles.eduLogo}
                    />
                    <p>
                        This is a paragraph.
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </p>
                </span>
            </div>
        </div>
    );
};

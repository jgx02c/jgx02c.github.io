import classNames from 'classnames';
import styles from './intro.module.scss';

export interface IntroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Intro = ({ className }: IntroProps) => {
    return (
        <div className={classNames(styles.root, className, styles.intro)}>
            <div>
                <h2 className={classNames(styles.intro, styles.h2title)}>
                    Hi, I am Joshua Goodman
                </h2>
                <h3 className={styles.h3subtitle}>Software Engineer and Creative Designer</h3>
            </div>
            <p className={styles.textparagraph}>
                I am currentally working as a software developer at <br></br>
                Optionality. I spend my days working on projects with<br></br> TypeScript, React.js,
                Node.js, C# and AWS <br></br>
            </p>
            <span className={styles.root}>
                <button className={styles.button}>&lt;/&gt; Projects</button>
                <button className={styles.button}>Git Hub</button>
            </span>
        </div>
    );
};

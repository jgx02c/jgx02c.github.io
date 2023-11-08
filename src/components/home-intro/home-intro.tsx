import classNames from 'classnames';
import styles from './home-intro.module.scss';
import selfie from '../../assets/selfie.png';

export interface HomeIntroProps {
    className?: string;

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomeIntro = ({ className }: HomeIntroProps) => {
    return (
        <div className={classNames(styles.root, className, styles.intro)}>
            <div>
                <div className={styles.imageClass}>
                    <img src={selfie} alt="" className={styles.profileImage} />
                </div>
                <h2 className={classNames(styles.intro, styles.h2title)}>
                    Hi, I am Joshua Goodman
                </h2>
                <h3 className={styles.h3subtitle}>Software Engineer and Creative Designer</h3>
            </div>
            <p className={styles.textparagraph}>
                I am currentally working as a website developer at <br></br>
                Optionality & creative designer at Finned. I am also<br></br> a front-end software engineer.<br></br>
            </p>
            <span className={styles.root}>
            <a href="https://www.linkedin.com/in/joshua-goodman-215900220" className={styles.button}>LinkedIn</a>
                <a href="https://github.com/jgx02c" className={styles.button}>Git Hub</a>
            </span>
        </div>
    );
};

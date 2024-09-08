import classNames from 'classnames';
import styles from './home-intro.module.scss';
import selfie from '../../assets/selfie.png';

export interface HomeIntroProps {
    className?: string;
}

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
                I am currentally working as a Full Stack developer at <br></br>
                Piclist. I also am a creative designer at Finned  <br></br> and founded Optionality.<br></br>
            </p>
            <span className={styles.root}>
            <a href="https://www.linkedin.com/in/joshuajgoodman" className={styles.button}>LinkedIn</a>
                <a href="https://github.com/jgx02c" className={styles.button}>Git Hub</a>
            </span>
        </div>
    );
};

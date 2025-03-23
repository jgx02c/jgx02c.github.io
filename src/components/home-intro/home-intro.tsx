import classNames from 'classnames';
import styles from './home-intro.module.scss';
import selfie from '../../assets/selfie.png';

export interface HomeIntroProps {
    className?: string;
}

export const HomeIntro = ({ className }: HomeIntroProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img src={selfie} alt="Joshua Goodman" className={styles.profileImage} />
                </div>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        Hi, I'm Joshua Goodman
                    </h1>
                    <h2 className={styles.subtitle}>
                        Software Engineer & Creative Designer
                    </h2>
                    <p className={styles.description}>
                        Currently working as a Contract Software Engineer at Mercor, 
                        while also serving as a Creative Designer at Finned and 
                        founding Optionality.
                    </p>
                    <div className={styles.buttonContainer}>
                        <a href="https://www.linkedin.com/in/joshuajgoodman" className={styles.button}>
                            LinkedIn
                        </a>
                        <a href="https://github.com/jgx02c" className={styles.button}>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

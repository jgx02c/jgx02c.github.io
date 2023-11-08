import classNames from 'classnames';
import styles from './about.module.scss';
import josh from '../../assets/selfie.png'

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.divMaster}>
            <div className={styles.divIntro}>
                <img src={josh} alt="" className={styles.imageClass} />
                <div className={styles.divText}>
                    <p className={styles.paragraph}>Starting to work with computers in 8th grade by building websites, learning C++, and eventually having a small internship working with computer hardware 1 year later, I found myself set on a path chasing computers. Throughout high school, I self-studied computer hardware, I.T. Support, and Computer Programming. At 15 years of age, I found myself repairing iPhones in class, refurbishing MacBooks for the secondary market, and learning about servers by setting up my own network in my garage. Starting my first company at age 19 with the intention to help others with their computer problems, web development, and other business needs, I found success early on. </p>
                </div></div>
        </div>
    </div>;
};

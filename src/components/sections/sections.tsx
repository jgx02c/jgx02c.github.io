import classNames from 'classnames';
import styles from './sections.module.scss';
import finned from '../../assets/mug.png';
import finnedLogo from '../../assets/finned_logo.png';
import reccord from '../../assets/record.png';
import arrow from '../../assets/right-arrow.png'

export interface section {
    className?: string;
    id: number;
    titleLogo: string;
    subText: string;
    description: string;
    linkText: string;
    link: string;
    image: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sections = ({ className, id, titleLogo, subText, description, linkText, link, image }: section) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.mainDiv}>
            <span className={styles.mainSpan}>
                <div>
                    <div>
                        <span className={styles.spanLogo}>
                            <img src={reccord} alt="" className={styles.preLogoImage} />
                            <img src={titleLogo} alt="" className={styles.imgLogo} /></span>
                    </div>
                    <div className={styles.subtextDiv}><h3 className={styles.subText}>{subText}</h3></div></div>
                <div className={styles.divParagraph}>
                    <p className={styles.paragraph}>{description}
                        <span className={styles.spanlink}>
                            <a href={link} className={styles.linkClass}>{linkText} </a>
                            <img src={arrow} alt="" className={styles.arrowImg} />
                        </span>
                    </p>
                </div></span>
            <div className={styles.divImg}>
                <img src={image} alt="" className={styles.image} />
            </div></div>
    </div>;
};

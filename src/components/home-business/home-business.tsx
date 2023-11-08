import classNames from 'classnames';
import styles from './home-business.module.scss';

export interface HomeBusinessProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomeBusiness = ({ className }: HomeBusinessProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <span className={styles.businessSpan}>
                    <div className={styles.businessDiv}>
                        <span className={styles.imgTxtSpan}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                alt=""
                                className={styles.imgClass}
                            />
                            <div className={styles.divText}>
                                <h2 className={styles.h2Class}>2021</h2>
                                <h2 className={styles.h2Class}>Optionality</h2>
                                <h2 className={styles.h2Class}>www.optionality.biz</h2>
                                <p className={styles.paragraphClass}>
                                    Founded in 2021 with the mission to serve others in our local
                                    community, Optionality has been the go-to choice for many. We
                                    strive to bring the best possible solution to your business.
                                </p>
                            </div>
                        </span>
                    </div>
                    <div className={styles.businessDiv}>
                        <span className={styles.imgTxtSpan}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                alt=""
                                className={styles.imgClass}
                            />
                            <div className={styles.divText}>
                                <h2 className={styles.h2Class}>2023</h2>
                                <h2 className={styles.h2Class}>Finned</h2>
                                <h2 className={styles.h2Class}>www.finnedmugs.com</h2>
                                <p className={styles.paragraphClass}>
                                    The epitome of automotive heritage and modern craftsmanship,
                                    meticulously designed to pay homage to the timeless elegance.
                                    Symbolizing refined taste, engineering mastery, and unrelenting
                                    passion for the open road.
                                </p>
                            </div>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    );
};

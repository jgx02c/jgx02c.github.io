import classNames from 'classnames';
import styles from './business.module.scss';

export interface BusinessProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Business = ({ className }: BusinessProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.myBusinessClass}>Businesses Founded</h1>

            <div className={styles.businessClass}>
                <span>
                    <div>
                        <span className={styles.spanClass}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                alt=""
                                className={styles.businessLogo}
                            />
                            <p>This is a paragraph.</p>
                        </span>
                    </div>
                </span>
            </div>
            <div className={styles.businessClass}>
                <span>
                    <div>
                        <span className={styles.spanClass}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                alt=""
                                className={styles.businessLogo}
                            />
                            <p>This is a paragraph.</p>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    );
};

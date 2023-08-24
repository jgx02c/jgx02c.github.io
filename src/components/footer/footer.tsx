import classNames from 'classnames';
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <span className={styles.spanClass}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                    />
                    text
                </span>
            </div>
        </div>
    );
};

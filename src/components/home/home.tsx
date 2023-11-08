import classNames from 'classnames';
import styles from './home.module.scss';

export interface HomeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Home = ({ className }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <span>
                    <div>
                        <h1>Hi, I&apos;am Joshua Founder </h1>
                        <button>Contact</button>
                    </div>
                    <div>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            alt=""
                        />
                    </div>
                </span>
            </div>
        </div>
    );
};

import classNames from 'classnames';
import styles from './work-card-four.module.scss';
import png from '../../assets/csInsta.png';

export interface WorkCardFourProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WorkCardFour = ({ className }: WorkCardFourProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divCardFour}>
                <img src={png} alt="" className={styles.imgCardFour} />
                <h3 className={styles.h3CardFour}>Custom Catering Calcuator</h3>
                <p className={styles.parCardFour}>Custom catering truck booking polugin made using Bubble.io</p>
            </div>    
        </div>
    );
};

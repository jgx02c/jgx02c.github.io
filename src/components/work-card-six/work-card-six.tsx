import classNames from 'classnames';
import styles from './work-card-six.module.scss';
import png from '../../assets/nickle_plated.png';

export interface WorkCardSixProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WorkCardSix = ({ className }: WorkCardSixProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            
            <div className={styles.divCardThree}>
                <img src={png} alt="" className={styles.imgCardThree} />
                <h2 className={styles.h2CardThree}>Passion</h2>
                <p className={styles.parCardThree}>Idea, Design, Branding, Manufacturing, Marketing & Patent</p>
            </div>
         
        </div>
    );
};

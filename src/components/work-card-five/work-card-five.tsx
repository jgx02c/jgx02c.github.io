import classNames from 'classnames';
import styles from './work-card-five.module.scss';
import png from '../../assets/rebounder.png';

export interface WorkCardFiveProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WorkCardFive = ({ className }: WorkCardFiveProps) => {
    return (
        <div className={classNames(styles.root, className)}>
           
            <div className={styles.divCardFive}>
                <img src={png} alt="" className={styles.imgCardFive} />
                <h3 className={styles.h3CardFive}>Content Creation and Branding</h3>
                <p className={styles.parCardFive}>Advertising Campaigns and Product Photos</p>
            </div>
        </div>
    );
};

import classNames from 'classnames';
import styles from './work-card-two.module.scss';
import png from '../../assets/ssCase.png';


export interface WorkCardTwoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WorkCardTwo = ({ className }: WorkCardTwoProps) => {
    return (
        <div className={classNames(styles.root, className)}>
           
            <div className={styles.divCardTwo}>
          
                <img src={png} alt="" className={styles.imgCardTwo} />
                <h3 className={styles.h3CardTwo}>Backend Configuration</h3>
                <p className={styles.parCardOne}>
                    Wordpress Backend Configuration with Online Ordering Services 
                </p>        
            </div>
        </div>
    );
};

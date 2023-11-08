import classNames from 'classnames';
import styles from './home-work.module.scss';
import { WorkCardOne } from '../work-card-one/work-card-one';
import { WorkCardTwo } from '../work-card-two/work-card-two';
import { WorkCardThree } from '../work-card-three/work-card-three';
import { WorkCardFour } from '../work-card-four/work-card-four';
import { WorkCardFive } from '../work-card-five/work-card-five';
import { WorkCardSix} from '../work-card-six/work-card-six';
import { Line } from '../line/line';
import { NavFooter } from '../nav-footer/nav-footer';


export interface OurWorkProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const HomeWork = ({ className }: OurWorkProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.mainDivOurWork}>
                <h1 className={styles.ourworkclass}>
                    Web Design / Marketing / Branding / Content Creation / Consulting
                </h1>
                

                <span className={styles.spanClassOurWork}>
                    <WorkCardTwo />
                    <WorkCardOne />
                </span>
                <div className={styles.divcenter}>
                    
                    <WorkCardSix />
                </div>
                <span className={styles.spanClassOurWork}>
                    <WorkCardFour />
                    <WorkCardFive />
                </span>
                <div className={styles.divcenter}>
                <WorkCardThree />
                    <Line />
                    <NavFooter />
                </div>
            </div>
        </div>

    );
};

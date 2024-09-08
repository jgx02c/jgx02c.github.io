import classNames from 'classnames';
import styles from './WorkPage.module.scss';
import { WorkCardOne } from '../../src/components/work-card-one/work-card-one';
import { WorkCardTwo } from '../../src/components/work-card-two/work-card-two';
import { WorkCardThree } from '../../src/components/work-card-three/work-card-three';
import { WorkCardFour } from '../../src/components/work-card-four/work-card-four';
import { WorkCardFive } from '../../src/components/work-card-five/work-card-five';
import { WorkCardSix } from '../../src/components/work-card-six/work-card-six';
import { Line } from '../../src/components/line/line';
import { NavFooter } from '../../src/components/nav-footer/nav-footer';

export interface OurWorkProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const WorkPage = ({ className }: OurWorkProps) => {
    return (
        <div className={classNames(styles.root, className)}>
       
                <span className={styles.titleSpan}>
                    <h1 className={styles.title}>
                        Web Design / Marketing / Branding / Content Creation / Consulting
                    </h1>
                </span>
                
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
        
    );
};

export default WorkPage;
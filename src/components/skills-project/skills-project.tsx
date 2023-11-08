import classNames from 'classnames';
import styles from './skills-project.module.scss';

import { ReactComponent as ReactLogo } from '../../assets/react.svg';
import { ReactComponent as ViteLogo } from '../../assets/vite.svg';
import { ReactComponent as TypescriptLogo } from '../../assets/typescript.svg';
import { ReactComponent as ScssLogo } from '../../assets/scss.svg';
import { ReactComponent as AwsLogo } from '../../assets/aws.svg';
import { ReactComponent as BootstrapLogo } from '../../assets/bootstrap.svg';
import { ReactComponent as FirebaseLogo } from '../../assets/firebase.svg';
import { ReactComponent as HtmlfiveLogo } from '../../assets/htmlfive.svg';
import { ReactComponent as JavaLogo } from '../../assets/java.svg';
import { ReactComponent as JavascriptLogo } from '../../assets/javascript.svg';
import { ReactComponent as LinuxLogo } from '../../assets/linux.svg';
import { ReactComponent as MsdotnetLogo } from '../../assets/msdotnet.svg';
import { ReactComponent as MongodbLogo } from '../../assets/mongodb.svg';
import { ReactComponent as MysqlLogo } from '../../assets/mysql.svg';
import { ReactComponent as NodejsLogo } from '../../assets/nodejs.svg';
import { ReactComponent as ShopifyLogo } from '../../assets/shopify.svg';
import { ReactComponent as StripeLogo } from '../../assets/stripe.svg';
import { ReactComponent as CLogo } from '../../assets/c.svg';
import { ReactComponent as CplusplusLogo } from '../../assets/cplusplus.svg';
import { ReactComponent as CsharpLogo } from '../../assets/csharp.svg';

export interface SkillsProjectProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SkillsProject = ({ className }: SkillsProjectProps) => {
    return <div className={classNames(styles.root, className)}>

        <h1 className={styles.skillsClass}>Skills</h1>
        <div className={styles.divSVG}>
            <span className={styles.spanSVG}>
                <div className={styles.svgContainer}><a><ViteLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><ReactLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><TypescriptLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><ScssLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><AwsLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><BootstrapLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><FirebaseLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><HtmlfiveLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><JavaLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><JavascriptLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><LinuxLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><MysqlLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><MsdotnetLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><MongodbLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><NodejsLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><ShopifyLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><StripeLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><CLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><CplusplusLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
                <div className={styles.svgContainer}><a><CsharpLogo height="6em" width="6em" className={styles.logoSpace} /></a></div>
            </span></div>
    </div>;
};

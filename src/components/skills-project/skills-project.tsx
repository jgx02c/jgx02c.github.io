import React from 'react';
import classNames from 'classnames';
import styles from './skills-project.module.scss';

// Import SVGs as images
import reactLogo from '../../assets/svg/react.svg';
import viteLogo from '../../assets/svg/vite.svg';
import typescriptLogo from '../../assets/svg/typescript.svg';
import scssLogo from '../../assets/svg/scss.svg';
import awsLogo from '../../assets/svg/aws.svg';
import bootstrapLogo from '../../assets/svg/bootstrap.svg';
import firebaseLogo from '../../assets/svg/firebase.svg';
import htmlfiveLogo from '../../assets/svg/htmlfive.svg';
import javaLogo from '../../assets/svg/java.svg';
import javascriptLogo from '../../assets/svg/javascript.svg';
import linuxLogo from '../../assets/svg/linux.svg';
import msdotnetLogo from '../../assets/svg/msdotnet.svg';
import mongodbLogo from '../../assets/svg/mongodb.svg';
import mysqlLogo from '../../assets/svg/mysql.svg';
import nodejsLogo from '../../assets/svg/nodejs.svg';
import shopifyLogo from '../../assets/svg/shopify.svg';
import stripeLogo from '../../assets/svg/stripe.svg';
import cLogo from '../../assets/svg/c.svg';
import cplusplusLogo from '../../assets/svg/cplusplus.svg';
import csharpLogo from '../../assets/svg/csharp.svg';
import openai from '../../assets/svg/openai.svg';

export interface SkillsProjectProps {
    className?: string;
}

export const SkillsProject = ({ className }: SkillsProjectProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.skillsClass}>Skills</h1>
            <div className={styles.divSVG}>
                <span className={styles.spanSVG}>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={viteLogo} alt="Vite Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={reactLogo} alt="React Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={typescriptLogo} alt="Typescript Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={scssLogo} alt="SCSS Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={awsLogo} alt="AWS Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={bootstrapLogo} alt="Bootstrap Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={firebaseLogo} alt="Firebase Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={htmlfiveLogo} alt="HTML5 Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={javaLogo} alt="Java Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={javascriptLogo} alt="JavaScript Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={linuxLogo} alt="Linux Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={mysqlLogo} alt="MySQL Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={msdotnetLogo} alt=".NET Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={mongodbLogo} alt="MongoDB Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={nodejsLogo} alt="Node.js Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={shopifyLogo} alt="Shopify Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={stripeLogo} alt="Stripe Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={cLogo} alt="C Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={cplusplusLogo} alt="C++ Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={csharpLogo} alt="C# Logo" className={styles.logoSpace} /></a></div>
                    <div className={styles.svgContainer}><a className={styles.svgA}><img src={openai} alt="OpenAI Logo" className={styles.logoSpace} /></a></div>
                </span>
            </div>
        </div>
    );
};

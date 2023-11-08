import React from 'react';
import classNames from 'classnames';
import styles from './home-project-component.module.scss';

export interface project {
    className?: string;
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    madeWith1: string;
    madeWith2: string;
    madeWith3: string;
    madeWith4: string;
    madeWith5: string;
    madeWith6: string;
    demo: boolean;
    demoLink: string;
    code: boolean;
    codeLink: string;
    live: boolean;
    liveLink: string;
}

export const HomeProjectComponent: React.FC<project> = ({ className, id, imageUrl, title, description, madeWith1, madeWith2, madeWith3, madeWith4, madeWith5, madeWith6, code, codeLink, demo, demoLink, live, liveLink }) => {

    const isDemoTrue = (demo: boolean) => {
        return demo === true;
    };

    const isCodeTrue = (code: boolean) => {
        return code === true;
    };

    const isLiveTrue = (live: boolean) => {
        return live === true;
    };

    return (
        <div key={id} className={styles.masterDiv}>
            <div className={styles.mainDiv}>
                <span className={styles.main_span}>
                    <div className={styles.divLeft}>
                        <div>
                            <h1 className={styles.h1Class}>{title}</h1>
                            <span className={styles.span_logo}>
                                <div>
                                    <span className={styles.spanLogo}>
                                        <h4 className={styles.h4Class}>Made With:</h4>
                                        <img src={madeWith1} alt="" className={styles.languageLogo} />
                                        <img src={madeWith2} alt="" className={styles.languageLogo} />
                                        <img src={madeWith3} alt="" className={styles.languageLogo} />
                                        <img src={madeWith4} alt="" className={styles.languageLogo} />
                                        <img src={madeWith5} alt="" className={styles.languageLogo} />
                                        <img src={madeWith6} alt="" className={styles.languageLogo} />
                                    </span>
                                </div>
                            </span>
                            <p className={styles.paragraph}>{description}</p>
                            <div className={styles.divButton}>
                                {isDemoTrue(demo) && (
                                    <a href={demoLink} className={styles.button}>Demo</a>
                                )}
                                {isCodeTrue(code) && (
                                    <a href={codeLink} className={styles.button}>Code</a>
                                )}
                                {isLiveTrue(live) && (
                                    <a href={liveLink} className={styles.button}>Live</a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.divRight}>
                        <img src={imageUrl} alt="" className={styles.imgClass} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default HomeProjectComponent;

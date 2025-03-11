import React from 'react';
import classNames from 'classnames';
import styles from './home-project-component.module.scss';
import getLogoImage from '../../utils/logoMapper';
import getProjectImage from '../../utils/imageImporter';

export interface project {
    className?: string;
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    madeWith: string[];
    demo: boolean;
    demoLink: string;
    code: boolean;
    codeLink: string;
    live: boolean;
    liveLink: string;
    projectType?: string;
    companyName?: string;
}

export const HomeProjectComponent = ({
    className, 
    id, 
    imageUrl = '', 
    title = 'Project', 
    description = 'No description available',
    madeWith = [], 
    code = false, 
    codeLink = '', 
    demo = false, 
    demoLink = '', 
    live = false, 
    liveLink = ''
}: project) => {
    // For debugging
    console.log(`Rendering project: ${title}, image: ${imageUrl}`);
    
    // Safely handle potentially undefined madeWith array
    const technologies = Array.isArray(madeWith) ? madeWith : [];

    const isDemoTrue = (demo: boolean) => demo === true;
    const isCodeTrue = (code: boolean) => code === true;
    const isLiveTrue = (live: boolean) => live === true;

    // Get project image with error handling
    const projectImage = React.useMemo(() => {
        try {
            return getProjectImage(imageUrl);
        } catch (error) {
            console.error(`Error loading image for ${title}:`, error);
            return '';
        }
    }, [imageUrl, title]);

    return (
        <div className={classNames(styles.masterDiv, className)}>
            <div className={styles.mainDiv}>
                <span className={styles.main_span}>
                    <div className={styles.divLeft}>
                        <div>
                            <h1 className={styles.h1Class}>{title}</h1>
                            <span className={styles.span_logo}>
                                <div className={styles.spanLogo}>
                                    <h4 className={styles.h4Class}>Made With:</h4>
                                    {technologies.map((tech, index) => {
                                        try {
                                            return (
                                                <img 
                                                    key={index} 
                                                    src={getLogoImage(tech)} 
                                                    alt={tech !== 'blank' ? tech : ''} 
                                                    className={styles.languageLogo} 
                                                    onError={(e) => {
                                                        console.error(`Failed to load logo for ${tech}`);
                                                        (e.target as HTMLImageElement).style.display = 'none';
                                                    }}
                                                />
                                            );
                                        } catch (error) {
                                            console.error(`Error rendering tech logo ${tech}:`, error);
                                            return null;
                                        }
                                    })}
                                </div>
                            </span>
                            <p className={styles.paragraph}>{description}</p>
                            <div className={styles.divButton}>
                                {isDemoTrue(demo) && demoLink && (
                                    <a href={demoLink} className={styles.button}>Demo</a>
                                )}
                                {isCodeTrue(code) && codeLink && (
                                    <a href={codeLink} className={styles.button}>Code</a>
                                )}
                                {isLiveTrue(live) && liveLink && (
                                    <a href={liveLink} className={styles.button}>Live</a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.divRight}>
                        {projectImage ? (
                            <img 
                                src={projectImage} 
                                alt={title} 
                                className={styles.imgClass}
                                onError={(e) => {
                                    console.error(`Failed to load project image for ${title}`);
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }} 
                            />
                        ) : (
                            <div className={styles.imgClass} style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span>Image not available</span>
                            </div>
                        )}
                    </div>
                </span>
            </div>
        </div>
    );
};
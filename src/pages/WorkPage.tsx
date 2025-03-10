import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './WorkPage.module.scss';
import { Timeline, WorkHistoryItem } from '../components/timeline/timeline';
import workHistoryData from '../data/workHistory.json';
import { NavFooter } from '../components/nav-footer/nav-footer';

// Import all company logos
import piclistLogo from '../assets/PiclistLogo.png';
import finnedLogo from '../assets/finned_logo.png';
import optionalityLogo from '../assets/optionality_logo.png';
import mxLogo from '../assets/mx.webp';
import dialogicaLogo from '../assets/dialogica_logo.png';
import jgLogo from '../assets/jglogo.png';
import byobLogo from '../assets/byob.png';
import quicksightLogo from '../assets/quicksight.jpeg';
import collegiatestandardLogo from '../assets/collegiatestandardlogo.png';
export interface WorkPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const WorkPage = ({ className }: WorkPageProps) => {
    const [workHistory, setWorkHistory] = useState<WorkHistoryItem[]>([]);
    
    useEffect(() => {
        // Create a mapping of logo paths to imported images
        const logoMap: { [key: string]: string } = {
            '../assets/PiclistLogo.png': piclistLogo,
            '../assets/finned_logo.png': finnedLogo,
            '../assets/optionality_logo.png': optionalityLogo,
            '../assets/mx.webp': mxLogo,
            '../assets/dialogica_logo.png': dialogicaLogo,
            '../assets/jglogo.png': jgLogo,
            '../assets/byob.png': byobLogo,
            '../assets/quicksight.jpeg': quicksightLogo,
            '../assets/collegiatestandardlogo.png': collegiatestandardLogo
        };
        
        // Process the work history data to handle image paths
        const processedWorkHistory = workHistoryData.map(item => ({
            ...item,
            logo: logoMap[item.logo] || jgLogo // Use jgLogo as fallback
        }));
        
        setWorkHistory(processedWorkHistory);
    }, []);
    
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Professional Experience</h1>
                <p className={styles.subtitle}>
                    My professional journey in software development and entrepreneurship
                </p>
            </div>
            
            {workHistory.length > 0 ? (
                <div className={styles.timelineContainer}>
                    <Timeline items={workHistory} />
                </div>
            ) : (
                <div className={styles.loading}>Loading timeline...</div>
            )}
            
            <NavFooter />
        </div>
    );
};

export default WorkPage;
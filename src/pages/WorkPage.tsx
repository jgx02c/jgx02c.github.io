import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './WorkPage.module.scss';
import { Timeline, WorkHistoryItem } from '../components/timeline/timeline';
import workHistoryData from '../data/workHistory.json';
import { NavFooter } from '../components/nav-footer/nav-footer';

// Import all company logos
import finnedLogo from '../assets/finned/finned_logo.png';
import optionalityLogo from '../assets/optionality_logo.png';
import mxLogo from '../assets/mx.webp';
import dialogicaLogo from '../assets/Dialogica/dialogica_logo.png';
import jgLogo from '../assets/logos/jglogo.png';
import byobLogo from '../assets/logos/BYOB.png';
import quicksightLogo from '../assets/logos/quicksight.jpeg';
import collegiatestandardLogo from '../assets/logos/collegiatestandardlogo.png';
import mercorLogo from '../assets/logos/mercor.png';
import piclistLogo from '../assets/logos/piclist.webp';
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
            '../assets/finned/finned_logo.png': finnedLogo,
            '../assets/optionality_logo.png': optionalityLogo,
            '../assets/mx.webp': mxLogo,
            '../assets/Dialogica/dialogica_logo.png': dialogicaLogo,
            '../assets/logos/jglogo.png': jgLogo,
            '../assets/logos/BYOB.png': byobLogo,
            '../assets/logos/quicksight.jpeg': quicksightLogo,
            '../assets/logos/collegiatestandardlogo.png': collegiatestandardLogo,
            '../assets/logos/Mercor.png': mercorLogo,
            '../assets/logos/piclist.webp': piclistLogo
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
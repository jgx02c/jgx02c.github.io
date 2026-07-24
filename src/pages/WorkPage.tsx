import styles from './WorkPage.module.scss';
import { Timeline, WorkHistoryItem } from '../components/timeline/timeline';
import { Reveal } from '../components/reveal/reveal';
import workHistoryData from '../data/workHistory.json';

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
import ppmLogo from '../assets/ppm.jpeg';

const LOGO_MAP: { [key: string]: string } = {
    '../assets/finned/finned_logo.png': finnedLogo,
    '../assets/optionality_logo.png': optionalityLogo,
    '../assets/mx.webp': mxLogo,
    '../assets/Dialogica/dialogica_logo.png': dialogicaLogo,
    '../assets/logos/jglogo.png': jgLogo,
    '../assets/logos/BYOB.png': byobLogo,
    '../assets/logos/quicksight.jpeg': quicksightLogo,
    '../assets/logos/collegiatestandardlogo.png': collegiatestandardLogo,
    '../assets/logos/Mercor.png': mercorLogo,
    '../assets/logos/piclist.webp': piclistLogo,
    '../assets/ppm.jpeg': ppmLogo,
};

const workHistory: WorkHistoryItem[] = workHistoryData.map((item) => ({
    ...item,
    logo: LOGO_MAP[item.logo] || jgLogo,
}));

const WorkPage = () => {
    return (
        <div className={styles.root}>
            <Reveal>
                <header className={styles.header}>
                    <span className="eyebrow">Work</span>
                    <h1 className={styles.title}>
                        From first internship to{' '}
                        <em className="serif-accent">founding a company.</em>
                    </h1>
                    <p className={styles.subtitle}>
                        A decade of shipping — through startups, agencies, and companies
                        of my own.
                    </p>
                </header>
            </Reveal>

            <Timeline items={workHistory} />
        </div>
    );
};

export default WorkPage;

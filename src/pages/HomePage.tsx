import { HomeIntro } from '../components/home-intro/home-intro';
import { NavFooter } from '../components/nav-footer/nav-footer';
import { Line } from '../components/line/line';
import { HomeSections } from '../components/home-sections/home-sections';
import sectionsData from '../data/sections.json';

// Import necessary images for dynamically loading from the JSON paths
import piclistLogo from '../assets/PiclistLogo.png';
import finnedLogo from '../assets/finned_logo.png';
import optionalityLogo from '../assets/optionality_logo.png';
import jgLogo from '../assets/jglogo.png';
import piclistDashboard from '../assets/PiclistDashboard.png';
import mug from '../assets/mug.png';
import artboard from '../assets/artboard.png';
import jgImg from '../assets/jg_img.png';

function HomePage() {
    // Map image paths to imported image variables with proper typing
    const imageMap: { [key: string]: string } = {
        '../assets/PiclistLogo.png': piclistLogo,
        '../assets/finned_logo.png': finnedLogo,
        '../assets/optionality_logo.png': optionalityLogo,
        '../assets/jglogo.png': jgLogo,
        '../assets/PiclistDashboard.png': piclistDashboard,
        '../assets/mug.png': mug,
        '../assets/artboard.png': artboard,
        '../assets/jg_img.png': jgImg
    };

    // Process sections data to use imported images
    const sections = sectionsData.map(section => ({
        ...section,
        titleLogo: imageMap[section.titleLogo] || section.titleLogo,
        image: imageMap[section.image] || section.image
    }));
    
    return (
        <div>
            <HomeIntro />
            <Line />
            <HomeSections sections={sections} />
            <NavFooter />
        </div>
    )
}

export default HomePage;
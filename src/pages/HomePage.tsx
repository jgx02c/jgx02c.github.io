import { HomeIntro } from '../components/home-intro/home-intro';
import { NavFooter } from '../components/nav-footer/nav-footer';
import { HomeSections } from '../components/home-sections/home-sections';
import sectionsData from '../data/sections.json';

// Import necessary images for dynamically loading from the JSON paths
import piclistLogo from '../assets/logos/PiclistLogo.png';
import finnedLogo from '../assets/finned/finned_logo.png';
import optionalityLogo from '../assets/optionality_logo.png';
import jgLogo from '../assets/logos/jglogo.png';
import dashboardNew from '../assets/Dialogica/dialogica-demo.png';
import mug from '../assets/finned/mug.png';
import artboard from '../assets/logos/artboard.png';
import jgImg from '../assets/jg_img.png';
import dialogicaLogo from '../assets/Dialogica/dialogica_logo.png';
import dialogicaMain from '../assets/dialogicaMain.png';

function HomePage() {
    // Map image paths to imported image variables with proper typing
    const imageMap: { [key: string]: string } = {
        '../assets/logos/PiclistLogo.png': piclistLogo,
        '../assets/finned/finned_logo.png': finnedLogo,
        '../assets/optionality_logo.png': optionalityLogo,
        '../assets/logos/jglogo.png': jgLogo,
        '../assets/Dialogica/dialogica-demo.png': dashboardNew,
        '../assets/finned/mug.png': mug,
        '../assets/logos/artboard.png': artboard,
        '../assets/jg_img.png': jgImg,
        '../assets/Dialogica/dialogica_logo.png': dialogicaLogo,
        '../assets/dialogicaMain.png': dialogicaMain
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
            <HomeSections sections={sections} />
            <NavFooter />
        </div>
    )
}

export default HomePage;
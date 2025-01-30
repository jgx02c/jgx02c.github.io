import { HomeIntro } from '../components/home-intro/home-intro';
import { NavFooter } from '../components/nav-footer/nav-footer';
import { Line } from '../components/line/line';
import { HomeSections } from '../components/home-sections/home-sections';

import img5 from '../assets/PiclistLogo.png';
import img1 from '../assets/finned_logo.png';
import img2 from '../assets/optionality_logo.png';
import img3 from '../assets/jglogo.png';
import img4 from '../assets/jglogo.png';
import img1_1 from '../assets/mug.png';
import img2_2 from '../assets/artboard.png';
import img3_3 from '../assets/jg_img.png';
import img4_4 from '../assets/jg_img.png';
import img5_5 from '../assets/PiclistDashboard.png';

function HomePage () {

    const sections = [
        {
            id: 1,
            titleLogo: img5,
            subText: 'Automatically create listings with our API',
            description: 'Boost your organization with AI image recognition.',
            linkText: 'View Website',
            link: 'https://piclist.ai',
            image: img5_5,
        },
        {
            id: 2,
            titleLogo: img1,
            subText: 'Passion Worth Sharing',
            description: 'The epitome of automotive heritage and modern craftsmanship, meticulously designed to pay homage to the timeless elegance.',
            linkText: 'View Website',
            link: 'https://www.finnedmugs.com',
            image: img1_1,
        },
        {
            id: 3,
            titleLogo: img2,
            subText: 'Flexible Business Services & Technology Solutions',
            description: 'Our clients include, local restaurants, online retailers, fitness brands and many more.',
            linkText: 'View Website',
            link: 'https://www.optionality.biz',
            image: img2_2,
        },
        {
            id: 4,
            titleLogo: img3,
            subText: 'Software Engineer',
            description: 'Programming Projects from University and self-interest. Here, you can find a portfolio of my programming projects and skills.',
            linkText: 'View Projects',
            link: 'https://joshuagoodman.me/projects',
            image: img3_3,
        }
    ];

    
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
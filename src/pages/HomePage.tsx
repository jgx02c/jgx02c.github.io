import { HomeIntro } from '../components/home-intro/home-intro';
import { HomeProjects } from '../components/home-projects/home-projects';
import { HomeSkills } from '../components/home-skills/home-skills'
import { HomeBusiness } from '../components/home-business/home-business';
import { HomeEducation } from '../components/home-education/home-education'; 
import { HomeContact } from '../components/home-contact/home-contact';
import { NavFooter } from '../components/nav-footer/nav-footer';
import  ParticlesBackground  from '../ParticlesBackground';

import Styles from './HomePage.module.scss';

function HomePage () {

    const projects = [
        {
            id: 1,
            title: 'Nerf Turret Defender',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            description: 'hats section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 2,
            title: 'Open Tune',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            description: 'jackets section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 3,
            title: 'Order Side (Front)',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            description: 'sneakers section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 4,
            title: 'Order Side (Rear)',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            description: 'womens section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 5,
            title: 'OrderSide Mobile User',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            description: 'mens section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 6,
            title: 'OrderSide Mobile Host',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            description: 'mens section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 7,
            title: 'Open Tune Ignition',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            description: 'mens section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 8,
            title: 'Cash4Clunkers (Front)',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            description: 'mens section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 9,
            title: 'Cash4Clunkers (Rear)',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            description: 'mens section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 10,
            title: 'Pong in C#',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            description: 'mens section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 11,
            title: 'Uni Project #1',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            description: 'mens section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
        {
            id: 12,
            title: 'Uni Project #2',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            description: 'mens section',
            demo: true,
            demoLink: '',
            code: true,
            codeLink: '',
            live: true,
            liveLink: '',
        },
    ];

    return (
        <div>
                <HomeIntro />
                <HomeProjects projects={projects} />
                <HomeSkills />
                 <HomeBusiness />
                 <HomeEducation />
                 <HomeContact />
                <NavFooter />
            </div>
    )
}

export default HomePage;
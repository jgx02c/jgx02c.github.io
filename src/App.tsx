import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Intro } from './components/intro/intro';
import { ProjectList } from './components/project-list/project-list';
import { Skills } from './components/skills/skills';
import { Business } from './components/business/business';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

const App = () => {
    
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
        <div className="#particles-js">
            <script src="../particles.js"></script>
            <script src="js/app.js"></script>

            <div className={styles.App}>
                <div className={styles.listTop}>
                    <Navbar />
                    <Intro />
                </div>

                <div className={styles.listBottom}>
                    <ProjectList projects={projects} />
                </div>
                <div className={styles.skillsBottom}>
                <Skills />
                </div>
                
                 <Business />
                 <Education />
                 <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default App;

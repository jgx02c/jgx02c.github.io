import { HomeProjectComponent } from "../components/home-project-component/home-project-component";
import { HomeProjects } from "../components/home-projects/home-projects";
import { HomeSkills } from "../components/home-skills/home-skills";
import { Line } from "../components/line/line";
import { ProjectsIntro } from "../components/projects-intro/projects-intro";

import  ReactLogo from '../assets/react.svg';
import JavaLogo  from '../assets/java.svg';
import  ViteLogo  from '../assets/vite.svg';
import  TypescriptLogo  from '../assets/typescript.svg';
import ScssLogo  from '../assets/scss.svg';
import AwsLogo from '../assets/aws.svg';
import  BootstrapLogo  from '../assets/bootstrap.svg';
import  CssLogo  from '../assets/css.svg';
import  FirebaseLogo  from '../assets/firebase.svg';
import HtmlfiveLogo  from '../assets/htmlfive.svg';
import JavascriptLogo from '../assets/javascript.svg';
import  MsdotnetLogo  from '../assets/msdotnet.svg';
import  MysqlLogo  from '../assets/mysql.svg';
import NodejsLogo from '../assets/nodejs.svg';
import ShopifyLogo from '../assets/shopify.svg';
import StripeLogo from '../assets/stripe.svg';
import CLogo from '../assets/c.svg';
import CplusplusLogo from '../assets/cplusplus.svg';
import CsharpLogo from '../assets/csharp.svg';
import MongodbLogo from '../assets/mongodb.svg';
import PythonLogo from '../assets/python-logo-only.svg';
import Blank from '../assets/blank.png';
import project1PNG from '../assets/collegiateSite.png';
import project2PNG from '../assets/travell4all.png';
import project3PNG from '../assets/arduinoCode.png';
import project4PNG from '../assets/inprogress.png';
import project5PNG from '../assets/milu.png';
import project6PNG from '../assets/binary-game.webp';
import project7PNG from '../assets/livableWage.png';
import project8PNG from '../assets/cSharpProject.png';
import project9PNG from '../assets/wildfire-active-map-tracker-features.jpeg';
import project10PNG from '../assets/login.png';
import { SkillsProject } from "../components/skills-project/skills-project";
import { NavFooter } from "../components/nav-footer/nav-footer";

function ProjectsPage () {

    const projects = [
        {
            id: 10,
            title: 'Doctors Office Appoiment Booking',
            imageUrl: project10PNG,
            description: 'For this project, I took the key role of leading a small team to develop a small application connected to an external SQL back end. Our project featured a protected login and signup, appointment booking system, and text message appointment confirmation.',
            madeWith1: TypescriptLogo,
            madeWith2: ReactLogo,
            madeWith3: MysqlLogo,
            madeWith4: Blank,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/cs3560-03-01/CS3560-Proj',
            live: false,
            liveLink: '',
        },
        {
            id: 1,
            title: 'Collegiate Standard Inventory',
            imageUrl: project1PNG,
            description: 'For this project, I developed a small application to replace a pre-existing outdated MS-Acess application developed for friend I used to work for before starting Optionality and Finned. This application makes it easier to train employees on how to use the system and uses pre-existing sql data tables. Although still in development, this application will have the ability to pull and process sales from Shopify, Amazon, Ebay and Etsy.',
            madeWith1: JavascriptLogo,
            madeWith2: TypescriptLogo,
            madeWith3: NodejsLogo,
            madeWith4: MysqlLogo,
            madeWith5: ShopifyLogo,
            madeWith6: ViteLogo,
            demo: false,
            demoLink: '',
            code: false,
            codeLink: '',
            live: false,
            liveLink: '',
        },
        {
            id: 7,
            title: 'Arduino Binary Game',
            imageUrl: project6PNG,
            description: 'Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.',
            madeWith1: CLogo,
            madeWith2: CplusplusLogo,
            madeWith3: Blank,
            madeWith4: Blank,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/jgx02c/BinaryGame',
            live: true,
            liveLink: '',
        },
        {
            id: 3,
            title: 'Open Tune Ignition',
            imageUrl: project3PNG,
            description: 'OpenTune is a custom made electronic ignition that I developed as a way to create variable timing based on throttle position for Dual Carbuerated VW’s. Initially starting of as a small circuit as a way to create a 6v electronic ignition (Sucuessfull), the project took a change when I added more magnets and an Arduino as a way to calculator the engines rpm, position, and set timing.',
            madeWith1: CLogo,
            madeWith2: CplusplusLogo,
            madeWith3: JavaLogo,
            madeWith4: Blank,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: true,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/jgx02c/OpenTune',
            live: false,
            liveLink: '',
        },
        {
            id: 6,
            title: 'Livable Wage Calcuator',
            imageUrl: project7PNG,
            description: 'LivableWage calculator is a calculator that computes the livable wage needed in a certain area. Using an external API to fetch data from Open Cage and Numbeo. Using these external sources it can compare the monthly expenses entered into the program with the monthly livable wage cost in the area that is needed.',
            madeWith1: HtmlfiveLogo,
            madeWith2: CssLogo,
            madeWith3: JavascriptLogo,
            madeWith4: Blank,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/jgx02c/LivableWageCalcuator',
            live: true,
            liveLink: 'https://codesandbox.io/s/livable-wage-calcuator-9q6fqz?file=/src/index.html',
        },
        {
            id: 9,
            title: 'A.I. California Wildfire Prediction',
            imageUrl: project9PNG,
            description: 'For this project, I was Part of an A.I. team working in AWS Sage Maker. Our goal was to create and train an A.I. model to predict wether forcasting and the chance of wildfires across California. Our A.I. model was integrated with the back end (team) that then sent the data to the front end (team).',
            madeWith1: CplusplusLogo,
            madeWith2: AwsLogo,
            madeWith3: Blank,
            madeWith4: Blank,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/doxid/CS4800.01_AWS2_AI',
            live: false,
            liveLink: '',
        },
        {
            id: 8,
            title: 'Task Manager Console App',
            imageUrl: project8PNG,
            description: 'Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task\'s dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.',
            madeWith1: CsharpLogo,
            madeWith2: Blank,
            madeWith3: Blank,
            madeWith4: Blank,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: true,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/jgx02c/TaskManager',
            live: false,
            liveLink: '',
        },
       
        {
            id: 2,
            title: 'Travel-4-All',
            imageUrl: project2PNG,
            description: 'Exploring Differet technologies and frameworks, I wanted to do a recreation of popular website, Bring a Trailer. Inspired by my local Pastor on the superiority of International Harversters, I built this site as a way for him to and others to list and sell all of his favorite vehicles.             ',
            madeWith1: PythonLogo,
            madeWith2: BootstrapLogo,
            madeWith3: MongodbLogo,
            madeWith4: HtmlfiveLogo,
            madeWith5: ScssLogo,
            madeWith6: Blank,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/jgx02c/ClunkersForCash',
            live: false,
            liveLink: '',
        },
        {
            id: 4,
            title: 'Restoration Calcuator',
            imageUrl: project4PNG,
            description: 'Thinking about doing a classic Autombile restoration? Want to know the cost? Say no more, here is a Automobile restoration calcuator that compute\'s the cost to restore a car. The project itself uses multiplt API\'s and Webscrapers to pull data for the specific car. It also uses A.I. integration. It follows a 3 level type for restoration from Driver, Showcar and Concours.',
            madeWith1: CsharpLogo,
            madeWith2: MsdotnetLogo,
            madeWith3: FirebaseLogo,
            madeWith4: BootstrapLogo,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/jgx02c/RestorationCalcuator',
            live: false,
            liveLink: '',
        },
       
    ];

    return (
        <div>
        <HomeProjects projects={projects} />
        <Line />
        <SkillsProject />
        <Line />
        <NavFooter />
        </div>
    )
}

export default ProjectsPage;
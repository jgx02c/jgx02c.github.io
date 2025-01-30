import { HomeProjects } from "../components/home-projects/home-projects";
import { Line } from "../components/line/line";

import ReactLogo from '../assets/svg/react.svg';
import ViteLogo  from '../assets/svg/vite.svg';
import TypescriptLogo  from '../assets/svg/typescript.svg';
import ScssLogo  from '../assets/svg/scss.svg';
import AwsLogo from '../assets/svg/aws.svg';
import CssLogo  from '../assets/svg/css.svg';
import DjangoLogo from '../assets/svg/django.svg'
import HtmlfiveLogo  from '../assets/svg/htmlfive.svg';
import JavascriptLogo from '../assets/svg/javascript.svg';
import MysqlLogo  from '../assets/svg/mysql.svg';
import LangChainLogo from '../assets/svg/langchain-seeklogo.svg'
import NodejsLogo from '../assets/svg/nodejs.svg';
import ShopifyLogo from '../assets/svg/shopify.svg';
import NextLogo from '../assets/svg/next-js.svg'
import FastLogo from '../assets/svg/fastapi.svg'
import OpenAI from '../assets/svg/openai.svg';
import CplusplusLogo from '../assets/svg/cplusplus.svg';
import MongodbLogo from '../assets/svg/mongodb.svg';
import PythonLogo from '../assets/svg/python.svg';
import FlaskLogo from '../assets/flask.png'
import Blank from '../assets/blank.png';

import project1PNG from '../assets/travell4all.png';
import project2PNG from '../assets/emberlight.png';
import project3PNG from '../assets/PiclistDashboard.png'
import project4PNG from '../assets/dialogica-demo.png';
import project5PNG from '../assets/login.png';

import project7PNG from '../assets/livableWage.png';
import project8PNG from '../assets/wildfire-active-map-tracker-features.jpeg';
import project9PNG from '../assets/gpt2hpccpp.png'

import { SkillsProject } from "../components/skills-project/skills-project";
import { NavFooter } from "../components/nav-footer/nav-footer";

function ProjectsPage () {

    const projects = [
        {
            id: 1,
            title: 'Travel-4-All',
            imageUrl: project1PNG,
            description: 'Exploring Differet technologies and frameworks, I wanted to do a recreation of popular website, Bring a Trailer. Inspired by my local Pastor on the superiority of International Harversters, I built this site as a way for him to and others to list and sell all of his favorite vehicles.             ',
            madeWith1: JavascriptLogo,
            madeWith2: NextLogo,
            madeWith3: MysqlLogo,
            madeWith4: Blank,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/jgx02c/ClunkersForCash',
            live: true,
            liveLink: '',
        },
        {
            id: 2,
            title: 'Emberlight',
            imageUrl: project2PNG,
            description: 'Snippez is a personal project to store snippets of code that I want to quickly reference and reuse. It pairs with my BYOC GPT Coder. It helps improve efficiency and accuracy.             ',
            madeWith1: TypescriptLogo,
            madeWith2: NextLogo,
            madeWith3: MongodbLogo,
            madeWith4: JavascriptLogo,
            madeWith5: Blank,
            madeWith6: ScssLogo,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/jgx02c/snippets',
            live: true,
            liveLink: 'https://joshuagoodman.me/Emberlight/',
        },
        {
            id: 3,
            title: 'Piclist Crosslisting',
            imageUrl: project3PNG,
            description: 'For this project, I created a simple mobile application for CS 4750 and uploaded it to the play store',
            madeWith1: Blank,
            madeWith2: Blank,
            madeWith3: Blank,
            madeWith4: Blank,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: true,
            demoLink: 'https://youtu.be/xseb8y3TyM8',
            code: true,
            codeLink: 'https://github.com/jgx02c/cs4750_flutter_app',
            live: true,
            liveLink: 'https://app.piclist.ai',
        },
        {
            id: 4,
            title: 'Dialogica',
            imageUrl: project4PNG,
            description: 'Dialogica operates in sync with your efforts, actively engaging in conversations and offering valuable insights. Specifically designed for legal depositions, interrogations, and trials, Dialogica collaborates with you to enhance your understanding in real-time. By accessing user-uploaded documents, Legal Databases, and various generative External services, Dialogica empowers attorneys with comprehensive support.',
            madeWith1: TypescriptLogo,
            madeWith2: NextLogo,
            madeWith3: AwsLogo,
            madeWith4: OpenAI,
            madeWith5: Blank,
            madeWith6: FlaskLogo,
            demo: true,
            demoLink: 'https://www.youtube.com/watch?v=2PnzFxdACoo&t=3s',
            code: true,
            codeLink: '',
            live: true,
            liveLink: 'https://www.dialogicaai.com/demo',
        },
        
        {
            id: 5,
            title: 'Doctors Office Appoiment Booking',
            imageUrl: project5PNG,
            description: 'For this project, I took the key role of leading a small team to develop a small application connected to an external SQL back end. Our project featured a protected login and signup, appointment booking system, and text message appointment confirmation.',
            madeWith1: TypescriptLogo,
            madeWith2: ReactLogo,
            madeWith3: MysqlLogo,
            madeWith4: JavascriptLogo,
            madeWith5: NodejsLogo,
            madeWith6: ViteLogo,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/cs3560-03-01/CS3560-Proj',
            live: false,
            liveLink: '',
        },
        {
            id: 7,
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
            live: false,
            liveLink: '',
        },
        {
            id: 8,
            title: 'A.I. California Wildfire Prediction',
            imageUrl: project8PNG,
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
            id: 9,
            title: 'GPT-2 On CPP HPC',
            imageUrl: project9PNG,
            description: 'Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task\'s dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.',
            madeWith1: Blank,
            madeWith2: Blank,
            madeWith3: Blank,
            madeWith4: Blank,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: true,
            demoLink: 'https://youtu.be/AGwYorbxvgg',
            code: true,
            codeLink: 'https://github.com/jgx02c/TaskManager',
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
import { HomeProjects } from "../components/home-projects/home-projects";
import { Line } from "../components/line/line";
import  ReactLogo from '../assets/svg/react.svg';
import JavaLogo  from '../assets/svg/java.svg';
import  ViteLogo  from '../assets/svg/vite.svg';
import  TypescriptLogo  from '../assets/svg/typescript.svg';
import ScssLogo  from '../assets/svg/scss.svg';
import FlutterLogo from '../assets/svg/flutter-logo.svg'
import AwsLogo from '../assets/svg/aws.svg';
import  BootstrapLogo  from '../assets/svg/bootstrap.svg';
import  CssLogo  from '../assets/svg/css.svg';
import DjangoLogo from '../assets/svg/django.svg'
import  FirebaseLogo  from '../assets/svg/firebase.svg';
import HtmlfiveLogo  from '../assets/svg/htmlfive.svg';
import JavascriptLogo from '../assets/svg/javascript.svg';
import  MsdotnetLogo  from '../assets/svg/msdotnet.svg';
import  MysqlLogo  from '../assets/svg/mysql.svg';
import TauriLogo from '../assets/svg/tauri.svg';
import LangChainLogo from '../assets/svg/langchain-seeklogo.svg'
import NodejsLogo from '../assets/svg/nodejs.svg';
import ShopifyLogo from '../assets/svg/shopify.svg';
import StripeLogo from '../assets/svg/stripe.svg';
import NextLogo from '../assets/svg/next-js.svg'
import FastLogo from '../assets/svg/fastapi.svg'
import AssemblyLogo from '../../src/assets/assembly.png'
import CLogo from '../assets/svg/c.svg';
import OpenAI from '../assets/svg/openai.svg';
import CplusplusLogo from '../assets/svg/cplusplus.svg';
import CsharpLogo from '../assets/svg/csharp.svg';
import MongodbLogo from '../assets/svg/mongodb.svg';
import PythonLogo from '../assets/svg/python.svg';
import FlaskLogo from '../assets/flask.png'
import Snippetz from '../assets/snippetz.png';
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
import project11PNG from '../assets/Banner.png';
import project12PNG from '../assets/dashbaord.png'
import { SkillsProject } from "../components/skills-project/skills-project";
import { NavFooter } from "../components/nav-footer/nav-footer";

function ProjectsPage () {

    const projects = [
        {
            id: 12,
            title: 'Dialogica Demo',
            imageUrl: project12PNG,
            description: 'Dialogica operates in sync with your efforts, actively engaging in conversations and offering valuable insights. Specifically designed for legal depositions, interrogations, and trials, Dialogica collaborates with you to enhance your understanding in real-time. By accessing user-uploaded documents, Legal Databases, and various generative External services, Dialogica empowers attorneys with comprehensive support.',
            madeWith1: TypescriptLogo,
            madeWith2: NextLogo,
            madeWith3: AwsLogo,
            madeWith4: OpenAI,
            madeWith5: AssemblyLogo,
            madeWith6: FlaskLogo,
            demo: true,
            demoLink: 'https://www.youtube.com/watch?v=2PnzFxdACoo',
            code: false,
            codeLink: '',
            live: true,
            liveLink: 'https://www.dialogicaai.com/demo',
        },
        {
            id: 13,
            title: 'Snippez',
            imageUrl: Snippetz,
            description: 'Snippez is a personal project to store snippets of code that I want to quickly reference and reuse. It pairs with my BYOC GPT Coder. It helps improve efficiency and accuracy.             ',
            madeWith1: TypescriptLogo,
            madeWith2: NextLogo,
            madeWith3: MongodbLogo,
            madeWith4: JavascriptLogo,
            madeWith5: TauriLogo,
            madeWith6: ScssLogo,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/jgx02c/snippets',
            live: false,
            liveLink: '',
        },
        {
            id: 14,
            title: 'BYOC GPT Coder',
            imageUrl: project4PNG,
            description: 'BYOC (Bring Your Own Code) GPT Coder is an AI wrapper using Langchain R.A.G. operations and my personal code library with Chat GPT to generate code. It solves the problems of copyrighted material by leveraging previous projects and manually submitting code databases when generating code. ',
            madeWith1: TypescriptLogo,
            madeWith2: NextLogo,
            madeWith3: MongodbLogo,
            madeWith4: FastLogo,
            madeWith5: OpenAI,
            madeWith6: LangChainLogo,
            demo: false,
            demoLink: '',
            code: true,
            codeLink: 'https://github.com/jgx02c/BYOCGPTCoder.git',
            live: false,
            liveLink: '',
        },
        {
            id: 1,
            title: 'Ez Inventor Management',
            imageUrl: project1PNG,
            description: 'For this project, I developed a small application to replace a pre-existing outdated MS-Acess application developed for friend I used to work for before starting Optionality and Finned. This application makes it easier to train employees on how to use the system and uses pre-existing sql data tables. Although still in development, this application will have the ability to pull and process sales from Shopify, Amazon, Ebay and Etsy.',
            madeWith1: TypescriptLogo,
            madeWith2: NextLogo,
            madeWith3: TauriLogo,
            madeWith4: MysqlLogo,
            madeWith5: ScssLogo,
            madeWith6: ShopifyLogo,
            demo: false,
            demoLink: 'www.youtube.com',
            code: true,
            codeLink: 'https://github.com/jgx02c/EzInventoryManagement.git',
            live: false,
            liveLink: '',
        },
        {
            id: 10,
            title: 'Doctors Office Appoiment Booking',
            imageUrl: project10PNG,
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
            demoLink: 'https://www.youtube.com/watch?v=_ELVZCTzOtQ',
            code: true,
            codeLink: 'https://github.com/jgx02c/OpenTune',
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
            id: 11,
            title: 'Pick Up Coin',
            imageUrl: project11PNG,
            description: 'For this project, I created a simple mobile application for CS 4750 and uploaded it to the play store',
            madeWith1: FlutterLogo,
            madeWith2: Blank,
            madeWith3: Blank,
            madeWith4: Blank,
            madeWith5: Blank,
            madeWith6: Blank,
            demo: true,
            demoLink: 'https://www.youtube.com/',
            code: true,
            codeLink: 'https://github.com/jgx02c/cs4750_flutter_app',
            live: true,
            liveLink: 'https://play.google.com/store/games?hl=en_US&gl=US',
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
            madeWith6: DjangoLogo,
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
            madeWith5: OpenAI,
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
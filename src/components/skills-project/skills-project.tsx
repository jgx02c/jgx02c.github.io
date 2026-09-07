import classNames from 'classnames';
import styles from './skills-project.module.scss';

// Import SVGs as images
import reactLogo from '../../assets/svg/react.svg';
import viteLogo from '../../assets/svg/vite.svg';
import typescriptLogo from '../../assets/svg/typescript.svg';
import scssLogo from '../../assets/svg/scss.svg';
import awsLogo from '../../assets/svg/aws.svg';
import htmlfiveLogo from '../../assets/svg/htmlfive.svg';
import javascriptLogo from '../../assets/svg/javascript.svg';
import mongodbLogo from '../../assets/svg/mongodb.svg';
import mysqlLogo from '../../assets/svg/mysql.svg';
import nodejsLogo from '../../assets/svg/nodejs.svg';
import cplusplusLogo from '../../assets/svg/cplusplus.svg';
import openai from '../../assets/svg/openai.svg';
import nextjs from '../../assets/svg/next-js.svg';
import flask from '../../assets/icons/flask.png';
import fastapi from '../../assets/svg/fastapi.svg';
import python from '../../assets/svg/python.svg';
import langchain from '../../assets/svg/langchain-seeklogo.svg';

// Import new logos
import csharpLogo from '../../assets/svg/csharp.svg';
import dockerLogo from '../../assets/svg/docker.svg';
import terraformLogo from '../../assets/terraform.png';
import goLogo from '../../assets/svg/cplusplus.svg'; // Using C++ as fallback
import azureLogo from '../../assets/svg/azure.png';
import redisLogo from '../../assets/svg/redis-logo-svgrepo-com.svg';
import postgresLogo from '../../assets/svg/Postgresql_elephant.svg.png';
import rustLogo from '../../assets/svg/rust.png';
import tauriLogo from '../../assets/svg/tauri.svg';
import solidjsLogo from '../../assets/svg/solidjs.svg';
import tailwindLogo from '../../assets/svg/tailwind-css-svgrepo-com.svg';
import digitaloceanLogo from '../../assets/svg/digitalocean.svg';
import anthropicLogo from '../../assets/svg/anthropic.svg';
import lancedbLogo from '../../assets/svg/lancedb.png';
import helixdbLogo from '../../assets/svg/helixdb.png';

interface Skill {
    logo: string;
    name: string;
}

const skills: Skill[] = [
    // Frontend
    { logo: reactLogo, name: 'React' },
    { logo: nextjs, name: 'Next.js' },
    { logo: solidjsLogo, name: 'SolidJS' },
    { logo: typescriptLogo, name: 'TypeScript' },
    { logo: javascriptLogo, name: 'JavaScript' },
    { logo: htmlfiveLogo, name: 'HTML5' },
    { logo: scssLogo, name: 'SCSS' },
    { logo: tailwindLogo, name: 'Tailwind' },
    { logo: tauriLogo, name: 'Tauri' },
    // Backend & Databases
    { logo: nodejsLogo, name: 'Node.js' },
    { logo: python, name: 'Python' },
    { logo: rustLogo, name: 'Rust' },
    { logo: goLogo, name: 'Go' },
    { logo: flask, name: 'Flask' },
    { logo: fastapi, name: 'FastAPI' },
    { logo: csharpLogo, name: 'C#' },
    { logo: mongodbLogo, name: 'MongoDB' },
    { logo: mysqlLogo, name: 'MySQL' },
    { logo: postgresLogo, name: 'PostgreSQL' },
    { logo: redisLogo, name: 'Redis' },
    { logo: lancedbLogo, name: 'LanceDB' },
    { logo: helixdbLogo, name: 'HelixDB' },
    // Tools & Platforms
    { logo: viteLogo, name: 'Vite' },
    { logo: awsLogo, name: 'AWS' },
    { logo: azureLogo, name: 'Azure' },
    { logo: digitaloceanLogo, name: 'DigitalOcean' },
    { logo: dockerLogo, name: 'Docker' },
    { logo: terraformLogo, name: 'Terraform' },
    { logo: cplusplusLogo, name: 'C++' },
    // AI & ML
    { logo: openai, name: 'OpenAI' },
    { logo: anthropicLogo, name: 'Anthropic' },
    { logo: langchain, name: 'LangChain' },
];

export interface SkillsProjectProps {
    className?: string;
}

export const SkillsProject = ({ className }: SkillsProjectProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.grid}>
                {skills.map((skill) => (
                    <div key={skill.name} className={styles.skill}>
                        <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className={styles.logo}
                            loading="lazy"
                        />
                        <span className={styles.name}>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsProject;

import styles from './ProjectsPage.module.scss';
import { Reveal } from '../components/reveal/reveal';
import { ProjectsGrid } from '../components/projects-grid/projects-grid';
import { GitHubContribution } from '../components/github-contribution/github-contribution';
import { SkillsProject } from '../components/skills-project/skills-project';
import projectsData from '../data/projects.json';
import { Project } from '../types/project';

const projects = projectsData as Project[];

function ProjectsPage() {
    return (
        <div className={styles.root}>
            <Reveal>
                <header className={styles.header}>
                    <span className="eyebrow">Projects</span>
                    <h1 className={styles.title}>
                        Things I&rsquo;ve <em className="serif-accent">shipped.</em>
                    </h1>
                    <p className={styles.subtitle}>
                        Systems tools in Rust, published npm packages, AI applications,
                        games — a cross-section of what I build when something interests me.
                    </p>
                </header>
            </Reveal>

            <section className={styles.section}>
                <ProjectsGrid projects={projects} />
            </section>

            <section className={styles.section}>
                <Reveal>
                    <h2 className={styles.sectionTitle}>GitHub activity</h2>
                    <GitHubContribution personal="jgx02c" work="joshatdia" cutover="2025-09-01" />
                </Reveal>
            </section>

            <section className={styles.section}>
                <Reveal>
                    <h2 className={styles.sectionTitle}>Tools I reach for</h2>
                    <SkillsProject />
                </Reveal>
            </section>
        </div>
    );
}

export default ProjectsPage;

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { project } from '../components/home-project-component/home-project-component';
import { SkillsProject } from "../components/skills-project/skills-project";
import { NavFooter } from "../components/nav-footer/nav-footer";
import { GitHubContribution } from '../components/github-contribution/github-contribution';
import { ProjectsGrid } from '../components/projects-grid/projects-grid';
import projectsData from '../data/projects.json';
import styles from './ProjectsPage.module.scss';

function ProjectsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState<project[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            console.log("Loading projects data...");
            
            // Set projects data with a slight delay to ensure component is mounted
            setTimeout(() => {
                try {
                    // Log the raw data for debugging
                    console.log("Raw projects data:", JSON.stringify(projectsData).substring(0, 200) + "...");
                    
                    // Cast and set the projects data
                    setProjects(projectsData as project[]);
                    setIsLoading(false);
                    console.log("Projects loaded successfully:", projects.length);
                } catch (err) {
                    console.error("Error setting projects data:", err);
                    setError("Failed to process projects data: " + (err instanceof Error ? err.message : String(err)));
                    setIsLoading(false);
                }
            }, 500);
        } catch (err) {
            console.error("Error in projects useEffect:", err);
            setError("Failed to load projects: " + (err instanceof Error ? err.message : String(err)));
            setIsLoading(false);
        }
    }, []);

    // Add this for debugging
    console.log("Current state:", { isLoading, projectsCount: projects.length, hasError: !!error });

    if (error) {
        return (
            <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                <h2>Error Loading Projects</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className={styles.projectsPage}>
            {isLoading ? (
                <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem' }}>
                    Loading projects...
                </div>
            ) : (
                <>
                    {projects.length > 0 ? (
                        <>
                            {/* Header Section */}
                            <div className={styles.headerSection}>
                                <h1 className={styles.title}>My Projects</h1>
                                <p className={styles.subtitle}>
                                    A collection of my latest work in software development and web applications
                                </p>
                            </div>

                            {/* Projects Grid */}
                            <section className={styles.projectsSection}>
                                <ProjectsGrid projects={projects} />
                            </section>
                            
                            {/* GitHub Contribution Graph */}
                            <section className={styles.githubSection}>
                                <h2 className={styles.sectionTitle}>GitHub Activity</h2>
                                <GitHubContribution username="jgx02c" />
                            </section>
                            
                            {/* Skills Section */}
                            <section className={styles.skillsSection}>
                                <h2 className={styles.sectionTitle}>My Skills</h2>
                                <SkillsProject />
                            </section>

                            <NavFooter />
                        </>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '50px' }}>
                            No projects found. Please check your data.
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default ProjectsPage;
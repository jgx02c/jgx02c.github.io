import React from 'react';
import styles from './projects-grid.module.scss';
import { project } from '../home-project-component/home-project-component';
import { ProjectCard } from '../project-card/project-card';

interface ProjectsGridProps {
    projects: project[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    if (!projects || !Array.isArray(projects) || projects.length === 0) {
        return (
            <div className={styles.emptyState}>
                <p>No projects available</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>My Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.projectItem}>
                        <ProjectCard
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            madeWith={project.madeWith}
                            demo={project.demo}
                            demoLink={project.demoLink}
                            code={project.code}
                            codeLink={project.codeLink}
                            live={project.live}
                            liveLink={project.liveLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsGrid; 
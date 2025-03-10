import React, { useEffect, useRef } from 'react';
import styles from './projects-grid.module.scss';
import { project } from '../home-project-component/home-project-component';
import { ProjectCard } from '../project-card/project-card';

interface ProjectsGridProps {
    projects: project[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    const projectsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!projectsRef.current) return;

        const projectItems = projectsRef.current.querySelectorAll(`.${styles.projectItem}`);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '50px'
        });

        projectItems.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    if (!projects?.length) {
        return (
            <div className={styles.emptyState}>
                <p>No projects available</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.grid} ref={projectsRef}>
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
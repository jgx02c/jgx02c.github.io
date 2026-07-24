import styles from './projects-grid.module.scss';
import { Project } from '../../types/project';
import { ProjectCard } from '../project-card/project-card';
import { Reveal } from '../reveal/reveal';

interface ProjectsGridProps {
    projects: Project[];
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
    return (
        <div className={styles.grid}>
            {projects.map((project, index) => (
                <Reveal key={project.id} delay={(index % 3) * 0.06}>
                    <ProjectCard project={project} />
                </Reveal>
            ))}
        </div>
    );
};

export default ProjectsGrid;

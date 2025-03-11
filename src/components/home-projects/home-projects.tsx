import classNames from 'classnames';
import styles from './home-projects.module.scss';
import { project, HomeProjectComponent } from '../home-project-component/home-project-component';
export interface Projects {
    className?: string;
    projects: project[];
}

export const HomeProjects = ({ className, projects }: Projects) => {
    // Add debugging
    console.log(`Rendering HomeProjects with ${projects?.length || 0} projects`);

    // Safely handle missing projects array
    if (!projects || !Array.isArray(projects) || projects.length === 0) {
        return (
            <div className={classNames(styles.root, className, styles.center)}>
                <h1 className={styles.h1MyProjects}>My Projects</h1>
                <div className={styles.list}>
                    <p style={{ textAlign: 'center', padding: '20px' }}>No projects available</p>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(styles.root, className, styles.center)}>
            <h1 className={styles.h1MyProjects}>My Projects</h1> 
            <div className={styles.list}>
                {projects.map((project) => {
                    // Add debugging for each project
                    console.log(`Mapping project: ${project.id} - ${project.title}`);
                    
                    return (
                        <div key={project.id} className={styles.space}>
                            <HomeProjectComponent
                                id={project.id} 
                                className={styles.projectSize}
                                imageUrl={project.imageUrl}
                                madeWith={project.madeWith}
                                description={project.description} 
                                title={project.title}      
                                demo={project.demo}
                                demoLink={project.demoLink}
                                code={project.code}
                                codeLink={project.codeLink}
                                live={project.live}
                                liveLink={project.liveLink}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

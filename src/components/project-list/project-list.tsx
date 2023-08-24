import classNames from 'classnames';
import styles from './project-list.module.scss';
import { Project, project } from '../project/project';
import projectListBoard from '../../_codux/boards/project-list/project-list.board';

export interface Projects {
    className?: string; 
    projects: project[];
    
}

export const ProjectList = ({ className, projects }: Projects) => {
    return (
        <div className={classNames(styles.root, className, styles.center)}>
            <h1 className={styles.h1MyProjects}>My Projects</h1> 
             <div className={styles.list}>
            {projects.map((project) => (
            <div className={styles.space}>
                <Project 
                        key={project.id}
                        id={project.id} 
                        className={styles.projectSize}
                        imageUrl={project.imageUrl}
                        description={project.description} 
                        title={project.title}                />
            </div>
           ))}
         </div>
    </div>
  );
};

export default projectListBoard;
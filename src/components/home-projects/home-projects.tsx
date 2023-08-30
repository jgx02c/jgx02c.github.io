import classNames from 'classnames';
import styles from './home-projects.module.scss';
import { project, HomeProjectComponent} from '../home-project-component/home-project-component';

export interface Projects {
    className?: string;
    projects: project[];
}

export const HomeProjects = ({ className, projects }: Projects) => {
    return (
        <div className={classNames(styles.root, className, styles.center)}>
            <h1 className={styles.h1MyProjects}>My Projects</h1> 
             <div className={styles.list}>
            {projects.map((project) => (
            <div className={styles.space}>
                <HomeProjectComponent
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

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
                        madeWith1={project.madeWith1}
                        madeWith2={project.madeWith2}
                        madeWith3={project.madeWith3}
                        madeWith4={project.madeWith4}
                        madeWith5={project.madeWith5}
                        madeWith6={project.madeWith6}
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
           ))}
         </div>
    </div>
  );
};

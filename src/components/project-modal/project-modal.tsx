import { useEffect } from 'react';
import styles from './project-modal.module.scss';
import { Project } from '../../types/project';
import getLogoImage from '../../utils/logoMapper';
import getProjectImage from '../../utils/imageImporter';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
    isOpen: boolean;
}

export const ProjectModal = ({ project, onClose, isOpen }: ProjectModalProps) => {
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, [onClose]);

    if (!isOpen) return null;

    const projectImage = getProjectImage(project.imageUrl);
    const technologies = project.madeWith.filter((tech) => tech.toLowerCase() !== 'blank');

    return (
        <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.close} onClick={onClose} aria-label="Close">
                    ×
                </button>

                {projectImage && (
                    <div className={styles.imageWrap}>
                        <img src={projectImage} alt={project.title} />
                    </div>
                )}

                <div className={styles.body}>
                    <h2 className={styles.title}>{project.title}</h2>

                    <div className={styles.tech}>
                        {technologies.map((tech) => (
                            <span key={tech} className={styles.techItem}>
                                <img src={getLogoImage(tech)} alt="" />
                                {tech}
                            </span>
                        ))}
                    </div>

                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.links}>
                        {project.live && project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.primary}>
                                View live
                            </a>
                        )}
                        {project.code && project.codeLink && (
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
                                View code
                            </a>
                        )}
                        {project.demo && project.demoLink && (
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
                                {project.demoLabel ?? 'Watch demo'}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;

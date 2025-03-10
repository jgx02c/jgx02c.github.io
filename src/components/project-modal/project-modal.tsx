import React, { useEffect, useRef } from 'react';
import styles from './project-modal.module.scss';
import { project } from '../home-project-component/home-project-component';
import getLogoImage from '../../utils/logoMapper';
import getProjectImage from '../../utils/imageImporter';

interface ProjectModalProps {
    project: project;
    onClose: () => void;
    isOpen: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isOpen }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    
    // Get project image with error handling
    const projectImage = React.useMemo(() => {
        try {
            return getProjectImage(project.imageUrl);
        } catch (error) {
            console.error(`Error loading image for ${project.title}:`, error);
            return '';
        }
    }, [project.imageUrl, project.title]);
    
    useEffect(() => {
        // Handle click outside to close
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        
        // Handle escape key press to close
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [onClose]);
    
    return (
        <div className={styles.modalOverlay}>
            <div ref={modalRef} className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>{project.title}</h2>
                </div>
                
                <div className={styles.modalBody}>
                    <div className={styles.imageContainer}>
                        {projectImage ? (
                            <img
                                src={projectImage}
                                alt={project.title}
                                className={styles.projectImage}
                                onError={(e) => {
                                    console.error(`Failed to load project image for ${project.title}`);
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        ) : (
                            <div className={styles.noImage}>
                                <span>No Image Available</span>
                            </div>
                        )}
                    </div>
                    
                    <div className={styles.projectDetails}>
                        <div className={styles.technologies}>
                            <h3 className={styles.sectionTitle}>Technologies</h3>
                            <div className={styles.techList}>
                                {Array.isArray(project.madeWith) && project.madeWith
                                    .filter(tech => tech.toLowerCase() !== 'blank')
                                    .map((tech, index) => (
                                    <div key={index} className={styles.techItem}>
                                        <img
                                            src={getLogoImage(tech)}
                                            alt={tech}
                                            className={styles.techLogo}
                                            onError={(e) => {
                                                console.error(`Failed to load logo for ${tech}`);
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                        <span className={styles.techName}>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className={styles.description}>
                            <h3 className={styles.sectionTitle}>Description</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.modalFooter}>
                    <div className={styles.links}>
                        {project.demo && project.demoLink && (
                            <a 
                                href={project.demoLink} 
                                className={styles.button} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View Demo
                            </a>
                        )}
                        
                        {project.code && project.codeLink && (
                            <a 
                                href={project.codeLink} 
                                className={styles.button} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View Code
                            </a>
                        )}
                        
                        {project.live && project.liveLink && (
                            <a 
                                href={project.liveLink} 
                                className={styles.button} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View Live
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal; 
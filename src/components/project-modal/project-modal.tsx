import React, { useEffect, useRef } from 'react';
import styles from './project-modal.module.scss';
import { project } from '../home-project-component/home-project-component';
import getLogoImage from '../../utils/logoMapper';
import getProjectImage from '../../utils/imageImporter';
import selfie from '../../assets/selfie.png';
import cppLogo from '../../assets/logos/Cal-Poly-Pomona-Logo.png';
import piclistLogo from '../../assets/logos/PiclistLogo.png';
import byobLogo from '../../assets/logos/BYOB.png';

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
    
    if (!isOpen) return null;

    const filteredTech = project.madeWith.filter(tech => tech.toLowerCase() !== 'blank');

    const getProjectTypeInfo = () => {
        // Default values
        const defaultInfo = {
            logo: selfie,
            text: 'Personal Project'
        };

        if (!project.projectType) {
            return defaultInfo;
        }

        if (project.projectType.toLowerCase() === 'work') {
            if (project.companyName === 'Piclist') {
                return {
                    logo: piclistLogo,
                    text: 'Piclist'
                };
            }
            if (project.companyName === 'BYOB') {
                return {
                    logo: byobLogo,
                    text: 'BYOB'
                };
            }
        }
        if (project.projectType.toLowerCase() === 'school') {
            return {
                logo: cppLogo,
                text: 'School'
            };
        }
        
        return defaultInfo;
    };

    const projectTypeInfo = getProjectTypeInfo();

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div ref={modalRef} className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                
                <div className={styles.modalBody}>
                    <div className={styles.imageSection}>
                        {projectImage && (
                            <img
                                src={projectImage}
                                alt={project.title}
                                className={styles.projectImage}
                            />
                        )}
                    </div>

                    <div className={styles.contentSection}>
                        <div className={styles.headerRow}>
                            <h2 className={styles.title}>{project.title}</h2>
                            <div className={styles.projectTypeIndicator}>
                                <img src={projectTypeInfo.logo} alt={projectTypeInfo.text} />
                                <span>{projectTypeInfo.text}</span>
                            </div>
                        </div>
                        
                        <div className={styles.technologies}>
                            {filteredTech.map((tech, index) => (
                                <div key={index} className={styles.techItem}>
                                    <img
                                        src={getLogoImage(tech)}
                                        alt={tech}
                                    />
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>

                        <p className={styles.description}>{project.description}</p>

                        <div className={styles.links}>
                            {project.live && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.button}
                                >
                                    View Live
                                </a>
                            )}
                            {project.code && (
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.button}
                                >
                                    View Code
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.button}
                                >
                                    Watch Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal; 
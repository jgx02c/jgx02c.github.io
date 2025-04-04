// ProjectCard.tsx
import React, { useState } from 'react';
import styles from './project-card.module.scss';
import { project } from '../home-project-component/home-project-component';
import getLogoImage from '../../utils/logoMapper';
import getProjectImage from '../../utils/imageImporter';
import ProjectModal from '../project-modal/project-modal';
import ModalPortal from '../modal-portal/modal-portal';
import selfie from '../../assets/selfie.png';
import cppLogo from '../../assets/logos/Cal-Poly-Pomona-Logo.png';
import piclistLogo from '../../assets/logos/PiclistLogo.png';
import byobLogo from '../../assets/logos/BYOB.png';

export const ProjectCard: React.FC<project> = (props) => {
    const {
        id,
        title,
        description,
        imageUrl,
        madeWith,
        demo,
        demoLink,
        code,
        codeLink,
        live,
        liveLink,
        projectType,
        companyName,
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter out "Blank" from technologies
    const filteredTech = madeWith.filter(tech => tech && tech.toLowerCase() !== 'blank');

    // Get project image with error handling
    const projectImage = React.useMemo(() => {
        try {
            return getProjectImage(imageUrl);
        } catch (error) {
            console.error(`Error loading image for ${title}:`, error);
            return '';
        }
    }, [imageUrl, title]);

    const openModal = (e: React.MouseEvent) => {
        // Prevent the click from triggering other elements
        e.stopPropagation();
        setIsModalOpen(true);
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Restore scrolling
        document.body.style.overflow = 'auto';
    };

    const getProjectTypeInfo = () => {
        
        if (projectType === 'work') {
            // Handle work projects
            if (companyName === 'Piclist') {
                return {
                    logo: piclistLogo,
                    text: 'Piclist'
                };
            }
            if (companyName === 'BYOB') {
                return {
                    logo: byobLogo,
                    text: 'BYOB'
                };
            }        
        }
        
        if (projectType === 'school') {
            return {
                logo: cppLogo,
                text: 'CPP'
            };
        }
        
        if (projectType === 'personal') {
            return {
                logo: selfie,
                text: 'Personal Project'
            };
        }
        
    };

    // Get the project type info and log it for debugging
    const projectTypeInfo = getProjectTypeInfo();
    console.log(`ProjectCard: ${title} - Type: ${projectType}, Company: ${companyName} → Display: ${projectTypeInfo?.text}`);

    return (
        <>
            <div className={styles.card} onClick={openModal}>
                <div className={styles.imageContainer}>
                    {projectImage ? (
                        <img
                            src={projectImage}
                            alt={title}
                            className={styles.projectImage}
                            onError={(e) => {
                                console.error(`Failed to load project image for ${title}`);
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    ) : (
                        <div className={styles.noImage}>
                            <span>No Image Available</span>
                        </div>
                    )}
                </div>
                
                <div className={styles.content}>
                    {/* Add an extra div to help with debugging */}
                    <div 
                        className={styles.projectTypeIndicator}
                        data-project-type={projectType}
                        data-company-name={companyName || 'none'}
                    >
                        <img 
                            src={projectTypeInfo?.logo} 
                            alt={projectTypeInfo?.text} 
                            className={styles.projectTypeImage} 
                            onError={(e) => {
                                console.error(`Failed to load project type logo for ${title}`);
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                        <span>{projectTypeInfo?.text}</span>
                    </div>
                    
                    <h3 className={styles.title}>{title}</h3>
                    
                    <div className={styles.technologies}>
                        {filteredTech.map((tech, index) => (
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
                    
                    <p className={styles.description}>{description}</p>
                    
                    <div className={styles.links}>
                        <button 
                            className={`${styles.button} ${styles.readMoreButton}`}
                            onClick={openModal}
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            <ModalPortal isOpen={isModalOpen}>
                <ProjectModal 
                    project={props}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </ModalPortal>
        </>
    );
};

export default ProjectCard;
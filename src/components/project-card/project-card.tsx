import { useState } from 'react';
import styles from './project-card.module.scss';
import { Project } from '../../types/project';
import getLogoImage from '../../utils/logoMapper';
import getProjectImage from '../../utils/imageImporter';
import ProjectModal from '../project-modal/project-modal';
import ModalPortal from '../modal-portal/modal-portal';

const TYPE_LABELS: { [key: string]: string } = {
    personal: 'Personal',
    school: 'University',
    work: 'Work',
};

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { title, description, imageUrl, madeWith, projectType, companyName } = project;

    const technologies = madeWith.filter((tech) => tech.toLowerCase() !== 'blank');
    const projectImage = getProjectImage(imageUrl);
    const typeLabel =
        (projectType === 'work' && companyName) || TYPE_LABELS[projectType ?? ''] || 'Personal';

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <button type="button" className={styles.card} onClick={openModal}>
                <div className={styles.imageWrap}>
                    {projectImage ? (
                        <img src={projectImage} alt={title} loading="lazy" />
                    ) : (
                        <div className={styles.noImage}>No preview</div>
                    )}
                    <span className={styles.typeBadge}>{typeLabel}</span>
                </div>

                <div className={styles.body}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>

                    <div className={styles.tech}>
                        {technologies.slice(0, 5).map((tech) => (
                            <img
                                key={tech}
                                src={getLogoImage(tech)}
                                alt={tech}
                                title={tech}
                                className={styles.techLogo}
                            />
                        ))}
                        {technologies.length > 5 && (
                            <span className={styles.techMore}>+{technologies.length - 5}</span>
                        )}
                    </div>
                </div>
            </button>

            <ModalPortal isOpen={isModalOpen}>
                <ProjectModal project={project} isOpen={isModalOpen} onClose={closeModal} />
            </ModalPortal>
        </>
    );
};

export default ProjectCard;

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './sections.module.scss';
import finned from '../../assets/mug.png';
import finnedLogo from '../../assets/finned_logo.png';

export interface section {
    className?: string;
    id: number;
    titleLogo: string;
    subText: string;
    description: string;
    linkText: string;
    link: string;
    image: string;
}

export const Sections = ({ className, id, titleLogo, subText, description, linkText, link, image }: section) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const isElementVisible = rect.top < windowHeight && rect.bottom >= 0;
            setIsVisible(isElementVisible);

            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const distanceFromCenter = elementCenter - viewportCenter;

            const isActiveNow = Math.abs(distanceFromCenter) < windowHeight / 2;
            setIsActive(isActiveNow);

            if (isElementVisible) {
                const parallaxFactor = 0.03;
                const contentParallax = -distanceFromCenter * parallaxFactor;
                const imageParallax = distanceFromCenter * parallaxFactor;

                sectionRef.current.style.setProperty('--parallax-y', `${contentParallax}px`);
                sectionRef.current.style.setProperty('--parallax-img-y', `${imageParallax}px`);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call to set position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // No dependencies
    
    return (
        <div 
            ref={sectionRef}
            className={classNames(
                styles.root, 
                className,
                { [styles.visible]: isVisible },
                { [styles.active]: isActive }
            )}
        >
            <div className={styles.mainDiv}>
                <div className={styles.contentContainer}>
                    <div className={styles.headerSection}>
                        <span className={styles.spanLogo}>
                            <img src={titleLogo} alt="" className={styles.imgLogo} />
                        </span>
                        <div className={styles.subtextDiv}>
                            <h3 className={styles.subText}>{subText}</h3>
                        </div>
                    </div>
                    <div className={styles.divParagraph}>
                        <p className={styles.paragraph}>{description}
                            <span className={styles.spanlink}>
                                <a href={link} className={styles.linkClass}>
                                    {linkText}
                                    <svg 
                                        className={styles.arrowImg} 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
                <div className={styles.divImg}>
                    <img src={image} alt="" className={styles.image} />
                </div>
            </div>
            <div className={styles.progressIndicator}>
                <div className={styles.progressDot}></div>
            </div>
        </div>
    );
};

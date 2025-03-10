import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './sections.module.scss';
import finned from '../../assets/mug.png';
import finnedLogo from '../../assets/finned_logo.png';
import reccord from '../../assets/record.png';
import arrow from '../../assets/right-arrow.png'

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
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update visibility state when element enters viewport
                setIsVisible(entry.isIntersecting);
                
                // Set active state when element is centered in viewport
                if (entry.isIntersecting) {
                    const rect = entry.boundingClientRect;
                    const windowHeight = window.innerHeight;
                    const elementCenter = rect.top + rect.height / 2;
                    const viewportCenter = windowHeight / 2;
                    
                    setIsActive(
                        Math.abs(elementCenter - viewportCenter) < windowHeight / 4
                    );
                } else {
                    setIsActive(false);
                }
            },
            {
                root: null,
                threshold: [0.1, 0.5, 0.9],
                rootMargin: '-10% 0px -10% 0px'
            }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    // Track scroll position for parallax effect
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrollProgress = 1 - (rect.top + rect.height / 2) / windowHeight;
            
            // When element is in optimal viewing position
            if (scrollProgress > 0.1 && scrollProgress < 0.9) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
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
                            <img src={reccord} alt="" className={styles.preLogoImage} />
                            <img src={titleLogo} alt="" className={styles.imgLogo} />
                        </span>
                        <div className={styles.subtextDiv}>
                            <h3 className={styles.subText}>{subText}</h3>
                        </div>
                    </div>
                    <div className={styles.divParagraph}>
                        <p className={styles.paragraph}>{description}
                            <span className={styles.spanlink}>
                                <a href={link} className={styles.linkClass}>{linkText}</a>
                                <img src={arrow} alt="" className={styles.arrowImg} />
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

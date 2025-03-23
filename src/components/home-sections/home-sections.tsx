import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './home-sections.module.scss';
import { Sections, section } from '../sections/sections';
import { Line } from '../line/line';

export interface HomeSectionsProps {
    className?: string;
    sections: section[];
}

export const HomeSections = ({ className, sections }: HomeSectionsProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Initialize smooth scrolling
    useEffect(() => {
        // Optional: Add a scroll listener for custom effects
        const handleScroll = () => {
            // Additional scroll effects can be added here
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div ref={containerRef} className={classNames(styles.root, className)}>
            <div className={styles.verticalLine}></div>
            <div className={styles.sectionContainer}>
                {sections.map((section) => (
                    <Sections
                        key={section.id}
                        id={section.id}
                        titleLogo={section.titleLogo}
                        subText={section.subText}
                        description={section.description}
                        linkText={section.linkText}
                        link={section.link}
                        image={section.image}
                    />
                ))}
            </div>
        </div>
    );
};

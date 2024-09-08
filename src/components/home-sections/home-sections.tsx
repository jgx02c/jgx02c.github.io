import React from 'react'; // Add this line at the top of your file
import classNames from 'classnames';
import styles from './home-sections.module.scss';
import { Sections, section } from '../sections/sections';
import { Line } from '../line/line';

export interface HomeSectionsProps {
    className?: string;
    sections: section[];
}

export const HomeSections = ({ className, sections }: HomeSectionsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
                {sections.map((section) => (
                    <React.Fragment key={section.id}>
                        <Sections
                            id={section.id}
                            titleLogo={section.titleLogo}
                            subText={section.subText}
                            description={section.description}
                            linkText={section.linkText}
                            link={section.link}
                            image={section.image}
                        />
                        <Line />
                    </React.Fragment>
                ))}
        </div>
    );
};

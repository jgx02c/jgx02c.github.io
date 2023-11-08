import classNames from 'classnames';
import styles from './home-sections.module.scss';
import { Sections, section } from '../sections/sections';
import { Line } from '../line/line';

export interface HomeSectionsProps {
    className?: string;
    sections: section[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const HomeSections = ({ className, sections }: HomeSectionsProps) => {
    return <div className={classNames(styles.root, className)}>
        <div>
            {sections.map((section) =>
                <div>
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
                <Line />
                </div>
            )}
           
        </div>
    </div>;
};

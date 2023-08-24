import classNames from 'classnames';
import styles from './project.module.scss';

export interface project {
    className?: string;
    id: number;
    title: string
    description: string;
    imageUrl: string
}


export const Project = ({ className, id, imageUrl, title, description }: project) => {

    return (
        <div key={id} className={classNames(className, styles.root)}>
            <span className={styles.allignProj}>
                <img
                    src={imageUrl}
                    className={styles.imgClass}
                />
                <div>
                    <h1 className={styles.projH1}>{title}</h1>
                    <span className={styles.projParagraph}>
                        <h3>Made with:</h3>
                    </span>
                    <p className={styles.projParagraph}>{description}</p>
                    <span className={styles.buttonRowProj}>
                        <button className={styles.projButton}>Demo</button>
                        <button className={styles.projButton}>Code</button>
                        <button className={styles.projButton}>Live</button>
                    </span>
                </div>
            </span>
        </div>
    );
};

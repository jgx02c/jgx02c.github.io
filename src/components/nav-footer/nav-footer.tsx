import classNames from 'classnames';
import styles from './nav-footer.module.scss';
import React from 'react';
import resume from '../../assets/Joshua Goodman.pdf';

export interface NavFooterProps {
    className?: string;
}

const FileDownload: React.FC<{ fileUrl: string, fileName: string }> = ({ fileUrl, fileName }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <a onClick={handleDownload} className={styles.linkClass}>
            Resume
        </a>
    );
};

export const NavFooter: React.FC<NavFooterProps> = ({ className }) => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:goodman.joshua02@gmail.com';
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <h1 className={styles.contactClass}>Contact</h1>
                <span className={styles.linksSpan}>
                    <a href="https://www.instagram.com/jgx02/" className={styles.linkClass}>Instagram</a>
                    <a href="https://www.linkedin.com/in/joshuajgoodman" className={styles.linkClass}>LinkedIn</a>
                    <a onClick={handleEmailClick} className={styles.linkClass}>Email</a>
                    <FileDownload fileUrl={resume} fileName="Joshua Goodman CV.pdf" />
                </span>
            </div>
        </div>
    );
};

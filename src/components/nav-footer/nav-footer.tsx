import classNames from 'classnames';
import styles from './nav-footer.module.scss';
import React from 'react';

export interface NavFooterProps {
    className?: string;
}

const CVLink: React.FC = () => {
    const handleCVClick = () => {
        // Using the export/download URL format for Google Docs
        const docId = '1XNtqMK-W0VmqscDLTBxo_3hFB4gC1uKtl-cc3yRL9So';
        const downloadUrl = `https://docs.google.com/document/d/${docId}/export?format=pdf`;
        window.open(downloadUrl, '_blank');
    };

    return (
        <a onClick={handleCVClick} className={styles.linkClass}>
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
            <div className={styles.divider} />
            <div className={styles.container}>
                <span className={styles.linksSpan}>
                    <a href="https://www.instagram.com/jgx02/" className={styles.linkClass}>Instagram</a>
                    <a href="https://www.linkedin.com/in/joshuajgoodman" className={styles.linkClass}>LinkedIn</a>
                    <a onClick={handleEmailClick} className={styles.linkClass}>Email</a>
                    <CVLink />
                </span>
            </div>
        </div>
    );
};

export default NavFooter;

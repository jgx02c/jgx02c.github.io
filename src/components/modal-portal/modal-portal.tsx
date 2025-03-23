import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal-portal.module.scss';

interface ModalPortalProps {
    children: React.ReactNode;
    isOpen: boolean;
}

export const ModalPortal: React.FC<ModalPortalProps> = ({ children, isOpen }) => {
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
    
    useEffect(() => {
        // Find or create modal root element
        let modalRootEl = document.getElementById('modal-root');
        
        if (!modalRootEl) {
            modalRootEl = document.createElement('div');
            modalRootEl.id = 'modal-root';
            document.body.appendChild(modalRootEl);
        }
        
        setModalRoot(modalRootEl);
        
        // We don't need to remove the modal root on component unmount
        // It will be shared between all modals
        return () => {};
    }, []);

    // Don't render anything if modal root doesn't exist or modal is not open
    if (!modalRoot || !isOpen) return null;
    
    return createPortal(
        <div className={styles.modalPortalInstance}>
            {children}
        </div>,
        modalRoot
    );
};

export default ModalPortal; 
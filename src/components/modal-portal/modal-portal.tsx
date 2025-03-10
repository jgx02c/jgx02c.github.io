import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

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
        
        // Clean up
        return () => {
            if (modalRootEl && modalRootEl.childNodes.length === 0) {
                document.body.removeChild(modalRootEl);
            }
        };
    }, []);
    
    if (!modalRoot || !isOpen) return null;
    
    return createPortal(children, modalRoot);
};

export default ModalPortal; 
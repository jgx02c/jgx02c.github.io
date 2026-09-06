import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal-portal.module.scss';

interface ModalPortalProps {
    children: React.ReactNode;
    isOpen: boolean;
}

/**
 * Ensures a single `<div id="modal-root">` exists at the end of `<body>` and
 * portals its children into it.
 *
 * The lookup runs once, lazily, inside the state initializer — that keeps it
 * off the render-then-effect-then-rerender path (which triggered the
 * `react-hooks/set-state-in-effect` rule) and avoids the flash of empty state
 * on the first paint.
 */
const ensureModalRoot = (): HTMLElement | null => {
    if (typeof document === 'undefined') return null;
    const existing = document.getElementById('modal-root');
    if (existing) return existing;
    const el = document.createElement('div');
    el.id = 'modal-root';
    document.body.appendChild(el);
    return el;
};

export const ModalPortal: React.FC<ModalPortalProps> = ({ children, isOpen }) => {
    const [modalRoot] = useState<HTMLElement | null>(ensureModalRoot);

    if (!modalRoot || !isOpen) return null;

    return createPortal(
        <div className={styles.modalPortalInstance}>{children}</div>,
        modalRoot,
    );
};

export default ModalPortal;

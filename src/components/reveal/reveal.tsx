import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

export interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

/** Fades content up as it scrolls into view. Respects prefers-reduced-motion. */
export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

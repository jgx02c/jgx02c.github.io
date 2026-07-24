import styles from './mini-card.module.scss';

export type CardVariant =
    | 'citations'
    | 'summary'
    | 'checklist'
    | 'redline'
    | 'billable'
    | 'nextsteps';

interface MiniCardProps {
    variant: CardVariant;
}

const CheckIcon = () => (
    <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M13.5 4.5 6.5 11.5 3 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FileIcon = () => (
    <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4 1.5h5L13 5.5V14a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 3 14V2a.5.5 0 0 1 1-.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 1.5V5.5H13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
);

const ArrowIcon = () => (
    <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/** Compact replicas of Dialogica's real product response blocks. */
export const MiniCard = ({ variant }: MiniCardProps) => {
    switch (variant) {
        case 'citations':
            return (
                <div className={styles.card}>
                    <span className={styles.eyebrow}>Sources</span>
                    <div className={styles.sourceRow}>
                        <span className={styles.sourceName}>Meridian_MSA_v3.docx</span>
                        <span className={styles.pin}>§ 8.2</span>
                    </div>
                    <div className={styles.sourceRow}>
                        <span className={styles.sourceName}>Playbook — Liability</span>
                        <span className={styles.pin}>p. 4</span>
                    </div>
                </div>
            );
        case 'summary':
            return (
                <div className={styles.card}>
                    <div className={styles.head}>
                        <h5 className={styles.title}>Summary</h5>
                        <span className={styles.confidence}>high confidence</span>
                    </div>
                    <ul className={styles.bullets}>
                        <li>Liability cap below playbook floor</li>
                        <li>Auto-renew clause missing notice window</li>
                    </ul>
                </div>
            );
        case 'checklist':
            return (
                <div className={styles.card}>
                    <h5 className={styles.title}>Review checklist</h5>
                    <ul className={styles.checklist}>
                        <li data-done="true">
                            <span className={styles.dot} data-done="true"><CheckIcon /></span>
                            Indemnification reviewed
                        </li>
                        <li data-done="true">
                            <span className={styles.dot} data-done="true"><CheckIcon /></span>
                            Governing law confirmed
                        </li>
                        <li>
                            <span className={styles.dot} />
                            Escalate cap to partner
                        </li>
                    </ul>
                </div>
            );
        case 'redline':
            return (
                <div className={styles.card}>
                    <div className={styles.fileRow}>
                        <span className={styles.fileIcon}><FileIcon /></span>
                        <div>
                            <span className={styles.fileName}>Meridian_MSA_redline.docx</span>
                            <span className={styles.fileSub}>Redline document created</span>
                        </div>
                    </div>
                    <button type="button" className={styles.action} tabIndex={-1}>
                        Show in Dashboard
                    </button>
                </div>
            );
        case 'billable':
            return (
                <div className={styles.card}>
                    <span className={styles.eyebrow}>Time logged</span>
                    <div className={styles.billing}>
                        <span className={styles.hours}>0.4h</span>
                        <span className={styles.matter}>Meridian — contract review</span>
                    </div>
                </div>
            );
        case 'nextsteps':
            return (
                <div className={styles.card}>
                    <h5 className={styles.title}>Next steps</h5>
                    <ul className={styles.steps}>
                        <li><span className={styles.arrow}><ArrowIcon /></span> Send redline to opposing counsel</li>
                        <li><span className={styles.arrow}><ArrowIcon /></span> Calendar the renewal notice date</li>
                    </ul>
                </div>
            );
        default:
            return null;
    }
};

export default MiniCard;

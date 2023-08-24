import classNames from 'classnames';
import styles from './contact.module.scss';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <h1 className={styles.contactMeClass}>Contact Me</h1>
                <div className={styles.divContacts}>
                    <span className={styles.spanContactsClass}>
                        <div className={styles.contactsClass}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                alt=""
                                className={styles.imgContacts}
                            />
                            <h1 className={styles.h1contacts}>Heading 1</h1>
                            <h2 className={styles.h2contacts}>Heading 2</h2>
                        </div>
                        <div className={styles.contactsClass}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                alt=""
                                className={styles.imgContacts}
                            />
                            <h1 className={styles.h1contacts}>Heading 1</h1>
                            <h2 className={styles.h2contacts}>Heading 2</h2>
                        </div>
                        <div className={styles.contactsClass}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                alt=""
                                className={styles.imgContacts}
                            />
                            <h1 className={styles.h1contacts}>Heading 1</h1>
                            <h2 className={styles.h2contacts}>Heading 2</h2>
                        </div>
                    </span>
                </div>
            </div>
            <div className={styles.contactFormDiv}>
                <form>
                    <label>First name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Last name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

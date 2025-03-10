import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './about.module.scss';
import josh from '../../assets/selfie.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xjkyvwrq', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('sent');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMaster}>
                {/* About Section */}
                <section className={styles.aboutSection}>
                    <div className={styles.divIntro}>
                        <img src={josh} alt="Joshua Goodman" className={styles.imageClass} />
                        <div className={styles.divText}>
                            <h1 className={styles.title}>About Me</h1>
                            <p className={styles.paragraph}>
                                Starting to work with computers in 8th grade by building websites, learning C++, and eventually having a small internship working with computer hardware 1 year later, I found myself set on a path chasing computers. Throughout high school, I self-studied computer hardware, I.T. Support, and Computer Programming. At 15 years of age, I found myself repairing iPhones in class, refurbishing MacBooks for the secondary market, and learning about servers by setting up my own network in my garage. Starting my first company at age 19 with the intention to help others with their computer problems, web development, and other business needs, I found success early on.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className={styles.contactSection}>
                    <h2 className={styles.contactTitle}>Get in Touch</h2>
                    
                    {/* Social Links */}
                    <div className={styles.socialLinks}>
                        <a href="https://github.com/jgx02c" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/joshuajgoodman/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="mailto:joshua.goodman02@gmail.com" className={styles.socialLink}>
                            <FaEnvelope /> Email
                        </a>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Your name"
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Your message..."
                                rows={4}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={styles.submitButton}
                            disabled={formStatus === 'sending' || formStatus === 'sent'}
                        >
                            {formStatus === 'sending' ? 'Sending...' : 
                             formStatus === 'sent' ? 'Message Sent!' : 
                             'Send Message'}
                        </button>

                        {formStatus === 'error' && (
                            <p className={styles.errorMessage}>
                                Failed to send message. Please try again or contact directly via email.
                            </p>
                        )}
                    </form>
                </section>
            </div>
        </div>
    );
};

export default About;

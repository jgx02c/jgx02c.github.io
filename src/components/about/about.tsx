import React, { useState } from 'react';
import styles from './about.module.scss';
import { Reveal } from '../reveal/reveal';
import josh from '../../assets/selfie.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const About = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');

        const form = e.currentTarget;
        try {
            const response = await fetch('https://formspree.io/f/xjkyvwrq', {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' },
            });
            if (!response.ok) throw new Error('Failed to send message');
            setFormStatus('sent');
            form.reset();
        } catch {
            setFormStatus('error');
        }
    };

    return (
        <div className={styles.root}>
            <Reveal>
                <header className={styles.header}>
                    <span className="eyebrow">About</span>
                    <h1 className={styles.title}>
                        The path to <em className="serif-accent">Dialogica.</em>
                    </h1>
                </header>
            </Reveal>

            <Reveal>
                <section className={styles.bio}>
                    <img src={josh} alt="Joshua Goodman" className={styles.photo} />
                    <div className={styles.bioText}>
                        <p>
                            I started with computers in 8th grade — building websites, learning
                            C++, and landing a hardware internship a year later. Through high
                            school I was repairing iPhones in class, refurbishing MacBooks for
                            the secondary market, and running my own server rack out of the
                            garage.
                        </p>
                        <p>
                            At 19 I founded Optionality, a technology consultancy for small
                            businesses, and later Finned, a product brand with a design patent
                            to its name. Along the way I shipped full-stack products at
                            startups like Piclist and BYOB, published an npm package, and
                            worked on LLM evaluations at Mercor.
                        </p>
                        <p>
                            Today I&rsquo;m the co-founder &amp; CTO of{' '}
                            <a href="https://www.dialogicaai.com" target="_blank" rel="noopener noreferrer">
                                Dialogica AI
                            </a>
                            , where we&rsquo;re building a new class of legal cognition — a
                            voice-native assistant built by lawyers, for lawyers, crafted in
                            Santa Monica.
                        </p>
                    </div>
                </section>
            </Reveal>

            <Reveal>
                <section className={styles.contact}>
                    <h2 className={styles.contactTitle}>Get in touch</h2>

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

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formRow}>
                            <div className={styles.field}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required placeholder="Your name" />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required placeholder="you@example.com" />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required placeholder="What are you building?" rows={5} />
                        </div>

                        <button
                            type="submit"
                            className={styles.submit}
                            disabled={formStatus === 'sending' || formStatus === 'sent'}
                        >
                            {formStatus === 'sending'
                                ? 'Sending…'
                                : formStatus === 'sent'
                                  ? 'Message sent'
                                  : 'Send message'}
                        </button>

                        {formStatus === 'error' && (
                            <p className={styles.error}>
                                Something went wrong — email me directly at
                                joshua.goodman02@gmail.com.
                            </p>
                        )}
                    </form>
                </section>
            </Reveal>
        </div>
    );
};

export default About;

import React from 'react';
import styles from './github-contribution.module.scss';

interface GitHubContributionProps {
    username: string;
}

export const GitHubContribution: React.FC<GitHubContributionProps> = ({ username }) => {
    const iframeUrl = `https://ghchart.rshah.org/${username}`;
    
    // Hardcoded value based on what you mentioned
    const contributionsCount = 1093;
    
    return (
        <div className={styles.container}>
            <div className={styles.contributionWrapper}>
                <div className={styles.contributionCount}>
                    {contributionsCount.toLocaleString()} contributions in the last year
                </div>
                <img 
                    src={iframeUrl} 
                    alt={`${username}'s GitHub Contribution Graph`} 
                    className={styles.contributionChart}
                />
            </div>
            <div className={styles.githubDetails}>
                <p className={styles.description}>
                    This graph shows my coding activity on GitHub. Each square represents a day, and the color 
                    intensity indicates the number of contributions made on that day.
                </p>
                <div className={styles.githubLink}>
                    <a 
                        href={`https://github.com/${username}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Visit My GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GitHubContribution; 
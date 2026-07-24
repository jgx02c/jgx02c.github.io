import styles from './github-contribution.module.scss';

interface GitHubContributionProps {
    usernames: string[];
}

export const GitHubContribution = ({ usernames }: GitHubContributionProps) => {
    return (
        <div className={styles.container}>
            <p className={styles.note}>
                Combined activity across my accounts — day-job and side work don&rsquo;t always
                share a login.
            </p>
            <div className={styles.charts}>
                {usernames.map((username) => (
                    <div key={username} className={styles.chart}>
                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.handle}
                        >
                            @{username} →
                        </a>
                        <img
                            src={`https://ghchart.rshah.org/7c1d17/${username}`}
                            alt={`${username}'s GitHub contribution graph`}
                            className={styles.graph}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GitHubContribution;

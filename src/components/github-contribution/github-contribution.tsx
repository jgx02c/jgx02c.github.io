import styles from './github-contribution.module.scss';

interface GitHubContributionProps {
    username: string;
}

export const GitHubContribution = ({ username }: GitHubContributionProps) => {
    return (
        <div className={styles.container}>
            <img
                src={`https://ghchart.rshah.org/2563eb/${username}`}
                alt={`${username}'s GitHub contribution graph`}
                className={styles.chart}
                loading="lazy"
            />
            <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                github.com/{username} →
            </a>
        </div>
    );
};

export default GitHubContribution;

import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './github-contribution.module.scss';

const PERSONAL = 'jgx02c';
const WORK = 'joshatdia';
/** Personal graph ends here; work account owns this date onward. */
const CUTOVER = '2025-09-01';
const API = 'https://github-contributions-api.jogruber.de/v4';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

type DayCount = { date: string; count: number };
type ApiResponse = { contributions: DayCount[] };
type RangeKey = 'last' | `${number}`;

interface GitHubContributionProps {
    personal?: string;
    work?: string;
    cutover?: string;
}

function toISO(date: Date): string {
    return date.toISOString().slice(0, 10);
}

function utcDate(iso: string): Date {
    const [year, month, day] = iso.split('-').map(Number);
    return new Date(Date.UTC(year, month - 1, day));
}

function addDays(iso: string, days: number): string {
    const date = utcDate(iso);
    date.setUTCDate(date.getUTCDate() + days);
    return toISO(date);
}

function weekdaySunday(iso: string): number {
    return utcDate(iso).getUTCDay();
}

function formatDay(iso: string): string {
    return utcDate(iso).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    });
}

function lastYearBounds(today = new Date()): { start: string; end: string } {
    const end = toISO(today);
    const start = addDays(end, -364);
    return { start, end };
}

function yearBounds(year: number): { start: string; end: string } {
    return { start: `${year}-01-01`, end: `${year}-12-31` };
}

function weeksInRange(start: string, end: string): string[][] {
    let cursor = addDays(start, -weekdaySunday(start));
    const weeks: string[][] = [];

    while (cursor <= end) {
        const week: string[] = [];
        for (let day = 0; day < 7; day += 1) {
            week.push(cursor);
            cursor = addDays(cursor, 1);
        }
        weeks.push(week);
    }

    return weeks;
}

function contributionLevel(count: number, max: number): 0 | 1 | 2 | 3 | 4 {
    if (count <= 0) return 0;
    if (max <= 4) {
        return Math.min(count, 4) as 1 | 2 | 3 | 4;
    }
    const ratio = count / max;
    if (ratio > 0.75) return 4;
    if (ratio > 0.5) return 3;
    if (ratio > 0.25) return 2;
    return 1;
}

function mergeContributions(
    personal: DayCount[],
    work: DayCount[],
    cutover: string,
): Map<string, number> {
    const merged = new Map<string, number>();

    for (const day of personal) {
        if (day.date < cutover) merged.set(day.date, day.count);
    }
    for (const day of work) {
        if (day.date >= cutover) merged.set(day.date, day.count);
    }

    return merged;
}

async function fetchContributions(username: string): Promise<DayCount[]> {
    const response = await fetch(`${API}/${username}?y=all`);
    if (!response.ok) {
        throw new Error(`Could not load @${username} (${response.status})`);
    }
    const data = (await response.json()) as ApiResponse;
    return data.contributions ?? [];
}

export const GitHubContribution = ({
    personal = PERSONAL,
    work = WORK,
    cutover = CUTOVER,
}: GitHubContributionProps) => {
    const [counts, setCounts] = useState<Map<string, number> | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [range, setRange] = useState<RangeKey>('last');

    useEffect(() => {
        let cancelled = false;
        const cacheKey = `gh-contrib:${personal}:${work}:${cutover}`;

        try {
            const raw = localStorage.getItem(cacheKey);
            if (raw) {
                const parsed = JSON.parse(raw) as { at: number; entries: [string, number][] };
                if (Date.now() - parsed.at < 24 * 60 * 60 * 1000) {
                    setCounts(new Map(parsed.entries));
                }
            }
        } catch {
            // Ignore unreadable cache and fetch fresh.
        }

        Promise.all([fetchContributions(personal), fetchContributions(work)])
            .then(([personalDays, workDays]) => {
                if (cancelled) return;
                const merged = mergeContributions(personalDays, workDays, cutover);
                setCounts(merged);
                setError(null);
                try {
                    localStorage.setItem(
                        cacheKey,
                        JSON.stringify({ at: Date.now(), entries: [...merged] }),
                    );
                } catch {
                    // Private mode / quota — the graph still renders.
                }
            })
            .catch((reason: unknown) => {
                if (cancelled) return;
                setError(reason instanceof Error ? reason.message : 'Could not load GitHub activity.');
            });

        return () => {
            cancelled = true;
        };
    }, [personal, work, cutover]);

    const years = useMemo(() => {
        if (!counts) return [];
        const found = new Set<number>();
        for (const date of counts.keys()) {
            found.add(Number(date.slice(0, 4)));
        }
        return [...found].sort((a, b) => b - a);
    }, [counts]);

    const bounds = useMemo(() => {
        if (range === 'last') return lastYearBounds();
        return yearBounds(Number(range));
    }, [range]);

    const weeks = useMemo(() => weeksInRange(bounds.start, bounds.end), [bounds]);

    const { total, max } = useMemo(() => {
        if (!counts) return { total: 0, max: 0 };
        let sum = 0;
        let peak = 0;
        for (const [date, count] of counts) {
            if (date < bounds.start || date > bounds.end) continue;
            sum += count;
            if (count > peak) peak = count;
        }
        return { total: sum, max: peak };
    }, [counts, bounds]);

    const monthLabels = useMemo(() => {
        return weeks.map((week, index) => {
            const inRange = week.find((date) => date >= bounds.start && date <= bounds.end);
            if (!inRange) return '';
            const isFirstWeek = index === 0;
            const containsFirst = week.some(
                (date) => date >= bounds.start && date <= bounds.end && date.endsWith('-01'),
            );
            if (!isFirstWeek && !containsFirst) return '';
            return MONTHS[Number(inRange.slice(5, 7)) - 1];
        });
    }, [weeks, bounds]);

    const rangeLabel = range === 'last' ? 'the last year' : range;

    return (
        <div className={styles.container}>
            <p className={styles.note}>
                One graph, two logins: <a href={`https://github.com/${personal}`}>@{personal}</a> through
                August 2025, then <a href={`https://github.com/${work}`}>@{work}</a> from September 2025
                on.
            </p>

            {years.length > 0 && (
                <div className={styles.toolbar}>
                    <p className={styles.total}>
                        {total.toLocaleString()} contribution{total === 1 ? '' : 's'} in {rangeLabel}
                    </p>
                    <div className={styles.years} role="tablist" aria-label="Contribution year">
                        <button
                            type="button"
                            role="tab"
                            aria-selected={range === 'last'}
                            className={classNames(styles.year, { [styles.yearActive]: range === 'last' })}
                            onClick={() => setRange('last')}
                        >
                            Last year
                        </button>
                        {years.map((year) => {
                            const key = String(year) as RangeKey;
                            return (
                                <button
                                    key={year}
                                    type="button"
                                    role="tab"
                                    aria-selected={range === key}
                                    className={classNames(styles.year, {
                                        [styles.yearActive]: range === key,
                                    })}
                                    onClick={() => setRange(key)}
                                >
                                    {year}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {error && !counts && <p className={styles.error}>{error}</p>}

            {!counts && !error && <div className={styles.skeleton} aria-hidden="true" />}

            {counts && (
                <div className={styles.scroll}>
                    <div
                        className={styles.calendar}
                        style={{ '--weeks': String(weeks.length) } as CSSProperties}
                    >
                        <div className={styles.months}>
                            {monthLabels.map((label, index) => (
                                <span key={index}>{label}</span>
                            ))}
                        </div>
                        <div className={styles.weekdays}>
                            {WEEKDAYS.map((label, index) => (
                                <span key={index}>{label}</span>
                            ))}
                        </div>
                        <div className={styles.weeks}>
                            {weeks.map((week) =>
                                week.map((date) => {
                                    const inRange = date >= bounds.start && date <= bounds.end;
                                    const count = inRange ? (counts.get(date) ?? 0) : 0;
                                    const level = inRange ? contributionLevel(count, max) : -1;
                                    return (
                                        <span
                                            key={date}
                                            className={styles.day}
                                            data-level={level}
                                            title={
                                                inRange
                                                    ? `${count} contribution${count === 1 ? '' : 's'} on ${formatDay(date)}`
                                                    : undefined
                                            }
                                        />
                                    );
                                }),
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.legend}>
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((level) => (
                    <span key={level} className={styles.day} data-level={level} />
                ))}
                <span>More</span>
            </div>
        </div>
    );
};

export default GitHubContribution;

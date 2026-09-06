import { useSyncExternalStore } from 'react';

/**
 * Reactive `matchMedia` hook.
 *
 * Uses `useSyncExternalStore` so the initial value is read synchronously from
 * the browser (avoiding a stale-then-correct render) and changes propagate via
 * the standard subscribe/unsubscribe contract — no `setState` inside an effect.
 * SSR-safe: the server snapshot returns `false`.
 */
export function useMediaQuery(query: string): boolean {
    const subscribe = (onChange: () => void) => {
        const mql = window.matchMedia(query);
        mql.addEventListener('change', onChange);
        return () => mql.removeEventListener('change', onChange);
    };

    const getSnapshot = () => window.matchMedia(query).matches;
    const getServerSnapshot = () => false;

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

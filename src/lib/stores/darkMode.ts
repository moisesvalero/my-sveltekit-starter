import { writable } from 'svelte/store';

const isDark =
  typeof localStorage !== 'undefined' && localStorage.getItem('theme') === 'dark';

export const dark = writable(isDark);

export function toggleDark() {
  dark.update((d) => {
    const next = !d;
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', next);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    }
    return next;
  });
}

export function initDarkMode() {
  if (typeof document === 'undefined') return;
  const saved = localStorage.getItem('theme');
  if (
    saved === 'dark' ||
    (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    dark.set(true);
  }
}

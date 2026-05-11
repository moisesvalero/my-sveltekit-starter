import { writable } from 'svelte/store';

const defaultValue =
  typeof window !== 'undefined'
    ? localStorage.getItem('theme') === 'dark'
    : false;

export const dark = writable(defaultValue);

let initialized = false;

export function toggleDark() {
  dark.update((d) => {
    const next = !d;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    }
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', next);
    }
    return next;
  });
}

export function initDarkMode() {
  if (initialized) return;
  initialized = true;
  if (typeof document === 'undefined') return;

  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    dark.set(true);
  }
}

import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultValue = browser ? localStorage.getItem('theme') === 'dark' : false;

export const dark = writable(defaultValue);

export function toggleDark() {
  dark.update((d) => {
    const next = !d;
    if (browser) {
      localStorage.setItem('theme', next ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', next);
    }
    return next;
  });
}

export function initDarkMode() {
  if (!browser) return;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    dark.set(true);
  }
}

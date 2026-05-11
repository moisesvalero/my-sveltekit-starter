let darkMode = $state(
  typeof localStorage !== 'undefined' && localStorage.getItem('theme') === 'dark'
);

export function isDark() {
  return darkMode;
}

export function toggleDark() {
  darkMode = !darkMode;
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', darkMode);
  }
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }
}

export function initDarkMode() {
  if (typeof document === 'undefined') return;
  const saved = localStorage.getItem('theme');
  if (
    saved === 'dark' ||
    (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    darkMode = true;
    document.documentElement.classList.add('dark');
  }
}

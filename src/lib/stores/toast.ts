import { writable } from 'svelte/store';

type ToastType = 'success' | 'error' | 'info' | 'warning';

type Toast = {
  id: string;
  message: string;
  type: ToastType;
};

let count = 0;

export const toasts = writable<Toast[]>([]);

export function toast(message: string, type: ToastType = 'info', duration = 4000) {
  const id = `t${++count}`;
  toasts.update((t) => [...t, { id, message, type }]);
  if (duration > 0) {
    setTimeout(() => dismissToast(id), duration);
  }
}

export function dismissToast(id: string) {
  toasts.update((t) => t.filter((item) => item.id !== id));
}

export const toastFn = {
  success: (m: string) => toast(m, 'success'),
  error: (m: string) => toast(m, 'error'),
  info: (m: string) => toast(m, 'info'),
  warning: (m: string) => toast(m, 'warning')
};

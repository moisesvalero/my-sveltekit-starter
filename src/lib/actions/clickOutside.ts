import type { Action } from 'svelte/action';

export const clickOutside: Action<HTMLElement, () => void> = (node, callback) => {
  let currentCallback = callback;

  function handleClick(event: MouseEvent) {
    if (!node.contains(event.target as Node)) {
      currentCallback?.();
    }
  }

  document.addEventListener('click', handleClick, true);

  return {
    update(newCallback: () => void) {
      currentCallback = newCallback;
    },
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
};

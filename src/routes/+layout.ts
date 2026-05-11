import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
  return {
    year: new Date().getFullYear()
  };
};

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
  return {
    ...data,
    year: new Date().getFullYear()
  };
};

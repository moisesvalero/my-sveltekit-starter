import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const now = new Date();

  return {
    serverTime: now.toISOString(),
    serverFactKey: 'compiler' as const,
    magicNumber: 42
  };
};

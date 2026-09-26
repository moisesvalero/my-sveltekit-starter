import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    title: 'SaaS Dashboard | My SvelteKit Starter',
    description:
      'Private user dashboard with Better Auth session, multi-tenant organizations, and atomic credit ledger.'
  };
};

import { createAuthClient } from 'better-auth/client';
import { adminClient, organizationClient, twoFactorClient } from 'better-auth/client/plugins';

export const authClient = createAuthClient({
  baseURL: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173',
  plugins: [adminClient(), organizationClient(), twoFactorClient()]
});

export const { signIn, signOut, signUp, organization, twoFactor, admin } = authClient;

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  namespace svelteHTML {
    interface HTMLAttributes {
      'on:mousemove'?: (event: MouseEvent) => void;
    }
  }
}

declare module '$env/static/public' {
  export const PUBLIC_SITE_URL: string;
  export const PUBLIC_SENTRY_DSN: string;
}

declare module '$env/dynamic/public' {
  export const PUBLIC_SITE_URL: string;
  export const PUBLIC_SENTRY_DSN: string;
}

declare module '$env/dynamic/private' {
  export const SANITY_PROJECT_ID: string;
  export const SANITY_DATASET: string;
  export const SANITY_API_VERSION: string;
  export const SANITY_READ_TOKEN: string;
  export const SUPABASE_URL: string;
  export const SUPABASE_ANON_KEY: string;
  export const RESEND_API_KEY: string;
}

export {};

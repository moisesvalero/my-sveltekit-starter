export const siteConfig = {
  name: 'My SvelteKit Starter',
  tagline:
    'Plantilla lista para producción: Svelte 5, SvelteKit 2, TypeScript, Tailwind CSS v4 y componentes UI estilo shadcn-svelte.',
  url: 'https://my-sveltekit-starter.vercel.app',
  ogImage: '/og-image.png',
  social: {
    github: 'https://github.com/moisesvalero/my-sveltekit-starter',
    linkedin: 'https://linkedin.com',
    email: 'mailto:info@example.com'
  },
  author: {
    name: 'Tu nombre o equipo',
    url: 'https://my-sveltekit-starter.vercel.app'
  },
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Componentes', href: '/components' }
  ],
  footer: {
    copyright: '{{year}} My SvelteKit Starter',
    location: 'ES'
  }
};

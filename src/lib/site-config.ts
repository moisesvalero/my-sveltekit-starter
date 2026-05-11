export const siteConfig = {
  name: 'My SvelteKit Starter',
  tagline: 'Una web moderna con SvelteKit',
  url: 'https://tu-dominio.com',
  ogImage: '/og-image.png',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:info@example.com'
  },
  author: {
    name: 'Tu Nombre',
    url: 'https://tu-dominio.com'
  },
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Componentes', href: '/components' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' }
  ],
  footer: {
    copyright: '{{year}} Mi Proyecto. Todos los derechos reservados.',
    location: 'MAD / ES'
  }
};

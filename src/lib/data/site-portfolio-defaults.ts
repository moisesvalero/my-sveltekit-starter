import type { SitePortfolioContent } from '$lib/types/site-portfolio';

const aboutHtml = `<p>
  Soy <strong>Moises Valero</strong>. Tras una solida trayectoria profesional en sectores de alta
  exigencia, he regresado al desarrollo tecnologico con una vision clara: crear soluciones web que no
  solo funcionen, sino que rindan al maximo.
</p>`;

export const sitePortfolioDefaults: SitePortfolioContent = {
  header: {
    logoText: 'Moises Valero',
    logoHref: '/',
    navItems: [
      { label: 'Inicio', href: '/#top' },
      { label: 'Sobre mi', href: '/#sobre' },
      { label: 'Servicios', href: '/#servicios' },
      { label: 'Stack', href: '/#stack' },
      { label: 'Proyectos', href: '/#proyectos' },
      { label: 'Trayectoria', href: '#', openCareerModal: true }
    ],
    ctaLabel: 'Contacto',
    ctaHref: '/#contacto'
  },
  seo: {
    title: 'Moises Valero - Desarrollador Web',
    description: 'Desarrollo web con foco en rendimiento, WordPress, SvelteKit y soporte tecnico.',
    ogTitle: 'Moises Valero - Desarrollador Web',
    ogDescription:
      'Desarrollo web con foco en rendimiento, WordPress, SvelteKit y soporte tecnico.',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image'
  },
  hero: {
    cvHref: '/#contacto',
    label: 'PORTFOLIO - MOISES VALERO',
    title: 'Desarrollador Web',
    subtitle: 'SvelteKit | WordPress | Sistemas & SEO',
    bio: 'Desarrollo soluciones robustas enfocadas en Web Performance.',
    ctaPrimaryLabel: 'Hablamos?',
    careerCtaLabel: 'Ver Trayectoria'
  },
  about: {
    imageSrc: '/imagenes/Moises-Valero-Sanchez.png',
    imageAlt: 'Moises Valero',
    meta: 'UN POCO DE MI HISTORIA',
    title: 'Sobre mi',
    aboutHtml
  },
  services: {
    meta: 'MIS ESPECIALIDADES',
    title: 'Soluciones Web de Alto Rendimiento',
    items: [
      { icon: '🛒', title: 'E-commerce', description: 'Tiendas online orientadas a conversion.' },
      { icon: '🌐', title: 'Desarrollo Web', description: 'Sitios optimizados con SEO tecnico.' },
      { icon: '⚙️', title: 'Soporte Tecnico IT', description: 'Mantenimiento e incidencias IT.' }
    ]
  },
  techStack: {
    meta: 'TECNOLOGIAS Y HERRAMIENTAS',
    title: 'Mi Stack Tecnologico',
    categories: [
      {
        title: 'Desarrollo Moderno',
        icons: [{ iconify: 'logos:svelte-icon', alt: 'SvelteKit', title: 'SvelteKit' }]
      }
    ]
  },
  quality: {
    meta: 'MI ESTANDAR DE TRABAJO',
    title: 'Compromiso con la Calidad',
    items: [{ icon: '🚀', title: 'Rendimiento', description: 'Velocidad de carga real.' }]
  },
  projects: {
    meta: 'PORTFOLIO SELECCIONADO',
    title: 'Proyectos Destacados',
    projects: []
  },
  contact: {
    heading: 'Hablamos?',
    subtitle: '',
    typebotSrc: 'https://typebot.io/',
    whatsappLead: 'Prefieres WhatsApp? Escribeme en un clic.',
    whatsappButtonLabel: 'Escribir por WhatsApp',
    iframeTitle: 'Asistente de chat'
  },
  footer: {
    copyrightTemplate: 'Moises Valero © {{year}}',
    githubHref: 'https://github.com',
    linkedinHref: 'https://linkedin.com',
    emailHref: 'mailto:info@example.com'
  }
};

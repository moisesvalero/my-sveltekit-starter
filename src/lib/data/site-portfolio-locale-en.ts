import type { SitePortfolioContent } from '$lib/types/site-portfolio';

export const portfolioEnglishDemo: Omit<SitePortfolioContent, 'seo'> = {
  header: {
    logoText: 'Moises Valero',
    logoHref: '/',
    navItems: [
      { label: 'Home', href: '/#top' },
      { label: 'About', href: '/#sobre' },
      { label: 'Services', href: '/#servicios' },
      { label: 'Stack', href: '/#stack' },
      { label: 'Projects', href: '/#proyectos' },
      { label: 'Career', href: '#', openCareerModal: true }
    ],
    ctaLabel: 'Contact',
    ctaHref: '/#contacto'
  },
  hero: {
    cvHref: '/#contacto',
    label: 'PORTFOLIO - MOISES VALERO',
    title: 'Web Developer',
    subtitle: 'SvelteKit | WordPress | IT Support',
    bio: 'I build robust solutions focused on web performance.',
    ctaPrimaryLabel: "Let's talk",
    careerCtaLabel: 'View career'
  },
  about: {
    imageSrc: '/imagenes/Moises-Valero-Sanchez.png',
    imageAlt: 'Moises Valero',
    meta: 'A BIT OF MY STORY',
    title: 'About me',
    aboutHtml: '<p>Hello!</p>'
  },
  services: { meta: 'MY SPECIALTIES', title: 'High-Performance Web Solutions', items: [] },
  techStack: { meta: 'TECHNOLOGIES & TOOLS', title: 'My Tech Stack', categories: [] },
  quality: { meta: 'MY WORK STANDARD', title: 'Commitment to Quality', items: [] },
  projects: { meta: 'SELECTED PORTFOLIO', title: 'Featured Projects', projects: [] },
  contact: {
    heading: "Let's talk",
    subtitle: '',
    typebotSrc: 'https://typebot.io/',
    whatsappLead: 'Prefer WhatsApp? Message me in one click.',
    whatsappButtonLabel: 'Message on WhatsApp',
    iframeTitle: 'Chat assistant'
  },
  footer: {
    copyrightTemplate: 'Moises Valero © {{year}}',
    githubHref: 'https://github.com',
    linkedinHref: '',
    emailHref: 'mailto:261577890+moisesvalero@users.noreply.github.com'
  }
};

export function applyPortfolioEnglishDemo(
  site: SitePortfolioContent,
  opts?: { preserveSanityServicesProjects?: boolean }
): SitePortfolioContent {
  const seo = site.seo;
  const en = portfolioEnglishDemo;
  const preserve = opts?.preserveSanityServicesProjects === true;
  const categories = site.techStack.categories.map((cat, i) => ({
    ...cat,
    title: en.techStack.categories[i]?.title ?? cat.title
  }));
  return {
    ...site,
    header: en.header,
    hero: en.hero,
    about: en.about,
    services: preserve ? site.services : en.services,
    techStack: { meta: en.techStack.meta, title: en.techStack.title, categories },
    quality: en.quality,
    projects: preserve ? site.projects : en.projects,
    contact: en.contact,
    footer: en.footer,
    seo
  };
}

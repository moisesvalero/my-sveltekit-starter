import { defineField, defineType } from 'sanity';

export const portfolioSite = defineType({
  name: 'sitePortfolio',
  title: 'Sitio (contenido global)',
  type: 'document',
  initialValue: {
    title: 'Web principal',
    panelHelp:
      'Edita por pestanas, guarda cambios y pulsa Publish. Si algo no lo usas, dejalo vacio. Este panel controla textos globales de toda la web.'
  },
  groups: [
    { name: 'panel', title: 'Guia rapida', default: true },
    { name: 'home', title: 'Inicio' },
    { name: 'servicios', title: 'Servicios y stack' },
    { name: 'proyectos', title: 'Proyectos destacados' },
    { name: 'contacto', title: 'Contacto y footer' },
    { name: 'seo', title: 'SEO' }
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Nombre interno',
      readOnly: true,
      group: 'panel'
    }),
    defineField({
      name: 'panelHelp',
      type: 'text',
      title: 'Como usar este panel',
      readOnly: true,
      rows: 4,
      group: 'panel'
    }),
    defineField({
      name: 'header',
      type: 'object',
      title: 'Cabecera (menu)',
      group: 'home',
      fields: [
        { name: 'logoText', type: 'string', title: 'Marca / logo' },
        { name: 'logoHref', type: 'string', title: 'Enlace del logo', initialValue: '/' },
        {
          name: 'navItems',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', type: 'string', title: 'Texto' },
                { name: 'href', type: 'string', title: 'URL o ancla' },
                {
                  name: 'openCareerModal',
                  type: 'boolean',
                  title: 'Abrir modal Trayectoria',
                  initialValue: false
                }
              ]
            }
          ]
        },
        { name: 'ctaLabel', type: 'string', title: 'Texto boton CTA' },
        { name: 'ctaHref', type: 'string', title: 'Enlace CTA' }
      ]
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO global de la home',
      group: 'seo',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', title: 'Meta description' },
        { name: 'ogTitle', type: 'string', title: 'OG title' },
        { name: 'ogDescription', type: 'text', title: 'OG description' },
        { name: 'ogImage', type: 'url', title: 'OG image' },
        {
          name: 'twitterCard',
          type: 'string',
          title: 'Twitter card',
          options: { list: ['summary', 'summary_large_image'] },
          initialValue: 'summary_large_image'
        }
      ]
    }),
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Bloque principal (hero)',
      group: 'home',
      fields: [
        { name: 'cvHref', type: 'string', title: 'Enlace boton principal' },
        { name: 'label', type: 'string', title: 'Etiqueta superior' },
        { name: 'title', type: 'string', title: 'Titulo H1' },
        { name: 'subtitle', type: 'string', title: 'Subtitulo' },
        { name: 'bio', type: 'text', title: 'Bio' }
      ]
    }),
    defineField({
      name: 'about',
      type: 'object',
      title: 'Seccion Sobre mi',
      group: 'home',
      fields: [
        { name: 'image', type: 'image', title: 'Foto', options: { hotspot: true } },
        { name: 'imageSrc', type: 'url', title: 'URL imagen externa' },
        { name: 'imageAlt', type: 'string', title: 'Alt imagen' },
        { name: 'meta', type: 'string', title: 'Meta seccion' },
        { name: 'title', type: 'string', title: 'Titulo H2' },
        { name: 'aboutHtml', type: 'text', title: 'Cuerpo (HTML)', rows: 10 }
      ]
    }),
    defineField({
      name: 'services',
      type: 'object',
      title: 'Servicios',
      group: 'servicios',
      fields: [
        { name: 'meta', type: 'localeString', title: 'Meta seccion' },
        { name: 'title', type: 'localeString', title: 'Titulo H2' },
        {
          name: 'items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', type: 'string', title: 'Emoji / icono' },
                { name: 'title', type: 'localeString', title: 'Titulo' },
                { name: 'description', type: 'localeText', title: 'Descripcion' }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'techStack',
      type: 'object',
      title: 'Stack tecnologico',
      group: 'servicios',
      fields: [
        { name: 'meta', type: 'string' },
        { name: 'title', type: 'string' },
        {
          name: 'categories',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string' },
                {
                  name: 'icons',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        { name: 'iconImage', type: 'image', title: 'Icono (imagen)' },
                        { name: 'src', type: 'url', title: 'URL del SVG/PNG' },
                        { name: 'iconify', type: 'string', title: 'Iconify id (opcional)' },
                        { name: 'alt', type: 'string' },
                        { name: 'title', type: 'string', title: 'Tooltip' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'quality',
      type: 'object',
      title: 'Bloque de calidad / beneficios',
      group: 'servicios',
      fields: [
        { name: 'meta', type: 'string' },
        { name: 'title', type: 'string' },
        {
          name: 'items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', type: 'string' },
                { name: 'title', type: 'string' },
                { name: 'description', type: 'text' }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'projects',
      type: 'object',
      title: 'Proyectos destacados',
      group: 'proyectos',
      fields: [
        { name: 'meta', type: 'localeString', title: 'Meta seccion' },
        { name: 'title', type: 'localeString', title: 'Titulo H2' },
        {
          name: 'projects',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'sortOrder', type: 'number', title: 'Orden', initialValue: 0 },
                { name: 'thumbnail', type: 'image', title: 'Captura', options: { hotspot: true } },
                { name: 'imageSrc', type: 'url', title: 'URL imagen externa' },
                { name: 'imageAlt', type: 'string' },
                { name: 'title', type: 'localeString', title: 'Titulo' },
                { name: 'description', type: 'localeText', title: 'Descripcion' },
                { name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags' },
                { name: 'linkLabel', type: 'localeString', title: 'Texto del enlace' },
                { name: 'destinationUrl', type: 'string', title: 'Destino' }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'contact',
      type: 'object',
      title: 'Seccion de contacto',
      group: 'contacto',
      fields: [
        { name: 'heading', type: 'string' },
        { name: 'subtitle', type: 'string' },
        { name: 'typebotSrc', type: 'url', title: 'URL iframe Typebot' },
        { name: 'whatsappLead', type: 'string', title: 'Texto sobre el boton WhatsApp' },
        { name: 'whatsappButtonLabel', type: 'string', title: 'Texto del boton WhatsApp' },
        { name: 'iframeTitle', type: 'string' }
      ]
    }),
    defineField({
      name: 'footer',
      type: 'object',
      title: 'Footer',
      group: 'contacto',
      fields: [
        { name: 'copyrightTemplate', type: 'string', title: 'Copyright' },
        { name: 'githubHref', type: 'url' },
        { name: 'linkedinHref', type: 'url' },
        { name: 'emailHref', type: 'string', title: 'mailto:...' }
      ]
    })
  ]
});

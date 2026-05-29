import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Proyecto',
  type: 'document',
  initialValue: {
    estadoInterno: 'borrador',
    heroTag: 'Caso de estudio'
  },
  groups: [
    { name: 'panel', title: 'Guia rapida', default: true },
    { name: 'general', title: 'General' },
    { name: 'contenido', title: 'Contenido' },
    { name: 'imagenes', title: 'Imagenes' },
    { name: 'seo', title: 'SEO y enlace final' }
  ],
  fields: [
    defineField({
      name: 'estadoInterno',
      type: 'string',
      title: 'Estado del proyecto',
      group: 'panel'
    }),
    defineField({
      name: 'showOnHome',
      type: 'boolean',
      title: 'Mostrar en portada',
      initialValue: true,
      group: 'panel'
    }),
    defineField({
      name: 'homeSortOrder',
      type: 'number',
      title: 'Orden en portada',
      initialValue: 50,
      group: 'panel'
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Nombre del proyecto',
      group: 'general',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL interna',
      group: 'general',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heroTag',
      type: 'string',
      title: 'Etiqueta superior',
      group: 'contenido'
    }),
    defineField({
      name: 'heroDescription',
      type: 'text',
      title: 'Descripcion corta principal',
      rows: 3,
      group: 'contenido'
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tecnologias (chips)',
      of: [{ type: 'string' }],
      group: 'contenido'
    }),
    defineField({
      name: 'images',
      type: 'object',
      title: 'Imagenes del proyecto',
      group: 'imagenes',
      fields: [
        { name: 'principal', type: 'url', title: 'Imagen principal (URL)' },
        { name: 'secondary1', type: 'url', title: 'Imagen secundaria 1 (URL)' },
        { name: 'secondary2', type: 'url', title: 'Imagen secundaria 2 (URL)' }
      ]
    }),
    defineField({
      name: 'metrics',
      type: 'array',
      title: 'Metricas / resultados rapidos',
      group: 'contenido',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string' },
            { name: 'label', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'reto',
      type: 'object',
      title: 'Bloque: El reto',
      group: 'contenido',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'bodyHtml', type: 'text', rows: 6 }
      ]
    }),
    defineField({
      name: 'hice',
      type: 'object',
      title: 'Bloque: Lo que hice',
      group: 'contenido',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'bodyHtml', type: 'text', rows: 6 }
      ]
    }),
    defineField({
      name: 'resultado',
      type: 'object',
      title: 'Bloque: Resultado',
      group: 'contenido',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'bodyHtml', type: 'text', rows: 6 }
      ]
    }),
    defineField({
      name: 'stack',
      type: 'array',
      title: 'Stack tecnico final',
      of: [{ type: 'string' }],
      group: 'contenido'
    }),
    defineField({
      name: 'seoDescription',
      type: 'text',
      title: 'Meta description (SEO)',
      rows: 3,
      group: 'seo'
    }),
    defineField({
      name: 'liveUrl',
      type: 'url',
      title: 'URL del proyecto online (boton final)',
      group: 'seo'
    })
  ]
});

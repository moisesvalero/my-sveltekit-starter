import { getCliClient } from 'sanity/cli';

async function main() {
  const client = getCliClient({ apiVersion: '2025-01-01' });
  const docs = [
    {
      _id: 'caseStudy.example',
      _type: 'caseStudy',
      estadoInterno: 'borrador',
      showOnHome: false,
      homeSortOrder: 999,
      title: 'Proyecto de ejemplo',
      slug: { _type: 'slug', current: 'example' },
      seoDescription: 'Caso de estudio de ejemplo para iniciar en Sanity.',
      heroTag: 'Caso de estudio',
      heroDescription: 'Completa este documento con tu contenido real.',
      tags: ['SvelteKit', 'Sanity'],
      images: {
        principal: '/imagenes/captura-Svelte Starter_ember.avif',
        secondary1: '/imagenes/captura-Svelte Starter_ember.avif',
        secondary2: '/imagenes/captura-Svelte Starter_ember.avif'
      },
      metrics: [
        { _key: 'metric-1', value: '90+', label: 'Lighthouse' },
        { _key: 'metric-2', value: '<2s', label: 'LCP' },
        { _key: 'metric-3', value: 'A+', label: 'Seguridad' },
        { _key: 'metric-4', value: '100%', label: 'Responsive' }
      ],
      reto: { title: 'El reto', bodyHtml: '<p>Describe el reto.</p>' },
      hice: { title: 'Lo que hice', bodyHtml: '<p>Describe tu solucion.</p>' },
      resultado: { title: 'Resultado', bodyHtml: '<p>Describe el resultado.</p>' },
      stack: ['SvelteKit', 'Sanity'],
      liveUrl: '/',
      checklistPublicacion: {
        tituloYSlug: false,
        contenidoPrincipal: false,
        imagenesCargadas: false,
        seoCompletado: false
      }
    }
  ];

  for (const doc of docs) {
    await client.createOrReplace(doc);
  }

  console.log(`Proyectos cargados/actualizados en Sanity: ${docs.length}`);
}

main().catch((error) => {
  console.error('Error cargando proyectos existentes en Sanity:', error);
  process.exit(1);
});

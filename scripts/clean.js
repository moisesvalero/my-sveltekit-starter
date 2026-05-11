#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const routesToRemove = [
  'src/routes/examples',
  'src/routes/components',
  'src/routes/ssr-demo',
  'src/routes/blog',
  'src/routes/contacto',
  'src/routes/about',
  'src/routes/pricing',
  'src/routes/faq'
];

for (const route of routesToRemove) {
  const fullPath = path.join(process.cwd(), route);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true });
    console.log(`Eliminado: ${route}`);
  }
}

const componentsToRemove = [
  'src/lib/components/Hero.svelte',
  'src/lib/components/SocialProof.svelte',
  'src/lib/components/Workflow.svelte',
  'src/lib/components/ComponentGallery.svelte',
  'src/lib/components/UseCases.svelte',
  'src/lib/components/Superpowers.svelte',
  'src/lib/components/Features.svelte',
  'src/lib/components/Pricing.svelte',
  'src/lib/components/Testimonials.svelte',
  'src/lib/components/DeepDetails.svelte',
  'src/lib/components/FAQ.svelte',
  'src/lib/components/Footer.svelte',
  'src/lib/components/PhoneMockup.svelte',
  'src/lib/examples'
];

for (const comp of componentsToRemove) {
  const fullPath = path.join(process.cwd(), comp);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true });
    console.log(`Eliminado: ${comp}`);
  }
}

// Limpiar exports de landing
const landingIndex = path.join(process.cwd(), 'src/lib/examples/landing/index.ts');
// Ya se borro con el directorio

console.log('\n✓ Plantilla limpia. Solo queda la home y los componentes base.');
console.log('  Ahora edita +page.svelte con tu contenido.');

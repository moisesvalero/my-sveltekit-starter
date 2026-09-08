#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const routesToRemove = [
  'src/routes/examples',
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

const componentsToRemove = ['src/lib/components/PhoneMockup.svelte', 'src/lib/examples'];

for (const comp of componentsToRemove) {
  const fullPath = path.join(process.cwd(), comp);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true });
    console.log(`Eliminado: ${comp}`);
  }
}

console.log('\n✓ Plantilla limpia. Demos opcionales eliminados con seguridad.');

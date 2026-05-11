#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const name = process.argv[2];
if (!name) {
  console.log('Uso: node scripts/new-page.js <nombre>');
  process.exit(1);
}

const dir = path.join('src', 'routes', name);
fs.mkdirSync(dir, { recursive: true });

const pageSvelte = `<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';

  setSeo({ title: '${capitalize(name)}', description: '${capitalize(name)} - Mi Proyecto.' });
</script>

<svelte:head>
  <title>${capitalize(name)} | Mi Proyecto</title>
</svelte:head>

<Container>
  <div class="page-head">
    <Heading level={1} eyebrow="Seccion">${capitalize(name)}</Heading>
    <Text variant="muted">Edita esta pagina en src/routes/${name}/+page.svelte</Text>
  </div>
</Container>

<style>
  .page-head {
    padding-top: 8rem;
    padding-bottom: 4rem;
  }
</style>
`;

fs.writeFileSync(path.join(dir, '+page.svelte'), pageSvelte);
console.log(`✓ Creado: src/routes/${name}/+page.svelte`);
console.log(`✓ Abre http://localhost:5173/${name} para verlo`);

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');
}

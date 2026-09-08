#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const name = process.argv[2];
if (!name) {
  console.log('Uso: pnpm run new:page <nombre>');
  process.exit(1);
}

const dir = path.join(process.cwd(), 'src', 'routes', name);
fs.mkdirSync(dir, { recursive: true });

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');
}

const title = capitalize(name);

const pageSvelte = `<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
</script>

<svelte:head>
  <title>${title} | SvelteKit Starter</title>
  <meta name="description" content="Página ${title}." />
</svelte:head>

<Container>
  <div class="py-20 text-center">
    <Heading level={1} kicker="Página">${title}</Heading>
    <Text variant="muted" className="mt-4">
      Edita esta página en <code>src/routes/${name}/+page.svelte</code>
    </Text>
  </div>
</Container>
`;

fs.writeFileSync(path.join(dir, '+page.svelte'), pageSvelte, 'utf-8');
console.log(`✓ Creado: src/routes/${name}/+page.svelte`);
console.log(`✓ Abre http://localhost:5173/${name} para verlo`);

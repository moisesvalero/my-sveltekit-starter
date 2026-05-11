import adapter from '@sveltejs/adapter-auto';

const preprocessors = [];

// mdsvex (blog con Markdown) — se carga solo si esta instalado
try {
  const { mdsvex } = await import('mdsvex');
  preprocessors.push(
    mdsvex({ extensions: ['.svx', '.md'] })
  );
} catch {
  // mdsvex no instalado — no pasa nada, el blog no funcionara
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: preprocessors,
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/lib/components',
      $ui: 'src/lib/components/ui'
    }
  }
};

export default config;

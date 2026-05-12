import adapter from '@sveltejs/adapter-vercel';

const preprocessors = [];

try {
  const { mdsvex } = await import('mdsvex');
  preprocessors.push(mdsvex({ extensions: ['.svx', '.md'] }));
} catch {
  // mdsvex opcional — sin el, el blog no funciona
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

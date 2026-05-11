// adapter-auto detecta automaticamente donde despliegas (Vercel, Netlify, Cloudflare...)
// Cuando sepas donde vas a desplegar siempre, cambialo por el adapter especifico:
//   @sveltejs/adapter-vercel     -> Vercel
//   @sveltejs/adapter-cloudflare -> Cloudflare Pages
//   @sveltejs/adapter-netlify    -> Netlify
//   @sveltejs/adapter-node       -> Servidor Node generico
//   @sveltejs/adapter-static     -> Solo HTML/JS estatico (sin servidor)
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.svx', '.md']
    })
  ],
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/lib/components',
      $ui: 'src/lib/components/ui'
    }
  }
};

export default config;

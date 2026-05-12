import { redirect } from '@sveltejs/kit';

/** La lista de posts es solo demo: vive en /components#blog-demo */
export function load() {
  redirect(307, '/components#blog-demo');
}

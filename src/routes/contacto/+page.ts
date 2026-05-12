import { redirect } from '@sveltejs/kit';

/** Contacto en la página Componentes — GET redirige al ancla */
export function load() {
  redirect(307, '/components#contact-demo');
}

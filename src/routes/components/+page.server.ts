import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

/** Demo de formulario en /components — misma validación que antes en /contacto */
export const actions = {
  contact: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!name || !email || !message) {
      return fail(400, { name, email, message, errorKey: 'allRequired' as const });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return fail(400, { name, email, message, errorKey: 'invalidEmail' as const });
    }

    console.log('[contact demo]', { name, email, message });

    return { success: true, name: '', email: '', message: '' };
  }
} satisfies Actions;

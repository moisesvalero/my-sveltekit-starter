import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!name || !email || !message) {
      return fail(400, { name, email, message, error: 'Todos los campos son obligatorios.' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return fail(400, { name, email, message, error: 'Email no valido.' });
    }

    // placeholder para enviar email/guardar en DB
    console.log('Contacto recibido:', { name, email, message });

    return { success: true, name: '', email: '', message: '' };
  }
} satisfies Actions;

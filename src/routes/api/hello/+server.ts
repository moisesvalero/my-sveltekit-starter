import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  return new Response(JSON.stringify({ status: 'ok', time: new Date().toISOString() }), {
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: RequestHandler = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'JSON invalido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  return new Response(JSON.stringify({ received: body, time: new Date().toISOString() }), {
    headers: { 'Content-Type': 'application/json' }
  });
};

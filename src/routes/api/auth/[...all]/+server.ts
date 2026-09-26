import type { RequestHandler } from './$types';
import { auth } from '$lib/server/auth';

export const GET: RequestHandler = async ({ request }) => {
  return auth.handler(request);
};

export const POST: RequestHandler = async ({ request }) => {
  return auth.handler(request);
};

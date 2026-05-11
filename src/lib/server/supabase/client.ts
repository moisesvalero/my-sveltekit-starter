import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

export function getSupabase() {
  const url = env.SUPABASE_URL;
  const anonKey = env.SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey);
}

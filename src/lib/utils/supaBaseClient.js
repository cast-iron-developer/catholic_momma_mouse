import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

export const project = env.SUPABASE_URL;
export const anonKey = env.SUPABASE_ANON_KEY;
export const supabase = createClient(project, anonKey);

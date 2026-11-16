import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

if (supabaseUrl && supabaseKey) {
  console.log('Conexión correcta con Supabase:', supabase);
} else {
  console.error('Error: Faltan las variables de entorno de Supabase');
}
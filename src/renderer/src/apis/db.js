import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.RENDERER_VITE_SUPABASE_URL,
  import.meta.env.RENDERER_VITE_SUPABASE_KEY);


export default supabase;
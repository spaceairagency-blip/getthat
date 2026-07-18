// ------------------------------------------------------------------
// Fill these in with your own Supabase project values.
// Project Settings > API > Project URL / anon public key.
// The anon key is safe to expose in frontend code — it only has the
// permissions your Row Level Security policies grant it.
// ------------------------------------------------------------------
const SUPABASE_URL = "https://YOUR-PROJECT-ref.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

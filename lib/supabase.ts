import { GoTrueClient } from '@supabase/gotrue-js';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY


export const supabaseClient = createClient(supabaseUrl, supabaseKey)


const auth = new GoTrueClient({
  url: `${supabaseUrl}/auth/v1`,
  headers: {
    accept: 'json',
    apikey: supabaseKey,
  },
  // cookieOptions: { path: '/', name: 'meowncookie',  }, // Optional
})

export const supabase = { auth }

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tdoizfufsdekwxswwvtu.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkb2l6ZnVmc2Rla3d4c3d3dnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2OTI2MjgsImV4cCI6MjAzODI2ODYyOH0.og3m_pW3YiTtQgrWnmjABXpmX5GIOytO4T8h9eYfKMM`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

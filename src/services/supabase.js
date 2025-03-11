import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dyfaczgeozbgcmbruacl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZmFjemdlb3piZ2NtYnJ1YWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MTg3MjksImV4cCI6MjA1MjA5NDcyOX0.Gesuu6LbWYchlSVJYfzYAhWRzo8-c9PxzDDpofEjeU8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

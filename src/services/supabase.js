import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mllffaulnxmkvmnrbcju.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sbGZmYXVsbnhta3ZtbnJiY2p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0MDA1NTYsImV4cCI6MjAxMDk3NjU1Nn0.PAx3a9D6LlKP4u4bwn_8WP9C7Z8AQGaOO20Avy3xEEs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

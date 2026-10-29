import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";

// Supabase Dashboard > Project Settings > API
const SUPABASE_URL = "https://jidngbdzvdkvfbhupgal.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppZG5nYmR6dmRrdmZiaHVwZ2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyODM0NTQsImV4cCI6MjEwODg1OTQ1NH0.fQd-Fd2Nmgaqy8UdRSGPMedvLT5nHN9yNxFCCTgS3b8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
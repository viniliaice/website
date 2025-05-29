import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gyocmnbwnkxtdcltckvt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5b2NtbmJ3bmt4dGRjbHRja3Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MjUwMTYsImV4cCI6MjA2NDEwMTAxNn0.Z8VI56qtxTqh52MIJMxhm1Lz7pQbh9VOoqghvdWMRoE';

export const supabase = createClient(supabaseUrl, supabaseKey);
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load .env first
console.log('Loading .env...');
dotenv.config({ path: '.env' });

// Override with .env.local if it exists
if (fs.existsSync('.env.local')) {
    console.log('Loading .env.local...');
    dotenv.config({ path: '.env.local', override: true });
}

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log('Available VITE_ keys:', Object.keys(process.env).filter(k => k.startsWith('VITE_')));

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Error: Supabase credentials missing in .env file');
    console.log('VITE_SUPABASE_URL present:', !!supabaseUrl);
    console.log('VITE_SUPABASE_ANON_KEY present:', !!supabaseAnonKey);
    process.exit(1);
}

console.log('Credentials found. Testing connection...');

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkConnection() {
    try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
            console.error('❌ Connection failed:', error.message);
        } else {
            console.log('✅ Supabase connection successful! Auth service is reachable.');
            console.log('Supabase URL:', supabaseUrl);
        }
    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

checkConnection();

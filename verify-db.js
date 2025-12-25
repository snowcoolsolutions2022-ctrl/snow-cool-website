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
        console.log('Testing general connection...');
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) {
            console.error('❌ Auth check failed:', sessionError.message);
        } else {
            console.log('✅ Supabase connection successful! Auth service is reachable.');
            console.log('Supabase URL:', supabaseUrl);
        }

        console.log("\nChecking 'messages' table...");
        const { data: tableData, error: tableError } = await supabase.from('messages').select('id').limit(1);

        if (tableError) {
            console.error("❌ Error accessing 'messages' table:", tableError.message);
            if (tableError.code === '42P01') {
                console.log("👉 Result: Table 'messages' DOES NOT exist in the database.");
            } else if (tableError.code === '42501') {
                console.log("👉 Result: Permission denied (RLS is active, which is normal for SELECT).");
            }
        } else {
            console.log("✅ Table 'messages' exists and is accessible.");
        }

        console.log("\nTesting public Insert permission...");
        // Mock insert (won't actually insert if RLS is wrong, will return error)
        const { error: insertError } = await supabase.from('messages').insert([
            { name: 'Connection Test', email: 'test@example.com', message: 'Testing RLS', phone: '000' }
        ]).select();

        if (insertError) {
            console.error("❌ Public Insert failed:", insertError.message);
            console.log("👉 Check if RLS policy 'Allow public inserts' is enabled on 'messages' table.");
        } else {
            console.log("✅ Public Insert successful! Contact form should work.");
            // Clean up test message if it was actually inserted
            await supabase.from('messages').delete().eq('name', 'Connection Test');
        }

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

checkConnection();

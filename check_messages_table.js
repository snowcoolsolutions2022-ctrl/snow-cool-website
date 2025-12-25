import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function checkTable() {
    console.log("Checking if 'messages' table exists...");
    const { data, error } = await supabase.from('messages').select('id').limit(1);

    if (error) {
        console.error("Error accessing 'messages' table:", error);
        if (error.code === '42P01') { // 42P01 is PostgreSQL error for undefined table
            console.log("Result: Table 'messages' DOES NOT exist.");
        } else if (error.code === '42501') {
            console.log("Result: Permission denied (RLS might be blocking read, or table exists but opaque).");
        } else {
            console.log("Result: Unknown error.");
        }
    } else {
        console.log("Result: Table 'messages' exists.");
    }
}

checkTable();

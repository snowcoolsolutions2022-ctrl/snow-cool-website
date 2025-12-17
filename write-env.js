import fs from 'fs';

const content = `VITE_SUPABASE_URL=https://nttqkyohsskncacmyyiz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dHFreW9oc3NrbmNhY215eWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4OTMxMTIsImV4cCI6MjA4MTQ2OTExMn0.DjHk1Szpd-2-XciaG0GtUDOupkF-dlGey4G5ANY7PIo
PERPLEXITY_API_KEY=\${process.env.PERPLEXITY_API_KEY || ''}
`;

try {
    fs.writeFileSync('.env.local', content);
    fs.writeFileSync('.env', content); // Also update .env for good measure
    console.log('✅ .env and .env.local files updated successfully');
} catch (err) {
    console.error('❌ Failed to write .env files:', err);
    process.exit(1);
}

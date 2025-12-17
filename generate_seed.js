import fs from 'fs';
import { content } from './src/data/content.js';

// Helper to escape single quotes for SQL
const escape = (str) => {
    if (str === null || str === undefined) return 'NULL';
    return "'" + String(str).replace(/'/g, "''") + "'";
};

const generateSQL = () => {
    let sql = '-- Seed Data for Snow Cool Website\n';
    sql += '-- Copied from generate_seed.js output\n\n';

    // 1. Site Config
    console.log('Generating Site Config SQL...');
    Object.entries(content.siteInfo).forEach(([key, value]) => {
        sql += `INSERT INTO public.site_config (key, value, label) VALUES ('${key}', ${escape(value)}, 'Site Info') ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;\n`;
    });
    sql += '\n';

    // 2. Products
    console.log('Generating Products SQL...');
    content.products.forEach(p => {
        sql += `INSERT INTO public.products (slug, title, description, full_content, image_url) VALUES (${escape(p.id)}, ${escape(p.title)}, ${escape(p.description)}, ${escape(p.fullContent || p.features?.join('\n'))}, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;\n`;
    });
    sql += '\n';

    // 3. Services
    console.log('Generating Services SQL...');
    content.services.forEach(s => {
        sql += `INSERT INTO public.services (slug, title, description, full_content, image_url) VALUES (${escape(s.id)}, ${escape(s.title)}, ${escape(s.description)}, ${escape(s.fullContent)}, NULL) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, full_content = EXCLUDED.full_content;\n`;
    });
    sql += '\n';

    // 4. Pages
    console.log('Generating Pages SQL...');
    Object.entries(content.pages).forEach(([slug, data]) => {
        sql += `INSERT INTO public.cms_pages (slug, title, subtitle, content) VALUES ('${slug}', ${escape(data.title)}, ${escape(data.subtitle)}, ${escape(data.content || JSON.stringify(data))}) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;\n`;
    });
    sql += '\n';

    // 5. Navigation
    console.log('Generating Navigation SQL...');
    // Clear existing nav first to avoid mess
    sql += `DELETE FROM public.navigation;\n`;

    content.menu.forEach((item, index) => {
        // Insert Parent
        // Path logic: '/' -> 'home', others -> strip leading slash
        // Actually, let's keep path as is? The schema has path column.

        sql += `INSERT INTO public.navigation (label, path, sort_order, is_active) VALUES (${escape(item.title || item.name)}, ${escape(item.path)}, ${index}, true);\n`;

        // Insert Children
        if (item.dropdown || item.subItems) {
            const subs = item.dropdown || item.subItems;
            subs.forEach((sub, subIndex) => {
                // Use sub-select to find parent ID based on path
                sql += `INSERT INTO public.navigation (label, path, parent_id, sort_order, is_active) 
                       SELECT ${escape(sub.title || sub.name)}, ${escape(sub.path)}, id, ${subIndex}, true 
                       FROM public.navigation WHERE path = ${escape(item.path)} LIMIT 1;\n`;
            });
        }
    });

    fs.writeFileSync('SUPABASE_SEED.sql', sql);
    console.log('SUPABASE_SEED.sql generated successfully!');
};

generateSQL();

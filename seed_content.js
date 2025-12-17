import { createClient } from '@supabase/supabase-js';
import { content } from './src/data/content.js';
import dotenv from 'dotenv';

// Load env vars
dotenv.config();
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY; // Or SERVICE_ROLE_KEY if RLS blocks insert

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log('Starting seed...');

    // 1. Site Config
    console.log('Seeding Site Config...');
    const siteConfigData = Object.entries(content.siteInfo).map(([key, value]) => ({
        key,
        value: String(value),
        label: key.charAt(0).toUpperCase() + key.slice(1)
    }));

    const { error: configError } = await supabase.from('site_config').upsert(siteConfigData);
    if (configError) console.error('Error seeding config:', configError);

    // 2. Products
    console.log('Seeding Products...');
    if (content.products && content.products.length > 0) {
        const productsData = content.products.map(p => ({
            slug: p.id,
            title: p.title,
            description: p.description,
            full_content: p.fullContent || p.description, // Fallback
        }));
        const { error: prodError } = await supabase.from('products').upsert(productsData, { onConflict: 'slug' });
        if (prodError) console.error('Error seeding products:', prodError);
    }

    // 3. Services
    console.log('Seeding Services...');
    if (content.services && content.services.length > 0) {
        const servicesData = content.services.map(s => ({
            slug: s.id,
            title: s.title,
            description: s.description,
            full_content: s.fullContent || s.description,
        }));
        const { error: servError } = await supabase.from('services').upsert(servicesData, { onConflict: 'slug' });
        if (servError) console.error('Error seeding services:', servError);
    }

    // 4. CMS Pages
    console.log('Seeding Pages...');
    const pagesToSeed = [];

    // Standard Pages (About, AMC, OM, Clients)
    if (content.pages) {
        for (const [slug, pageData] of Object.entries(content.pages)) {
            pagesToSeed.push({
                slug: slug,
                title: pageData.title,
                subtitle: pageData.subtitle,
                content: pageData.content,
                meta_data: {}
            });
        }
    }

    // Home Page (Special case)
    if (content.home) {
        pagesToSeed.push({
            slug: 'home',
            title: 'Home',
            subtitle: null,
            content: null, // Home content is mostly structured
            meta_data: content.home // Store entire home object in meta_data
        });
    }

    if (pagesToSeed.length > 0) {
        const { error: pageError } = await supabase.from('cms_pages').upsert(pagesToSeed, { onConflict: 'slug' });
        if (pageError) console.error('Error seeding pages:', pageError);
    }

    // 5. Navigation (Simplified: flattening for now, or handling 1 level depth)
    console.log('Seeding Navigation...');
    // Clear existing navigation to avoid duplicates on re-seed
    // await supabase.from('navigation').delete().neq('id', '00000000-0000-0000-0000-000000000000'); 

    // Actually, upserting navigation is hard without stable IDs. 
    // We will Skip navigation for this run or implement a smarter wipe-and-replace.
    // Let's wipe and replace for Menu.
    await supabase.from('navigation').delete().neq('path', '___________'); // Delete all basically

    let sortOrder = 0;
    for (const item of content.menu) {
        const { data: parent, error: pError } = await supabase.from('navigation').insert({
            label: item.title,
            path: item.path || '#',
            sort_order: sortOrder++
        }).select().single();

        if (pError) {
            console.error('Error inserting menu parent:', item.title, pError);
            continue;
        }

        if (item.dropdown && parent) {
            const children = item.dropdown.map((sub, idx) => ({
                label: sub.title,
                path: sub.path,
                parent_id: parent.id,
                sort_order: idx
            }));
            const { error: cError } = await supabase.from('navigation').insert(children);
            if (cError) console.error('Error seeding menu children:', cError);
        }
    }

    console.log('Seed completed!');
}

seed();

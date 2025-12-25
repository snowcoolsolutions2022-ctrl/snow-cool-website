import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { company as defaultCompany } from '../data/company';
import { navigation as defaultNavigation } from '../data/navigation';
import { services as defaultServices } from '../data/services';
import { products as defaultProducts } from '../data/products';
import { content as defaultContent } from '../data/content';

const ContentContext = createContext();

export const useContent = () => {
    return useContext(ContentContext);
};

export const ContentProvider = ({ children }) => {
    const [data, setData] = useState({
        company: defaultCompany,
        navigation: defaultNavigation,
        services: defaultServices,
        products: defaultProducts,
        pages: defaultContent.pages || {},
        home: defaultContent.home || {}
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                // Fetch in parallel
                const [
                    { data: siteConfig },
                    { data: products },
                    { data: services },
                    { data: pages },
                    { data: navigation }
                ] = await Promise.all([
                    supabase.from('site_config').select('*'),
                    supabase.from('products').select('*'),
                    supabase.from('services').select('*'),
                    supabase.from('cms_pages').select('*'),
                    supabase.from('navigation').select('*').order('sort_order')
                ]);

                const newData = { ...data };

                // 1. Company / Site Config
                if (siteConfig && siteConfig.length > 0) {
                    const configMap = {};
                    siteConfig.forEach(item => configMap[item.key] = item.value);

                    // Accessing nested properties might need a flatter config structure or smarter merge
                    // For now, assuming config keys map to company properties directly or flattening
                    // Example: 'phone', 'email' -> company.contact.phone

                    newData.company = {
                        ...defaultCompany,
                        contact: {
                            ...defaultCompany.contact,
                            // phone: configMap.phone || defaultCompany.contact.phone,
                            // email: configMap.email || defaultCompany.contact.email,
                            // address: configMap.address || defaultCompany.contact.address
                            phone: defaultCompany.contact.phone,
                            email: defaultCompany.contact.email,
                            address: defaultCompany.contact.address
                        }
                    };
                    if (configMap.name) newData.company.name = configMap.name;
                    // Add other top level keys if any
                }

                // 2. Products - DISABLED to force local file usage
                /*
                if (products && products.length > 0) {
                    newData.products = products.map(p => ({
                        id: p.slug,
                        title: p.title,
                        description: p.description,
                        fullContent: p.full_content
                    }));
                }
                */

                // 3. Services - DISABLED to force local file usage
                /*
                if (services && services.length > 0) {
                    newData.services = services.map(s => ({
                        id: s.slug,
                        title: s.title,
                        description: s.description,
                        fullContent: s.full_content,
                        shortDesc: s.description // mapping for UI compatibility
                    }));
                }
                */

                // 4. Pages
                if (pages && pages.length > 0) {
                    const pageMap = {};
                    pages.forEach(p => {
                        if (p.slug === 'home') {
                            if (p.meta_data) newData.home = { ...defaultContent.home, ...p.meta_data };
                        } else {
                            pageMap[p.slug] = {
                                title: p.title,
                                subtitle: p.subtitle,
                                content: p.content
                            };
                        }
                    });
                    newData.pages = { ...newData.pages, ...pageMap };
                }

                // 5. Navigation - DISABLED to force local file usage (removes 'Product serviced' tab)
                /* 
                if (navigation && navigation.length > 0) {
                    const buildMenu = (parentId = null) => {
                        return navigation
                            .filter(n => n.parent_id === parentId)
                            .map(n => {
                                const children = buildMenu(n.id);
                                const item = { title: n.label, path: n.path };
                                if (children.length > 0) item.dropdown = children;
                                return item;
                            });
                    };
                    const builtMenu = buildMenu(null);
                    if (builtMenu.length > 0) newData.navigation = builtMenu;
                }
                */

                setData(newData);
            } catch (err) {
                console.error('Error fetching dynamic content:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, []);

    return (
        <ContentContext.Provider value={data}>
            {children}
        </ContentContext.Provider>
    );
};

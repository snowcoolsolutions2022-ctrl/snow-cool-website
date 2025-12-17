-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Products Table
create table if not exists public.products (
  id uuid default uuid_generate_v4() primary key,
  slug text not null unique,
  title text not null,
  description text,
  full_content text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Services Table
create table if not exists public.services (
  id uuid default uuid_generate_v4() primary key,
  slug text not null unique,
  title text not null,
  description text,
  full_content text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Site Configuration (for global info like phone, email)
create table if not exists public.site_config (
  key text primary key,
  value text,
  label text, -- Human readable label (e.g. "Phone Number")
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- CMS Pages (for About, AMC, Home, etc.)
create table if not exists public.cms_pages (
  id uuid default uuid_generate_v4() primary key,
  slug text not null unique, -- 'home', 'about', 'amc', 'clients'
  title text,
  subtitle text,
  content text, -- Main text content (Markdown supported)
  meta_data jsonb, -- For structured data like 'pricing', 'features' in Home
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Navigation Menu
create table if not exists public.navigation (
  id uuid default uuid_generate_v4() primary key,
  label text not null,
  path text not null,
  parent_id uuid references public.navigation(id),
  sort_order integer default 0,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies
-- We drop existing policies to ensure we can recreate them without error
alter table public.products enable row level security;
alter table public.services enable row level security;
alter table public.site_config enable row level security;
alter table public.cms_pages enable row level security;
alter table public.navigation enable row level security;

drop policy if exists "Allow public read products" on public.products;
create policy "Allow public read products" on public.products for select to anon using (true);

drop policy if exists "Allow public read services" on public.services;
create policy "Allow public read services" on public.services for select to anon using (true);

drop policy if exists "Allow public read site_config" on public.site_config;
create policy "Allow public read site_config" on public.site_config for select to anon using (true);

drop policy if exists "Allow public read cms_pages" on public.cms_pages;
create policy "Allow public read cms_pages" on public.cms_pages for select to anon using (true);

drop policy if exists "Allow public read navigation" on public.navigation;
create policy "Allow public read navigation" on public.navigation for select to anon using (true);

-- Allow authenticated (admin) write access
drop policy if exists "Allow admin all products" on public.products;
create policy "Allow admin all products" on public.products for all to authenticated using (true);

drop policy if exists "Allow admin all services" on public.services;
create policy "Allow admin all services" on public.services for all to authenticated using (true);

drop policy if exists "Allow admin all site_config" on public.site_config;
create policy "Allow admin all site_config" on public.site_config for all to authenticated using (true);

drop policy if exists "Allow admin all cms_pages" on public.cms_pages;
create policy "Allow admin all cms_pages" on public.cms_pages for all to authenticated using (true);

drop policy if exists "Allow admin all navigation" on public.navigation;
create policy "Allow admin all navigation" on public.navigation for all to authenticated using (true);

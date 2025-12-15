-- Create the table for storing contact form messages
create table public.messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  phone text,
  email text not null,
  service_type text,
  message text not null,
  status text default 'new' check (status in ('new', 'read', 'responded'))
);

-- Set up Row Level Security (RLS)
-- Enable RLS
alter table public.messages enable row level security;

-- Allow anyone (anon) to insert messages
create policy "Allow public inserts"
on public.messages
for insert
to anon
with check (true);

-- Allow only authenticated users (admins) to view messages
create policy "Allow admins to view messages"
on public.messages
for select
to authenticated
using (true);

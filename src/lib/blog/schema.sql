-- LSOE Blog CMS schema (Supabase / PostgreSQL)
-- Run in Supabase SQL editor before setting BLOG_DATA_SOURCE=supabase

create extension if not exists pgcrypto;

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  featured_image text,
  author_name text not null,
  publish_date timestamptz,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  status text not null default 'draft' check (status in ('draft', 'published')),
  meta_title text not null,
  meta_description text not null,
  og_image text,
  canonical_url text,
  tags jsonb not null default '[]'::jsonb,
  category text not null,
  reading_time integer not null default 1
);

create index if not exists idx_blogs_status_publish_date on public.blogs (status, publish_date desc);
create index if not exists idx_blogs_slug on public.blogs (slug);
create index if not exists idx_blogs_category on public.blogs (category);

-- Keep updated_at current on every update
create or replace function public.touch_blogs_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_touch_blogs_updated_at on public.blogs;
create trigger trg_touch_blogs_updated_at
before update on public.blogs
for each row
execute function public.touch_blogs_updated_at();

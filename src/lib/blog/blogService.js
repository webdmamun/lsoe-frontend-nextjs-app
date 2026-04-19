import { createClient } from '@supabase/supabase-js';
import {
  estimateReadingTimeMinutes,
  normalizeTags,
  safeCanonicalUrl,
  slugify,
} from './blogUtils.js';
import { blogSeedPosts } from './articles.js';

const BLOG_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
};

let supabaseClient = null;

function isLocalFallback() {
  const source = (process.env.BLOG_DATA_SOURCE || '').toLowerCase();
  if (source === 'supabase') return false;

  // Only throw in actual Vercel deployments (VERCEL_ENV is injected automatically).
  // Local `pnpm build` sets NODE_ENV=production but never sets VERCEL_ENV — allow seed fallback.
  if (process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV) {
    throw new Error('[blogService] BLOG_DATA_SOURCE must be set to "supabase" in production');
  }

  return true;
}

function assertSupabaseMode() {
  const source = (process.env.BLOG_DATA_SOURCE || '').toLowerCase();
  if (source !== 'supabase') {
    throw new Error('[blogService] BLOG_DATA_SOURCE must be set to "supabase"');
  }
}

function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;

  assertSupabaseMode();

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('[blogService] Missing Supabase credentials');
  }

  supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } }
  );

  return supabaseClient;
}

function nowIso() {
  return new Date().toISOString();
}

function toIsoDate(input) {
  if (!input) return null;
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString();
}

function normalizeStatus(input) {
  return String(input || BLOG_STATUS.DRAFT).toLowerCase() === BLOG_STATUS.PUBLISHED
    ? BLOG_STATUS.PUBLISHED
    : BLOG_STATUS.DRAFT;
}

function mapDbToPost(row) {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    featuredImage: row.featured_image || '',
    authorName: row.author_name || 'LSOE Admissions Team',
    publishDate: row.publish_date || null,
    updatedAt: row.updated_at || null,
    status: normalizeStatus(row.status),
    metaTitle: row.meta_title || row.title,
    metaDescription: row.meta_description || row.excerpt,
    ogImage: row.og_image || row.featured_image || '',
    canonicalUrl: row.canonical_url || '',
    tags: Array.isArray(row.tags) ? row.tags : [],
    category: row.category || 'General',
    readingTime: Number(row.reading_time) || estimateReadingTimeMinutes(row.content),
    createdAt: row.created_at || null,
  };
}

function mapPostToDb(post) {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    featured_image: post.featuredImage || null,
    author_name: post.authorName || 'LSOE Admissions Team',
    publish_date: post.publishDate || null,
    updated_at: post.updatedAt || nowIso(),
    status: normalizeStatus(post.status),
    meta_title: post.metaTitle,
    meta_description: post.metaDescription,
    og_image: post.ogImage || null,
    canonical_url: post.canonicalUrl || null,
    tags: post.tags,
    category: post.category,
    reading_time: post.readingTime,
  };
}

function normalizeIncomingPost(input = {}, { partial = false } = {}) {
  const title = String(input.title || '').trim();
  const generatedSlug = slugify(String(input.slug || '') || title);

  const normalized = {
    title,
    slug: generatedSlug,
    excerpt: String(input.excerpt || '').trim(),
    content: String(input.content || '').trim(),
    featuredImage: String(input.featuredImage || '').trim(),
    authorName: String(input.authorName || 'LSOE Admissions Team').trim(),
    publishDate: toIsoDate(input.publishDate),
    updatedAt: nowIso(),
    status: normalizeStatus(input.status),
    metaTitle: String(input.metaTitle || title).trim(),
    metaDescription: String(input.metaDescription || input.excerpt || '').trim(),
    ogImage: String(input.ogImage || input.featuredImage || '').trim(),
    canonicalUrl: safeCanonicalUrl(input.canonicalUrl || ''),
    tags: normalizeTags(input.tags),
    category: String(input.category || 'General').trim(),
    readingTime: estimateReadingTimeMinutes(String(input.content || '')),
  };

  if (!normalized.publishDate && normalized.status === BLOG_STATUS.PUBLISHED) {
    normalized.publishDate = nowIso();
  }

  // Draft only requires title; published requires the full content set.
  const DRAFT_REQUIRED = ['title'];
  const PUBLISH_REQUIRED = ['title', 'slug', 'excerpt', 'content', 'metaTitle', 'metaDescription', 'authorName', 'category'];
  const required = normalized.status === BLOG_STATUS.PUBLISHED ? PUBLISH_REQUIRED : DRAFT_REQUIRED;

  const errors = [];
  if (!partial) {
    for (const key of required) {
      if (!normalized[key]) errors.push(`${key} is required`);
    }
  }

  if (normalized.status === BLOG_STATUS.PUBLISHED && !normalized.publishDate) {
    errors.push('publishDate is required when status is published');
  }

  return { normalized, errors };
}

export async function getPublishedBlogs({ limit = null, category = '', tag = '', search = '' } = {}) {
  if (isLocalFallback()) {
    let posts = [...blogSeedPosts];
    if (category) posts = posts.filter(p => p.category === category);
    if (tag) posts = posts.filter(p => p.tags && p.tags.includes(tag));
    if (search) {
      const q = String(search).trim().toLowerCase();
      posts = posts.filter(p => 
        (p.title && p.title.toLowerCase().includes(q)) || 
        (p.excerpt && p.excerpt.toLowerCase().includes(q)) || 
        (p.content && p.content.toLowerCase().includes(q))
      );
    }
    posts.sort((a, b) => new Date(b.publishDate || 0) - new Date(a.publishDate || 0));
    if (limit && Number(limit) > 0) posts = posts.slice(0, Number(limit));
    return posts;
  }

  const supabase = getSupabaseClient();

  let query = supabase
    .from('blogs')
    .select('*')
    .eq('status', BLOG_STATUS.PUBLISHED)
    .order('publish_date', { ascending: false, nullsFirst: false })
    .order('updated_at', { ascending: false });

  if (category) query = query.eq('category', category);
  if (tag) query = query.contains('tags', [tag]);
  if (search) {
    const q = String(search).trim();
    query = query.or(`title.ilike.%${q}%,excerpt.ilike.%${q}%,content.ilike.%${q}%`);
  }
  if (limit && Number(limit) > 0) query = query.limit(Number(limit));

  const { data, error } = await query;
  if (error) throw error;

  return (data || []).map(mapDbToPost);
}

export async function getBlogBySlug(slug) {
  if (isLocalFallback()) {
    const s = String(slug || '').trim().toLowerCase();
    return blogSeedPosts.find(p => p.slug === s) || null;
  }

  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', String(slug || '').trim().toLowerCase())
    .eq('status', BLOG_STATUS.PUBLISHED)
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  return data ? mapDbToPost(data) : null;
}

export async function listAdminBlogs({ search = '', status = '' } = {}) {
  if (isLocalFallback()) {
    return [];
  }

  const supabase = getSupabaseClient();

  let query = supabase.from('blogs').select('*').order('updated_at', { ascending: false });

  if (status) query = query.eq('status', normalizeStatus(status));
  if (search) {
    const q = String(search).trim();
    query = query.or(`title.ilike.%${q}%,slug.ilike.%${q}%,excerpt.ilike.%${q}%,author_name.ilike.%${q}%`);
  }

  const { data, error } = await query;
  if (error) throw error;

  return (data || []).map(mapDbToPost);
}

export async function getAdminBlogById(id) {
  if (isLocalFallback()) {
    return null;
  }

  const supabase = getSupabaseClient();
  const { data, error } = await supabase.from('blogs').select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  return data ? mapDbToPost(data) : null;
}

export async function getPublishedBlogSlugs() {
  if (isLocalFallback()) {
    return blogSeedPosts.map(p => p.slug).filter(Boolean);
  }

  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('blogs')
    .select('slug')
    .eq('status', BLOG_STATUS.PUBLISHED)
    .order('publish_date', { ascending: false, nullsFirst: false });

  if (error) throw error;
  return (data || []).map((row) => row.slug).filter(Boolean);
}

async function ensureUniqueSlug(slug, { excludeId = null } = {}) {
  const supabase = getSupabaseClient();
  let query = supabase.from('blogs').select('id').eq('slug', slug).limit(1);
  if (excludeId) query = query.neq('id', excludeId);

  const { data, error } = await query;
  if (error) throw error;

  if (data && data.length > 0) {
    const err = new Error('Slug already exists');
    err.code = 'DUPLICATE_SLUG';
    throw err;
  }
}

export async function createBlog(input) {
  if (isLocalFallback()) {
    throw new Error('CMS operations require Supabase. Please configure your environment variables to perform mutations.');
  }

  const { normalized, errors } = normalizeIncomingPost(input, { partial: false });
  if (errors.length) {
    const err = new Error(errors.join(', '));
    err.code = 'VALIDATION_ERROR';
    throw err;
  }

  await ensureUniqueSlug(normalized.slug);

  const supabase = getSupabaseClient();
  const payload = {
    ...mapPostToDb({
      ...normalized,
      createdAt: nowIso(),
      updatedAt: nowIso(),
    }),
    created_at: nowIso(),
  };

  const { data, error } = await supabase.from('blogs').insert(payload).select('*').single();
  if (error) throw error;

  return mapDbToPost(data);
}

export async function updateBlog(id, input) {
  if (isLocalFallback()) {
    throw new Error('CMS operations require Supabase. Please configure your environment variables to perform mutations.');
  }

  const existing = await getAdminBlogById(id);
  if (!existing) return null;

  const merged = { ...existing, ...input };
  const { normalized, errors } = normalizeIncomingPost(merged, { partial: false });

  if (errors.length) {
    const err = new Error(errors.join(', '));
    err.code = 'VALIDATION_ERROR';
    throw err;
  }

  await ensureUniqueSlug(normalized.slug, { excludeId: id });

  const supabase = getSupabaseClient();
  const payload = mapPostToDb({ ...existing, ...normalized, updatedAt: nowIso() });

  const { data, error } = await supabase.from('blogs').update(payload).eq('id', id).select('*').single();
  if (error) throw error;

  return mapDbToPost(data);
}

export async function deleteBlog(id) {
  if (isLocalFallback()) {
    throw new Error('CMS operations require Supabase. Please configure your environment variables to perform mutations.');
  }

  const supabase = getSupabaseClient();
  const { data, error } = await supabase.from('blogs').delete().eq('id', id).select('id');
  if (error) throw error;
  // Returns false when no row matched (caller treats this as 404)
  return Array.isArray(data) && data.length > 0;
}

// Backward-compatible aliases used by existing pages/routes.
export const listPublishedBlogs = getPublishedBlogs;
export const getPublishedBlogBySlug = getBlogBySlug;

export { BLOG_STATUS, assertSupabaseMode };

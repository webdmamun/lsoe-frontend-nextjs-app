/**
 * courseService.js — Adapter-pattern course data layer (Phase 12 hardened)
 *
 * Phase A: All functions resolve from the static courseData.js catalogue.
 * Phase B: Replace the body of each function with a Supabase query.
 *          The calling code (pages, API routes) does NOT need to change.
 *
 * Switching to Supabase (see PHASE 13 GO-LIVE SEQUENCE in schema.sql):
 *   1. Ensure the `courses` table exists and is seeded (see schema.sql)
 *   2. Set USE_SUPABASE = true below (or via COURSE_DATA_SOURCE env var)
 *   3. Re-deploy — pages will switch to live data via ISR
 *
 * Public surface:
 *   getCoursesByCategory(category)  → Course[]
 *   getCourseBySlug(category, slug) → Course | null
 *   getAllCourses(options?)          → Course[]
 *   getFeaturedCourses(limit?)      → Course[]
 *   getAllParams()                   → { category, slug }[]
 *
 * SECURITY RULES (Phase 12):
 *   - Never use select('*') — always enumerate public fields via SUPABASE_SELECT_FIELDS
 *   - Always filter by published = true in every query
 *   - Every Supabase query falls back to static data on error (no hard crash)
 *   - Service role key is used server-side only; never expose to browser
 */

import {
  getStaticCoursesByCategory,
  getStaticCourseBySlug,
  getAllStaticCourses,
  getAllStaticParams,
} from './courseData';

import { SUPABASE_SELECT_FIELDS, PUBLIC_COURSE_FIELDS } from './courseContract';

// ── Phase B toggle ─────────────────────────────────────────────────────────────
// Set USE_SUPABASE = true ONLY after:
//   [x] courses table exists in Supabase
//   [x] table is seeded with at least the static courses
//   [x] QA view courses_failing_indexability returns 0 rows
//   [x] SUPABASE_SERVICE_ROLE_KEY is set in production env
// Never set to true on the public repo without confirming the table is live.
const USE_SUPABASE =
  process.env.COURSE_DATA_SOURCE === 'supabase' || false;

// Lazy Supabase client — only constructed when USE_SUPABASE is true
// Uses service_role key for server-side queries (bypasses RLS for reads)
function getSupabaseClient() {
  if (!USE_SUPABASE) return null;

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('[courseService] NEXT_PUBLIC_SUPABASE_URL is not set');
  }
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('[courseService] SUPABASE_SERVICE_ROLE_KEY is not set');
  }

  // Dynamic import avoids bundling supabase-js into the client bundle
  const { createClient } = require('@supabase/supabase-js');
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: { persistSession: false }, // server-side: no session persistence
    }
  );
}

// ── JSDoc type definition ──────────────────────────────────────────────────────
/**
 * @typedef {Object} Course
 * @property {string}   id
 * @property {string}   slug
 * @property {string}   title
 * @property {string}   category
 * @property {string}   qualificationLevel
 * @property {string}   duration
 * @property {string}   studyMode
 * @property {string}   [attendance]
 * @property {string}   city
 * @property {string}   institutionName
 * @property {string}   shortDescription
 * @property {string}   entryRequirements
 * @property {string[]} intakeMonths
 * @property {boolean}  published
 * @property {boolean}  [featured]
 * @property {number}   [order]
 * @property {string}   [seoTitle]
 * @property {string}   [seoDescription]
 * @property {string}   [createdAt]
 * @property {string}   [updatedAt]
 */

// ── Internal: strip any unexpected fields from a Supabase result ───────────────
// Defence-in-depth: even if the query returns extra columns, this removes them.

function sanitiseCourse(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const out = {};
  for (const key of PUBLIC_COURSE_FIELDS) {
    if (key in raw) out[key] = raw[key];
  }
  return out;
}

function sanitiseCourseList(rows) {
  if (!Array.isArray(rows)) return [];
  return rows.map(sanitiseCourse).filter(Boolean);
}

// ── Public API ─────────────────────────────────────────────────────────────────

/**
 * Return all published courses in the given category.
 * @param {string} category  e.g. "business"
 * @returns {Promise<Course[]>}
 */
export async function getCoursesByCategory(category) {
  if (USE_SUPABASE) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('courses')
        .select(SUPABASE_SELECT_FIELDS) // ← explicit fields, never *
        .eq('category', category)
        .eq('published', true)
        .order('order', { ascending: true });

      if (error) throw error;
      return sanitiseCourseList(data);
    } catch (err) {
      console.error('[courseService] getCoursesByCategory error — falling back to static:', err.message);
      return getStaticCoursesByCategory(category); // graceful fallback
    }
  }

  // STATIC FALLBACK ↓
  return getStaticCoursesByCategory(category);
}

/**
 * Return a single published course by category + slug, or null if not found.
 * @param {string} category
 * @param {string} slug
 * @returns {Promise<Course|null>}
 */
export async function getCourseBySlug(category, slug) {
  if (USE_SUPABASE) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('courses')
        .select(SUPABASE_SELECT_FIELDS) // ← explicit fields, never *
        .eq('category', category)
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle(); // maybeSingle() returns null instead of error on 0 rows

      if (error) throw error;
      return data ? sanitiseCourse(data) : null;
    } catch (err) {
      console.error('[courseService] getCourseBySlug error — falling back to static:', err.message);
      return getStaticCourseBySlug(category, slug); // graceful fallback
    }
  }

  // STATIC FALLBACK ↓
  return getStaticCourseBySlug(category, slug);
}

/**
 * Return all published courses, optionally filtered.
 * @param {{ limit?: number, featured?: boolean }} [options]
 * @returns {Promise<Course[]>}
 */
export async function getAllCourses({ limit, featured } = {}) {
  if (USE_SUPABASE) {
    try {
      const supabase = getSupabaseClient();
      let query = supabase
        .from('courses')
        .select(SUPABASE_SELECT_FIELDS) // ← explicit fields, never *
        .eq('published', true)
        .order('category', { ascending: true })
        .order('order', { ascending: true });

      if (featured) query = query.eq('featured', true);
      if (limit)    query = query.limit(limit);

      const { data, error } = await query;
      if (error) throw error;
      return sanitiseCourseList(data);
    } catch (err) {
      console.error('[courseService] getAllCourses error — falling back to static:', err.message);
      return getAllStaticCourses(); // graceful fallback
    }
  }

  // STATIC FALLBACK ↓
  let courses = getAllStaticCourses();
  if (featured) courses = courses.filter((c) => c.featured);
  if (limit)    courses = courses.slice(0, limit);
  return courses;
}

/**
 * Convenience wrapper for featured courses displayed on hub/homepage sections.
 * @param {number} [limit=6]
 * @returns {Promise<Course[]>}
 */
export async function getFeaturedCourses(limit = 6) {
  return getAllCourses({ limit, featured: true });
}

/**
 * Return all { category, slug } pairs for Next.js generateStaticParams.
 * This must remain fast — it runs at build time.
 *
 * IMPORTANT: When USE_SUPABASE is true, this also drives the sitemap.
 * Ensure the Supabase query and sitemap.js are both updated together.
 *
 * @returns {Promise<{ category: string, slug: string }[]>}
 */
export async function getAllParams() {
  if (USE_SUPABASE) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('courses')
        .select('category, slug') // minimal — only routing fields needed
        .eq('published', true);

      if (error) throw error;
      // If live DB returns no rows, fall back to static (safety net)
      return data?.length ? data : getAllStaticParams();
    } catch (err) {
      console.error('[courseService] getAllParams error — falling back to static:', err.message);
      return getAllStaticParams(); // graceful fallback
    }
  }

  // STATIC FALLBACK ↓
  return getAllStaticParams();
}

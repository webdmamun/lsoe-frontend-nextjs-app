/**
 * /api/courses — Public, read-only course data endpoint (Phase 12 hardened)
 *
 * This is the only public API surface for course data.
 * It is intentionally read-only (GET only).
 * Write/admin operations must go through the CRM app subdomain.
 *
 * Query parameters:
 *   ?category=business      Filter by category slug
 *   ?slug=business-admin    Filter to a single course (requires category)
 *   ?featured=true          Return only featured courses
 *   ?limit=10               Limit results (max 50 enforced)
 *
 * Response shape:
 *   { success: true,  data: Course[], total: number }
 *   { success: false, error: string }                 (on error)
 *
 * Caching:
 *   s-maxage=3600 — CDN caches for 1 hour, revalidates silently.
 *   stale-while-revalidate=86400 — serve stale for up to 24h while
 *   revalidating in background. Safe for course data that changes infrequently.
 *
 * Security (Phase 12):
 *   - courseService already uses explicit field selection (not SELECT *)
 *   - sanitiseCourse() in courseService strips any unexpected fields
 *   - This route adds a final allowlist pass as defence-in-depth
 *   - Only published=true courses ever reach this endpoint
 *   - No auth required — this is intentionally public (published courses only)
 */

import { NextResponse } from 'next/server';
import { getAllCourses, getCoursesByCategory, getCourseBySlug } from '@/lib/courses/courseService';
import { PUBLIC_COURSE_FIELDS } from '@/lib/courses/courseContract';
import { VALID_CATEGORIES } from '@/lib/courses/courseHelpers';

// Maximum results this endpoint will return — prevents abuse.
const MAX_LIMIT = 50;

// Final defence-in-depth: strip any field not in the public contract.
// courseService already does this, but belt-and-braces for the public API.
function applyFieldAllowlist(course) {
  if (!course || typeof course !== 'object') return null;
  const out = {};
  for (const field of PUBLIC_COURSE_FIELDS) {
    if (field in course) out[field] = course[field];
  }
  return out;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') ?? null;
    const slug     = searchParams.get('slug')     ?? null;
    const featured = searchParams.get('featured') === 'true';
    const rawLimit = parseInt(searchParams.get('limit') ?? '0', 10);
    const limit    = rawLimit > 0 ? Math.min(rawLimit, MAX_LIMIT) : null;

    // Validate category if provided — reject unknown category slugs
    if (category && !VALID_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { success: false, error: 'Invalid category' },
        { status: 400 }
      );
    }

    let data;

    if (category && slug) {
      // Single course lookup
      const course = await getCourseBySlug(category, slug);
      if (!course) {
        return NextResponse.json(
          { success: false, error: 'Course not found' },
          { status: 404 }
        );
      }
      data = [course];
    } else if (category) {
      // All courses in a category
      data = await getCoursesByCategory(category);
    } else {
      // All published courses (optionally filtered)
      data = await getAllCourses({ limit: limit ?? undefined, featured });
    }

    // Apply limit after fetch (for static fallback path)
    if (limit && !slug) {
      data = data.slice(0, limit);
    }

    // Final allowlist pass — remove any field not in the public contract
    const safeData = data.map(applyFieldAllowlist).filter(Boolean);

    return NextResponse.json(
      { success: true, data: safeData, total: safeData.length },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('[/api/courses] GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Prevent accidental mutation via this public endpoint
export async function POST() {
  return NextResponse.json({ success: false, error: 'Method Not Allowed' }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ success: false, error: 'Method Not Allowed' }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ success: false, error: 'Method Not Allowed' }, { status: 405 });
}

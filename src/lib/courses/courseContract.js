/**
 * courseContract.js — Public Course Data Contract (Phase 12)
 *
 * This is the single source of truth for the public-safe course data shape.
 * It defines:
 *   - which fields are REQUIRED for the page to render at all
 *   - which fields are REQUIRED for SEO/indexability
 *   - which fields are optional/enrichment
 *   - which fields are NEVER exposed publicly (internal/CRM-only)
 *
 * All Supabase SELECT queries in courseService.js MUST enumerate only the
 * PUBLIC_COURSE_FIELDS list below — never SELECT *.
 *
 * Consumers:
 *   courseService.js   — field selection for Supabase queries
 *   courseHelpers.js   — isIndexable() validation
 *   /api/courses       — enforces field allowlist in API response
 *   schema.sql         — matches column names (with quoting rules noted below)
 */

// ── Public field allowlist ─────────────────────────────────────────────────────
// These are the ONLY fields that may appear in API responses or page renders.
// Any field not in this list must never be SELECT-ed or returned publicly.

export const PUBLIC_COURSE_FIELDS = [
  // Identity
  'id',
  'slug',
  'title',

  // Classification
  'category',
  'qualificationLevel',

  // Academic details
  'duration',
  'studyMode',
  'attendance',

  // Location
  'city',
  'institutionName',

  // Content
  'shortDescription',
  'entryRequirements',
  'intakeMonths',

  // Publishing flags
  'published',
  'featured',
  'order',

  // SEO overrides (optional — falls back to computed values if NULL)
  'seoTitle',
  'seoDescription',

  // Timestamps (read-only — useful for sitemap lastModified)
  'createdAt',
  'updatedAt',
];

// ── Required for category pages ────────────────────────────────────────────────
// A course card missing any of these fields cannot render correctly.
export const CATEGORY_PAGE_REQUIRED_FIELDS = [
  'id',
  'slug',
  'title',
  'category',
  'qualificationLevel',
  'duration',
  'studyMode',
  'shortDescription',
  'published',
];

// ── Required for course detail pages ──────────────────────────────────────────
// Fields that the [category]/[slug]/page.js template renders explicitly.
export const DETAIL_PAGE_REQUIRED_FIELDS = [
  ...CATEGORY_PAGE_REQUIRED_FIELDS,
  'institutionName',
  'entryRequirements',
  'intakeMonths',
  'city',
];

// ── Required for SEO / indexability ───────────────────────────────────────────
// Must ALL be present and non-empty for a course page to be indexed.
// Mirrors the isIndexable() function in courseHelpers.js — keep in sync.
export const SEO_REQUIRED_FIELDS = [
  'published',        // must be true
  'slug',             // non-empty string
  'title',            // length > 5
  'shortDescription', // length >= 120 characters (thin-content guard)
  'category',         // must be a valid key in CATEGORY_MAP
  'institutionName',  // non-empty string
  'qualificationLevel', // non-empty string
];

// ── Optional / enrichment fields ──────────────────────────────────────────────
// Pages degrade gracefully if these are absent.
export const OPTIONAL_FIELDS = [
  'attendance',    // shown in info bar if present
  'city',          // shown in info bar if present
  'featured',      // used for homepage/hub featured sections
  'order',         // display sort within category
  'seoTitle',      // overrides computed title
  'seoDescription',// overrides computed description
  'createdAt',     // used in sitemap lastModified
  'updatedAt',     // used in sitemap lastModified
];

// ── Supabase SELECT string ─────────────────────────────────────────────────────
// Use this in all courseService.js Supabase queries instead of select('*').
// Quoted identifiers are required for camelCase columns in PostgreSQL.
//
// IMPORTANT: The schema.sql uses quoted camelCase column names. PostgreSQL
// lowercases unquoted identifiers. Always use this constant for SELECT.

export const SUPABASE_SELECT_FIELDS =
  'id, slug, title, category, "qualificationLevel", duration, "studyMode", ' +
  'attendance, city, "institutionName", "shortDescription", "entryRequirements", ' +
  '"intakeMonths", published, featured, "order", "seoTitle", "seoDescription", ' +
  '"createdAt", "updatedAt"';

// ── Fields that MUST NEVER be exposed publicly ─────────────────────────────────
// These exist in the CRM / Supabase but must never appear in API responses.
// If added to the DB schema in future, ensure they are excluded from SELECT.
export const PRIVATE_FIELDS_NEVER_EXPOSE = [
  // CRM internals (not yet in schema but listed for future protection)
  'internal_notes',
  'crm_course_id',
  'admin_notes',
  'source',
  'created_by',
  'updated_by',
  'review_status',
  'partner_id',
  'commission_rate',
  'revenue_share',
];

// ── Field-level validation rules ──────────────────────────────────────────────
// Used by QA tooling, seed scripts, and publishing-readiness checks.
export const FIELD_VALIDATION = {
  slug:               { type: 'string', minLength: 3, pattern: /^[a-z0-9-]+$/ },
  title:              { type: 'string', minLength: 6 },
  category:           { type: 'string', enum: ['business','computing','health','law','engineering','foundation','business-top-up','postgraduate'] },
  qualificationLevel: { type: 'string', minLength: 3 },
  duration:           { type: 'string', minLength: 3 },
  studyMode:          { type: 'string', enum: ['blended','on-campus','online','flexible'] },
  institutionName:    { type: 'string', minLength: 2 },
  shortDescription:   { type: 'string', minLength: 120 },
  entryRequirements:  { type: 'string', minLength: 10 },
  intakeMonths:       { type: 'array',  minItems: 1, itemEnum: ['January','February','March','April','May','June','July','August','September','October','November','December'] },
  published:          { type: 'boolean' },
  city:               { type: 'string', minLength: 2 },
  seoTitle:           { type: 'string', minLength: 10, maxLength: 70 },
  seoDescription:     { type: 'string', minLength: 50, maxLength: 160 },
};

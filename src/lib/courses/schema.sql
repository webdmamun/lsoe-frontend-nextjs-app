-- ─────────────────────────────────────────────────────────────────────────────
-- LSOE Course Catalogue — Supabase / PostgreSQL migration (Phase 12 hardened)
-- ─────────────────────────────────────────────────────────────────────────────
--
-- IMPORTANT: Do NOT apply this migration automatically.
-- Run section-by-section in the Supabase SQL editor after reviewing each block.
--
-- GO-LIVE SEQUENCE (Phase 13 — when ready):
--   Step 1: Run TABLE + CONSTRAINT + INDEX + RLS blocks below
--   Step 2: Seed from courseData.js using the seed script
--   Step 3: Run seed QA: SELECT * FROM courses_failing_indexability;
--           → Must return 0 rows before going live
--   Step 4: In .env.production: COURSE_DATA_SOURCE=supabase
--   Step 5: In [category]/[slug]/page.js: change dynamicParams to true
--   Step 6: In [category]/[slug]/page.js: add export const revalidate = 3600
--   Step 7: Update sitemap.js to use getAllParams() instead of getAllStaticParams()
--   Step 8: Redeploy frontend
--   Step 9: Monitor Vercel/render logs for courseService errors for 24h
--   Step 10: Monitor Google Search Console for crawl errors for 7 days
--
-- COLUMN NAMING NOTE:
--   Columns use quoted camelCase to match the JavaScript courseService.js field names.
--   Always quote these column names in raw SQL: "qualificationLevel", "studyMode" etc.
--   The SUPABASE_SELECT_FIELDS constant in courseContract.js handles this automatically.
-- ─────────────────────────────────────────────────────────────────────────────

-- ─── BLOCK 1: Table creation ──────────────────────────────────────────────────
-- Run first. IF NOT EXISTS makes this safe to re-run.

CREATE TABLE IF NOT EXISTS courses (

  -- ── Identity ──────────────────────────────────────────────────────────────
  id                    UUID          DEFAULT gen_random_uuid()  PRIMARY KEY,
  slug                  TEXT          NOT NULL,
  title                 TEXT          NOT NULL
    CHECK (length(title) > 5),                  -- thin content guard

  -- ── Classification ────────────────────────────────────────────────────────
  -- Must match one of the keys in CATEGORY_MAP (courseHelpers.js)
  category              TEXT          NOT NULL
    CHECK (category IN (
      'business', 'computing', 'health', 'law',
      'engineering', 'foundation', 'business-top-up', 'postgraduate'
    )),

  -- ── Academic details ──────────────────────────────────────────────────────
  "qualificationLevel"  TEXT          NOT NULL,   -- Required for SEO + indexability
  duration              TEXT          NOT NULL,   -- Required for detail page rendering
  "studyMode"           TEXT          NOT NULL
    CHECK ("studyMode" IN ('blended', 'on-campus', 'online', 'flexible')),
  attendance            TEXT
    CHECK (attendance IN ('full-time', 'part-time', 'flexible') OR attendance IS NULL),

  -- ── Location ──────────────────────────────────────────────────────────────
  city                  TEXT,                    -- e.g. "London", "Manchester"
  "institutionName"     TEXT          NOT NULL,  -- Required for indexability check

  -- ── Content ───────────────────────────────────────────────────────────────
  "shortDescription"    TEXT          NOT NULL
    CHECK (length("shortDescription") >= 120),    -- Enforces thin-content rule at DB level
  "entryRequirements"   TEXT,                    -- Required for detail page; optional in DB
  "intakeMonths"        TEXT[],                  -- e.g. ARRAY['September', 'January']

  -- ── SEO overrides (optional) ──────────────────────────────────────────────
  -- If NULL, courseHelpers.js generates these from title + shortDescription
  "seoTitle"            TEXT
    CHECK ("seoTitle" IS NULL OR (length("seoTitle") BETWEEN 10 AND 70)),
  "seoDescription"      TEXT
    CHECK ("seoDescription" IS NULL OR (length("seoDescription") BETWEEN 50 AND 160)),

  -- ── Publishing ────────────────────────────────────────────────────────────
  published             BOOLEAN       DEFAULT FALSE   NOT NULL,
  featured              BOOLEAN       DEFAULT FALSE   NOT NULL,
  "order"               INTEGER       DEFAULT 99,     -- display order within category

  -- ── Audit ─────────────────────────────────────────────────────────────────
  "createdAt"           TIMESTAMPTZ   DEFAULT NOW()   NOT NULL,
  "updatedAt"           TIMESTAMPTZ   DEFAULT NOW()   NOT NULL
);

COMMENT ON TABLE courses IS
  'Public course catalogue. Only published=true rows are exposed via RLS and API.
   All content edits should be made via app.londonschoolofexcellence.com (CRM).
   Never SELECT * from this table in application code — use SUPABASE_SELECT_FIELDS
   from courseContract.js to enumerate public-safe columns only.';

COMMENT ON COLUMN courses.slug IS
  'URL-safe identifier. Must be unique within a category. Use generateSlug() from
   courseHelpers.js to compute this value from the course title.';

COMMENT ON COLUMN courses."shortDescription" IS
  'Minimum 120 characters required for Google indexability (thin-content guard).
   This constraint is also enforced by isIndexable() in courseHelpers.js.';

COMMENT ON COLUMN courses.published IS
  'Only published=true courses are returned by the API and visible to the public.
   RLS policy enforces this at the database level as a second layer of protection.';


-- ─── BLOCK 2: Unique constraint ───────────────────────────────────────────────
-- Prevents duplicate slug within a category. Run after table creation.

ALTER TABLE courses
  ADD CONSTRAINT IF NOT EXISTS courses_category_slug_unique UNIQUE (category, slug);


-- ─── BLOCK 3: Performance indexes ─────────────────────────────────────────────
-- Critical for category page queries (category + published filter).

CREATE INDEX IF NOT EXISTS idx_courses_category
  ON courses (category);

CREATE INDEX IF NOT EXISTS idx_courses_published
  ON courses (published);

CREATE INDEX IF NOT EXISTS idx_courses_category_published
  ON courses (category, published);        -- composite: most common query pattern

CREATE INDEX IF NOT EXISTS idx_courses_category_slug
  ON courses (category, slug);             -- used by getCourseBySlug()

CREATE INDEX IF NOT EXISTS idx_courses_featured
  ON courses (featured)
  WHERE featured = TRUE;                   -- partial: only featured courses

CREATE INDEX IF NOT EXISTS idx_courses_order
  ON courses (category, "order");          -- ordering within category


-- ─── BLOCK 4: Row Level Security ──────────────────────────────────────────────
-- CRITICAL: Apply before any data is inserted.
-- Public read: only published courses are visible to anon/service queries.
-- Writes: locked to service_role only (API uses service_role key server-side).

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policy cleanly in case of re-runs
DROP POLICY IF EXISTS "Public can read published courses" ON courses;

CREATE POLICY "Public can read published courses"
  ON courses FOR SELECT
  USING (published = TRUE);

-- No INSERT/UPDATE/DELETE policies = only service_role can write.
-- All content management flows through the CRM at app.londonschoolofexcellence.com.


-- ─── BLOCK 5: Auto-update updatedAt trigger ───────────────────────────────────

CREATE OR REPLACE FUNCTION update_courses_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW."updatedAt" = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS courses_updated_at ON courses;

CREATE TRIGGER courses_updated_at
  BEFORE UPDATE ON courses
  FOR EACH ROW
  EXECUTE FUNCTION update_courses_updated_at();


-- ─── BLOCK 6: Indexability QA view ────────────────────────────────────────────
-- Use this view to identify courses that would fail isIndexable() in courseHelpers.js.
-- Run before enabling live data: SELECT * FROM courses_failing_indexability;
-- Output must be zero rows.

CREATE OR REPLACE VIEW courses_failing_indexability AS
SELECT
  id,
  slug,
  title,
  category,
  published,
  CASE
    WHEN published = FALSE                         THEN 'not published'
    WHEN slug IS NULL OR slug = ''                 THEN 'missing slug'
    WHEN NOT (slug ~ '^[a-z0-9-]+$')              THEN 'slug has invalid characters'
    WHEN title IS NULL OR length(title) <= 5       THEN 'missing or too-short title'
    WHEN "shortDescription" IS NULL
      OR length("shortDescription") < 120          THEN 'description too short (min 120 chars)'
    WHEN "institutionName" IS NULL
      OR "institutionName" = ''                    THEN 'missing institutionName'
    WHEN "qualificationLevel" IS NULL
      OR "qualificationLevel" = ''                 THEN 'missing qualificationLevel'
    WHEN "entryRequirements" IS NULL
      OR "entryRequirements" = ''                  THEN 'missing entryRequirements'
    WHEN "intakeMonths" IS NULL
      OR array_length("intakeMonths", 1) IS NULL   THEN 'missing intakeMonths'
    ELSE 'unknown'
  END AS failure_reason
FROM courses
WHERE
  published = FALSE
  OR slug IS NULL OR slug = ''
  OR NOT (slug ~ '^[a-z0-9-]+$')
  OR title IS NULL OR length(title) <= 5
  OR "shortDescription" IS NULL OR length("shortDescription") < 120
  OR "institutionName" IS NULL OR "institutionName" = ''
  OR "qualificationLevel" IS NULL OR "qualificationLevel" = ''
  OR "entryRequirements" IS NULL OR "entryRequirements" = ''
  OR "intakeMonths" IS NULL OR array_length("intakeMonths", 1) IS NULL;

COMMENT ON VIEW courses_failing_indexability IS
  'QA view: returns courses that would fail the isIndexable() check in courseHelpers.js.
   Run this before switching USE_SUPABASE = true. Expect zero rows at go-live.
   Query: SELECT * FROM courses_failing_indexability;';


-- ─── BLOCK 7: Duplicate detection views ───────────────────────────────────────
-- Identify duplicate slug or description issues before going live.

CREATE OR REPLACE VIEW courses_duplicate_slugs AS
SELECT category, slug, COUNT(*) AS count
FROM courses
GROUP BY category, slug
HAVING COUNT(*) > 1;

COMMENT ON VIEW courses_duplicate_slugs IS
  'Identifies courses where (category, slug) is not unique.
   Should return 0 rows — the unique constraint prevents this, but
   useful to run pre-migration as verification.';

CREATE OR REPLACE VIEW courses_duplicate_descriptions AS
SELECT "shortDescription", COUNT(*) AS count, array_agg(slug) AS slugs
FROM courses
WHERE published = TRUE
GROUP BY "shortDescription"
HAVING COUNT(*) > 1;

COMMENT ON VIEW courses_duplicate_descriptions IS
  'Identifies published courses with identical shortDescription text.
   These pages may trigger Google duplicate content flags.
   All should have unique descriptions before go-live.';


-- ─── QUICK REFERENCE: Go-live QA queries ─────────────────────────────────────
-- Run these in Supabase SQL editor or psql before switching to live data:
--
--   -- 1. How many courses are ready?
--   SELECT category, COUNT(*) FROM courses WHERE published = TRUE GROUP BY category;
--
--   -- 2. Any indexability failures?
--   SELECT * FROM courses_failing_indexability;
--
--   -- 3. Any duplicate slugs?
--   SELECT * FROM courses_duplicate_slugs;
--
--   -- 4. Any duplicate descriptions?
--   SELECT * FROM courses_duplicate_descriptions;
--
--   -- 5. Confirm RLS is active:
--   SELECT relrowsecurity FROM pg_class WHERE relname = 'courses';  -- should be true

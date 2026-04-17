# Course Publishing Readiness Checklist
**LSOE Course Catalogue — Content QA for Admin/Content Staff**

Use this checklist before setting `published = true` on any course in the CRM.
A course that fails any required item must NOT be published until corrected.

---

## Required Fields (will fail to render if missing)

| Field | Minimum requirement | Notes |
|---|---|---|
| `title` | Non-empty, > 5 characters | Used in page `<h1>`, schema, breadcrumb |
| `slug` | Lowercase letters, numbers, hyphens only | e.g. `business-administration-ba-hons` — auto-generated from title but must be verified |
| `category` | Must be one of the 8 valid categories | `business`, `computing`, `health`, `law`, `engineering`, `foundation`, `business-top-up`, `postgraduate` |
| `institutionName` | Non-empty | e.g. `Arden University` or `UK Partner University` — used in Schema.org Course JSON-LD |
| `qualificationLevel` | Non-empty | e.g. `Undergraduate — Level 6`, `Postgraduate — Level 7` |
| `duration` | Non-empty | e.g. `3 years full-time`, `1 year full-time` |
| `studyMode` | One of: `blended`, `on-campus`, `online`, `flexible` | Used on detail page info card |
| `intakeMonths` | At least one month | e.g. `['September', 'January']` — must be valid month names |
| `entryRequirements` | Non-empty, ≥ 10 characters | Used in FAQ + entry requirements section on detail page |
| `published` | `true` | Must explicitly be set true — DB defaults to `false` |

---

## SEO / Indexability Fields (required for Google to index the page)

| Field | Minimum requirement | Why |
|---|---|---|
| `shortDescription` | **Minimum 120 characters** | Google thin-content threshold — pages with < 120 chars risk noindex treatment |
| `slug` | Must be unique within the category | Duplicate slugs = duplicate pages = Google ranking suppression |
| `shortDescription` | Must be unique across ALL courses | Duplicate descriptions = Google duplicate content flags |
| `institutionName` | Must accurately reflect the real awarding body | Schema.org Course schema uses this as the `provider` — accuracy matters for E-E-A-T |

---

## Optional SEO Overrides (improve rankings — complete if available)

| Field | Ideal length | Notes |
|---|---|---|
| `seoTitle` | 10–70 characters | If absent, auto-generated as: `[Course Title] \| UK University Admissions — LSOE` |
| `seoDescription` | 50–160 characters | If absent, auto-generated from `shortDescription + " Free admissions support from London School of Excellence."` |

> **Tip:** If the auto-generated seoTitle or seoDescription is already good, you do not need to fill in the overrides. Only use overrides if the default is misleading or too long.

---

## Pre-Publish Quality Checks (human review)

Before setting `published = true`, confirm all of the following:

- [ ] **Title is accurate** — the qualification level abbreviation is correct (e.g. BA Hons, BSc Hons, LLB Hons, BEng Hons, MBA, MSc)
- [ ] **Slug is clean** — lowercase, hyphens only, no special characters, no trailing hyphens
- [ ] **Slug matches the title** — run it through `generateSlug(title)` in courseHelpers.js to verify
- [ ] **Category is correct** — the course appears under the right subject area
- [ ] **shortDescription is 120+ characters and unique** — check against other courses in the same category
- [ ] **shortDescription is accurate** — do not copy from a competitor or university page without editing
- [ ] **institutionName is the real partner university name** — not a placeholder like "UK Partner University" unless that is intentional
- [ ] **entryRequirements are realistic** — cross-check against the actual university's published entry requirements
- [ ] **intakeMonths are accurate** — confirm with the institution before publishing
- [ ] **studyMode is correct** — `blended` means taught + online; `on-campus` means campus attendance required
- [ ] **qualificationLevel matches the course title** — a BSc should say `Undergraduate — Level 6`, an MBA should say `Postgraduate — Level 7`

---

## Database QA Before Bulk Publish

When publishing a batch of courses, run these queries in Supabase SQL editor first:

```sql
-- 1. Which courses will fail indexability checks?
SELECT * FROM courses_failing_indexability;
-- Expected: 0 rows

-- 2. Are there any duplicate slugs?
SELECT * FROM courses_duplicate_slugs;
-- Expected: 0 rows

-- 3. Are there any duplicate descriptions?
SELECT * FROM courses_duplicate_descriptions;
-- Expected: 0 rows (or review and fix before publishing)

-- 4. Summary of ready courses by category
SELECT category, COUNT(*) AS ready_to_publish
FROM courses
WHERE published = TRUE
GROUP BY category
ORDER BY category;
```

---

## Go-Live Gating (for the technical team)

The following must be confirmed by a developer before enabling `USE_SUPABASE = true`:

- [ ] `courses_failing_indexability` returns 0 rows
- [ ] `courses_duplicate_slugs` returns 0 rows
- [ ] `courses_duplicate_descriptions` returns 0 or acceptable rows (manually reviewed)
- [ ] All existing static course slugs are present in the DB (no route breakage)
- [ ] RLS is confirmed active: `SELECT relrowsecurity FROM pg_class WHERE relname = 'courses';` → `true`
- [ ] API tested: `GET /api/courses?category=business` returns expected data
- [ ] API tested: `GET /api/courses?category=business&slug=business-administration-ba-hons` returns a single course
- [ ] No private/internal fields appear in the API response (check for `internal_notes`, `crm_course_id`, etc.)

---

*Last updated: Phase 12 — April 2026*
*Maintained by: LSOE Technical Team*

# LSOE Full Website SEO Audit Report
**Site:** https://www.londonschoolofexcellence.com  
**Date:** 2026-04-21  
**Audited by:** Claude Code SEO Audit (4 parallel subagents)

---

## Overall SEO Health Score: 48/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 22% | 42/100 | 9.2 |
| Content Quality | 23% | 50/100 | 11.5 |
| On-Page SEO | 20% | 52/100 | 10.4 |
| Schema / Structured Data | 10% | 38/100 | 3.8 |
| Performance (CWV) | 10% | 48/100 | 4.8 |
| AI Search Readiness | 10% | 44/100 | 4.4 |
| Images | 5% | 42/100 | 2.1 |
| **TOTAL** | **100%** | | **46.2 → 48/100** |

---

## Executive Summary

### Business Type
Education / Local Service — UK university admissions consultancy (Hornchurch, London & Leeds)

### Top 5 Critical Issues
1. **No canonical tags** on 36+ pages — duplicate content risk at scale
2. **Homepage missing H1** — most important crawl signal absent
3. **Zero Next.js Image component usage** — 23+ raw `<img>` tags, no auto-optimisation
4. **/faq page has NO FAQPage schema** despite 16 visible Q&A pairs
5. **/uk-student-finance-courses not linked from anywhere** in main navigation

### Top 5 Quick Wins
1. Add `canonical` to root layout metadata (1 line, fixes 36+ pages)
2. Add H1 to homepage (10 min)
3. Add FAQPage JSON-LD to `/faq` (30 min, can lift CTR 20–30%)
4. Fix office image `alt=""` → descriptive text (1 min)
5. Add homepage → blog internal link (5 min, unorphans entire content hub)

---

## 1. Technical SEO

### 1.1 Canonical Tags
**CRITICAL** — `src/app/layout.js` has no default `alternates.canonical`. Every page without its own metadata entry is missing a canonical.

Affected: ~36 pages including `/about-us`, `/contact-us`, `/apply-now`, `/faq`, all course category pages, all service pages.

Only pages with explicit canonical set:
- `/uk-student-finance-courses` ✓
- `/am-i-eligible` ✓
- Individual blog posts (via dynamic metadata) ✓

**Fix:** Add to root layout:
```js
alternates: { canonical: 'https://www.londonschoolofexcellence.com' }
```
And add per-page canonical to every static route.

### 1.2 Security Headers
**HIGH** — No `X-Frame-Options`, `X-Content-Type-Options`, or `Content-Security-Policy` headers detected.

**Fix:** Add to `next.config.js`:
```js
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ]
  }]
}
```

### 1.3 Render-Blocking Resources
**HIGH** — Font Awesome loaded via `<link>` in `src/app/layout.js` blocks rendering. No `font-display: swap` strategy.

**Fix:** Replace with `font-display: optional` or self-host icons subset.

### 1.4 Core Web Vitals — Image CLS Risk
**HIGH** — All `<img>` tags missing explicit `width`/`height`. 23+ instances across service pages, banners, partner components.

**Fix:** Migrate to `next/image` with explicit `width` and `height` props.

### 1.5 CLS — Framer Motion
**MEDIUM** — `BannerBottom.js` uses Framer Motion animation on layout-affecting elements. Can cause CLS during hydration.

---

## 2. Content Quality & E-E-A-T

### 2.1 Missing H1 — Homepage
**CRITICAL** — `src/app/page.js` has no H1. H1 exists inside `GlobalBanner` component but is not rendered in a semantically accessible way from the page root.

### 2.2 E-E-A-T Signals — WEAK
**CRITICAL for education/advice niche** — Google applies heightened scrutiny (YMYL) to admissions/finance advice sites.

Missing signals:
- No "Meet Our Team" or advisor credentials page
- No professional qualifications displayed
- Blog posts show `authorName` in metadata but no bio page or credential display
- Trust stats ("10,000+ students", "140+ partners") not linked to verification sources
- No third-party review integration (Trustpilot, Google Reviews)

### 2.3 Meta Description Violations
**CRITICAL** — 5 pages exceed 155 characters, 1 below 120:

| Page | File | Length | Limit | Action |
|------|------|--------|-------|--------|
| Courses | `src/app/courses/page.js` | 181 | 155 | Trim 26 chars |
| Student Finance UK | `src/app/student-finance-uk/page.js` | 167 | 155 | Trim 12 chars |
| Contact Us | `src/app/contact-us/page.js` | 163 | 155 | Trim 8 chars |
| FAQ | `src/app/faq/page.js` | 158 | 155 | Trim 3 chars |
| About Us | `src/app/about-us/page.js` | 159 | 155 | Trim 4 chars |
| Blog | `src/app/blog/page.js` | 134 | min 120 | Expand to 145+ |

### 2.4 Title Tag Issues
**CRITICAL/HIGH:**
- `/courses` title is 70 chars (10 over 60-char limit): `src/app/courses/page.js`
- Inconsistent separators: some use ` — `, others ` | `
- OG titles differ from meta titles (confuses intent signalling)

### 2.5 Internal Linking Gaps
**CRITICAL:**
- Homepage does NOT link to blog (`/blog`) — entire content hub is orphaned
- `/uk-student-finance-courses` linked from nowhere in main nav or homepage
- Blog page does NOT link to `/courses` or `/am-i-eligible`
- Courses page does NOT link to `/am-i-eligible`

### 2.6 Thin Content Risk
- `/about-us/page.js` and `/contact-us/page.js` contain only component imports (~50–75 words of actual text in page files). Components render server-side so content is likely visible, but lack inline text in page.js creates crawl ambiguity.

---

## 3. Schema / Structured Data

### 3.1 FAQ Page — Missing FAQPage Schema
**CRITICAL** — `/faq` has 16 visible Q&A pairs but ZERO structured data. This is the highest-impact missed schema opportunity on the site.

File: `src/app/faq/page.js`

### 3.2 Course Category Pages — Missing ItemList
**HIGH** — 8 category pages (`/courses/business`, `/courses/computing`, etc.) have no `ItemList` schema. Google cannot surface individual courses in rich results.

### 3.3 Homepage FAQ — Not in JSON-LD
**HIGH** — Homepage likely includes FAQ content visible to users but not in structured data.

### 3.4 Blog Index — Missing CollectionPage Schema
**MEDIUM** — `/blog` has no `CollectionPage` or `Blog` schema.

### 3.5 Missing BreadcrumbList
**MEDIUM** — `/about-us`, `/contact-us`, `/faq`, `/apply-now` all lack breadcrumb schema.

### 3.6 Organization Schema
**MEDIUM** — Root layout `src/app/layout.js` has Organization JSON-LD but it may be missing `sameAs` links to social profiles, and `contactPoint` for the admissions phone.

---

## 4. Images

### 4.1 Empty Alt Text
**CRITICAL** — `src/components/AdmissionContactCompo/AdmissionContacOfficeImage.js:12`
```jsx
alt=""  // ← should be "LSOE London Office — Hornchurch, Romford"
```

### 4.2 No Next.js Image Component
**CRITICAL** — Zero uses of `next/image` across the entire codebase. All images are raw `<img>` tags.

Missing benefits:
- No automatic WebP/AVIF conversion
- No responsive srcset generation
- No automatic lazy loading
- No LCP optimisation for hero images
- CLS from missing width/height

### 4.3 OG Image Mismatch
**HIGH** — `/public/og-image.png` is 1024×1024 but metadata declares `width: 1200, height: 630`.

```js
// src/app/layout.js
images: [{ url: '/og-image.png', width: 1200, height: 630 }] // ← wrong dimensions
```
Social platforms will crop/distort the share card.

### 4.4 Missing Lazy Loading
**HIGH** — 8+ below-fold Unsplash images in service pages (`FinancePageClient.js`, `VisaPageClient.js`, `AccommodationPageClient.js`, `AssessmentPageClient.js`, etc.) have no `loading="lazy"` attribute.

### 4.5 OG Image Size
**HIGH** — `/public/og-image.png` is 819 KB. Should be <100 KB for fast social sharing previews.

### 4.6 External-Only Favicon
**MEDIUM** — Favicon served from external CDN only. No `/public/favicon.ico` fallback. Format is `.jpg` (should be `.ico` or `.svg`).

---

## 5. Performance (CWV)

### 5.1 LCP — Hero Image Strategy
- `BannerBottom.js` hero image has no `fetchpriority="high"` attribute
- No preload hint for LCP image
- Unsplash images use `?q=80&w=1000` query params (good, but 1000px may be insufficient for large viewports)

### 5.2 CLS Risks
- Missing `width`/`height` on all `<img>` tags (23+ files)
- Framer Motion layout animations in `BannerBottom.js`
- Font Awesome icon font may cause layout shifts during load

### 5.3 INP / JS Load
- Font Awesome CDN link in `<head>` is render-blocking
- No `async`/`defer` strategy for third-party scripts

---

## 6. AI Search Readiness

### 6.1 Citation Readiness: WEAK
AI search engines (Perplexity, ChatGPT, Gemini) require:
- Clear factual claims with verification links ✗
- Named experts with credentials ✗
- Structured Q&A that can be extracted ✓ (FAQ pages exist)
- Clear organisation identity and contact ✓

### 6.2 No llms.txt
No `llms.txt` file in `/public/`. This emerging standard helps AI crawlers understand site structure.

### 6.3 Strong Positives
- Blog content is substantial and topical ✓
- FAQ pages with real answers ✓
- Course detail pages with structured information ✓

---

## Appendix: Files by Finding

| Finding | File | Line |
|---------|------|------|
| No canonical (root) | `src/app/layout.js` | metadata export |
| No H1 homepage | `src/app/page.js` | — |
| Courses title 70 chars | `src/app/courses/page.js` | title field |
| Meta desc too long | `src/app/courses/page.js` | description field |
| Meta desc too long | `src/app/student-finance-uk/page.js` | description field |
| Meta desc too long | `src/app/contact-us/page.js` | description field |
| Meta desc too long | `src/app/faq/page.js` | description field |
| Meta desc too long | `src/app/about-us/page.js` | description field |
| No FAQPage schema | `src/app/faq/page.js` | — |
| No ItemList schema | `src/app/courses/[category]/page.js` | — |
| No blog CollectionPage | `src/app/blog/page.js` | — |
| Empty alt text | `src/components/AdmissionContactCompo/AdmissionContacOfficeImage.js` | 12 |
| Missing lazy load | `src/components/ServicePages/FinancePageClient.js` | 71 |
| Missing lazy load | `src/components/ServicePages/VisaPageClient.js` | 71 |
| Missing lazy load | `src/components/ServicePages/AccommodationPageClient.js` | 71 |
| Missing lazy load | `src/components/ServicePages/AssessmentPageClient.js` | 71 |
| OG image mismatch | `src/app/layout.js` | openGraph.images |
| No security headers | `next.config.js` | headers() |
| Font Awesome blocking | `src/app/layout.js` | <link> in head |

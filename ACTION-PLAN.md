# LSOE SEO Action Plan
**Generated:** 2026-04-21  
**Overall Score:** 48/100  
**Target Score:** 80/100

---

## CRITICAL — Fix Immediately (Week 1)

### C1. Add Canonical Tags Sitewide
**Impact:** Prevents duplicate content penalties across 36+ pages  
**File:** `src/app/layout.js` + every static route page.js  
**Effort:** 2 hours

Add to root layout metadata:
```js
alternates: { canonical: 'https://www.londonschoolofexcellence.com' }
```
Then add `alternates: { canonical: '/path' }` to every page that lacks it.

---

### C2. Add H1 to Homepage
**Impact:** Critical crawl signal; Google uses H1 for topic understanding  
**File:** `src/app/page.js`  
**Effort:** 15 min

Ensure an H1 is rendered in the page's JSX output (not buried in a client component). If GlobalBanner renders it, confirm SSR output includes it.

---

### C3. Add FAQPage JSON-LD to /faq
**Impact:** FAQ rich results — can double CTR from SERPs  
**File:** `src/app/faq/page.js`  
**Effort:** 30 min

```js
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Q1...', acceptedAnswer: { '@type': 'Answer', text: 'A1...' } },
    // ...all 16 questions
  ]
}
```

---

### C4. Fix OG Image
**Impact:** All social sharing cards currently distorted  
**File:** `public/og-image.png` + `src/app/layout.js`  
**Effort:** 30 min

1. Create new OG image at exactly 1200×630, <100 KB
2. Update metadata: `{ url: '/og-image.png', width: 1200, height: 630 }`

---

### C5. Fix Office Image Alt Text
**Impact:** Accessibility + image SEO  
**File:** `src/components/AdmissionContactCompo/AdmissionContacOfficeImage.js:12`  
**Effort:** 1 min

```jsx
alt="LSOE London Office — Hornchurch, Romford"
```

---

### C6. Add Homepage → Blog Internal Link
**Impact:** Unorphans entire content hub; passes PageRank to blog  
**File:** `src/app/page.js` or homepage hero component  
**Effort:** 10 min

---

### C7. Link /uk-student-finance-courses from Navigation or Homepage
**Impact:** High-intent page currently unreachable from main nav  
**File:** Navigation component or homepage quick-links section  
**Effort:** 15 min

---

## HIGH — Fix Within 1 Week

### H1. Fix Meta Description Length Violations
**Files and targets:**

| File | Current | Target |
|------|---------|--------|
| `src/app/courses/page.js` | 181 chars | ≤155 chars |
| `src/app/student-finance-uk/page.js` | 167 chars | ≤155 chars |
| `src/app/contact-us/page.js` | 163 chars | ≤155 chars |
| `src/app/faq/page.js` | 158 chars | ≤155 chars |
| `src/app/about-us/page.js` | 159 chars | ≤155 chars |
| `src/app/blog/page.js` | 134 chars | ≥145 chars |

---

### H2. Fix Courses Page Title Length
**File:** `src/app/courses/page.js`  
Current: "Browse UK University Courses — Business, Computing, Health, Law & More" (70 chars)  
Target: ≤60 chars  
Suggestion: "UK University Courses — Browse All Subjects | LSOE" (51 chars)

---

### H3. Add ItemList Schema to Course Category Pages
**File:** `src/app/courses/[category]/page.js`  
**Impact:** Google can show individual course items in rich results  
Add `ItemList` JSON-LD listing each course in the category.

---

### H4. Add Security Headers
**File:** `next.config.js`  
```js
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ]
  }]
}
```

---

### H5. Add lazy loading to Service Page Images
**Files:** `FinancePageClient.js`, `VisaPageClient.js`, `AccommodationPageClient.js`, `AssessmentPageClient.js` — line ~71 each  
Add `loading="lazy"` to `<img>` tag.

---

### H6. Create Team/Advisors Page
**Impact:** Critical E-E-A-T signal for YMYL education niche  
**Effort:** 2–4 hours  

New page `/our-team` with:
- Named advisors with photos
- UCAS/HE qualification mentions
- Years of experience
- Link from About Us and footer

---

### H7. Add BreadcrumbList Schema to Key Pages
Missing on: `/about-us`, `/contact-us`, `/faq`, `/apply-now`  
**File:** Add `BreadcrumbSchema` component import to each page.

---

## MEDIUM — Fix Within 1 Month

### M1. Migrate img Tags to Next.js Image Component
**Impact:** 2–3× performance improvement; automatic WebP, responsive srcset, CLS prevention  
**Effort:** 3–4 hours  
**Files:** 23+ files — start with hero images in `BannerBottom.js`, service pages

---

### M2. Fix Render-Blocking Font Awesome
**File:** `src/app/layout.js`  
Option A: Add `media="print" onload="this.media='all'"` defer strategy  
Option B: Replace with Lucide React (already partially used) and remove Font Awesome entirely

---

### M3. Standardise Title Format
Use ` — ` (em dash) consistently across all pages:  
`Primary Keyword — Secondary | LSOE`  
Audit: inconsistent mix of ` — ` and ` | ` detected across 40+ pages.

---

### M4. Add Blog CollectionPage Schema
**File:** `src/app/blog/page.js`  

---

### M5. Add Third-Party Trust Signals
- Embed Google Reviews widget or Trustpilot badge
- Link to partner institution logos/pages
- Add UCAS partner badge if applicable

---

### M6. Internal Linking — Blog & Courses
- Every blog post → link to relevant course category page
- Courses page → link to `/am-i-eligible` and `/blog`
- FAQ → link to `/uk-student-finance-courses` for funding questions

---

### M7. Add llms.txt
**File:** `public/llms.txt`  
Helps AI search engines understand site structure and key pages.

---

## LOW — Backlog

### L1. Add Local Favicon
Add `/public/favicon.ico` (32×32) and `/public/apple-touch-icon.png` (180×180) as local fallbacks.

### L2. Align OG/Twitter Titles with Meta Titles
Many pages have 3 different title variants. Unify for consistent intent signalling.

### L3. Add fetchpriority="high" to LCP Images
Hero images in `BannerBottom.js` and service pages should get `fetchpriority="high"`.

### L4. Add width/height to All img Tags
Even if not migrating to Next.js Image yet, add explicit dimensions to prevent CLS.

---

## Score Projection After Fixes

| Phase | Actions | Projected Score |
|-------|---------|----------------|
| Current | — | 48/100 |
| After Critical (C1–C7) | Canonicals, H1, FAQ schema, OG image, alt text, internal links | 62/100 |
| After High (H1–H7) | Meta descriptions, security headers, lazy loading, team page | 72/100 |
| After Medium (M1–M7) | Next.js Image, Font Awesome, schema, trust signals | 82/100 |
| After Low (L1–L4) | Favicon, title consistency, performance hints | 85/100 |

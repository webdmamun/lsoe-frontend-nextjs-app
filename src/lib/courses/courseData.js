/**
 * courseData.js — Static course catalogue (Phase 9 fallback layer)
 *
 * This file is the authoritative static data source for the course system.
 * It mirrors the full CRM data contract so the service layer can swap
 * to a Supabase query without changing any consumer code.
 *
 * Data contract (one object per course):
 *   Required for category pages:
 *     id, slug, title, category, qualificationLevel, duration, studyMode, shortDescription
 *   Required for course detail pages:
 *     + institutionName, entryRequirements, intakeMonths, city
 *   Required for SEO:
 *     + slug, shortDescription (≥120 chars), published, seoTitle (optional), seoDescription (optional)
 *   Optional (filtering/search — phase B):
 *     attendance, seoTitle, seoDescription, featured, order
 */

/** @type {Array<import('./courseService').Course>} */
export const STATIC_COURSES = [

  // ── Business & Management ──────────────────────────────────────────────────

  {
    id: 'biz-001',
    slug: 'business-administration-ba-hons',
    title: 'Business Administration (BA Hons)',
    category: 'business',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'A broad foundation in business strategy, operations, marketing, and finance. Develop the skills for management or entrepreneurship with flexible study options across UK universities.',
    entryRequirements:
      '2 A-levels or equivalent (e.g. BTEC Level 3), or relevant work experience assessed by LSOE.',
    intakeMonths: ['September', 'January'],
    published: true,
  },
  {
    id: 'biz-002',
    slug: 'international-business-ba-hons',
    title: 'International Business (BA Hons)',
    category: 'business',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3–4 years (with placement)',
    studyMode: 'on-campus',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Focuses on global trade, cross-cultural management, and international marketing. Popular with internationally mobile students aiming for careers across borders.',
    entryRequirements:
      '2 A-levels or equivalent. English language: IELTS 6.0 or equivalent for international students.',
    intakeMonths: ['September'],
    published: true,
    featured: true,
  },
  {
    id: 'biz-003',
    slug: 'accounting-and-finance-bsc-hons',
    title: 'Accounting and Finance (BSc Hons)',
    category: 'business',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Covers financial reporting, management accounting, auditing, and corporate finance. Leads to professional qualifications including ACCA and CIMA exemptions at UK partner universities.',
    entryRequirements:
      '2 A-levels including Mathematics or equivalent qualification.',
    intakeMonths: ['September', 'January'],
    published: true,
  },
  {
    id: 'biz-004',
    slug: 'marketing-ba-hons',
    title: 'Marketing (BA Hons)',
    category: 'business',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Consumer behaviour, digital marketing, brand management, and market research. High demand in media, retail, and technology sectors — study flexibly at a UK partner university.',
    entryRequirements:
      '2 A-levels or equivalent. Strong written communication skills assessed at application.',
    intakeMonths: ['September'],
    published: true,
  },
  {
    id: 'biz-005',
    slug: 'human-resource-management-ba-hons',
    title: 'Human Resource Management (BA Hons)',
    category: 'business',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Employment law, organisational behaviour, talent management, and HR strategy. Aligned with CIPD professional standards. Ideal for students targeting HR or people management careers.',
    entryRequirements:
      '2 A-levels or equivalent, or 3+ years relevant work experience considered.',
    intakeMonths: ['September', 'January'],
    published: true,
  },

  // ── IT & Computing ─────────────────────────────────────────────────────────

  {
    id: 'comp-001',
    slug: 'computer-science-bsc-hons',
    title: 'Computer Science (BSc Hons)',
    category: 'computing',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Core algorithms, software engineering, databases, and systems architecture. Strong graduate outcomes in software development, cloud computing, and AI at UK partner universities.',
    entryRequirements:
      '2 A-levels including Maths or Computing, or equivalent BTEC Level 3.',
    intakeMonths: ['September', 'January'],
    published: true,
    featured: true,
  },
  {
    id: 'comp-002',
    slug: 'cybersecurity-bsc-hons',
    title: 'Cybersecurity (BSc Hons)',
    category: 'computing',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Network security, ethical hacking, digital forensics, and risk management. One of the fastest-growing fields in UK tech — supported by free LSOE admissions guidance.',
    entryRequirements:
      '2 A-levels or equivalent. Computing or Maths background preferred.',
    intakeMonths: ['September'],
    published: true,
  },
  {
    id: 'comp-003',
    slug: 'data-science-bsc-hons',
    title: 'Data Science (BSc Hons)',
    category: 'computing',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Statistical analysis, machine learning, Python programming, and data visualisation. Strong industry demand across finance, healthcare, and retail sectors throughout the UK.',
    entryRequirements:
      '2 A-levels including Mathematics, or equivalent with strong quantitative background.',
    intakeMonths: ['September'],
    published: true,
  },

  // ── Health & Social Care ───────────────────────────────────────────────────

  {
    id: 'hsc-001',
    slug: 'health-and-social-care-bsc-hons',
    title: 'Health and Social Care (BSc Hons)',
    category: 'health',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'part-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Healthcare management, social policy, safeguarding, and person-centred care. Widely studied by care professionals already working in the NHS or social services sector.',
    entryRequirements:
      '2 A-levels or equivalent, or relevant work experience in health or social care (minimum 1 year).',
    intakeMonths: ['September', 'January', 'April'],
    published: true,
    featured: true,
  },
  {
    id: 'hsc-002',
    slug: 'public-health-bsc-hons',
    title: 'Public Health (BSc Hons)',
    category: 'health',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Epidemiology, health promotion, disease prevention, and health policy. Suitable for students aiming to work in NHS public health teams, charities, or government agencies.',
    entryRequirements:
      '2 A-levels or equivalent. Science background (Biology preferred) advantageous.',
    intakeMonths: ['September'],
    published: true,
  },
  {
    id: 'hsc-003',
    slug: 'social-work-ba-hons',
    title: 'Social Work (BA Hons)',
    category: 'health',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'on-campus',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Social Work England approved programme covering safeguarding, family support, and vulnerable adults. Includes practice placements within UK local authority settings.',
    entryRequirements:
      '2 A-levels or equivalent, DBS clearance, and relevant voluntary or paid experience required.',
    intakeMonths: ['September'],
    published: true,
  },

  // ── Law ────────────────────────────────────────────────────────────────────

  {
    id: 'law-001',
    slug: 'law-llb-hons',
    title: 'Law (LLB Hons)',
    category: 'law',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Qualifying English Law degree covering contract, tort, criminal, constitutional, and EU law. Foundation for a career as a solicitor, barrister, or legal professional in the UK.',
    entryRequirements:
      '2 A-levels or equivalent. No specific subject requirement, though English and History are advantageous.',
    intakeMonths: ['September'],
    published: true,
    featured: true,
  },
  {
    id: 'law-002',
    slug: 'criminology-and-criminal-justice-ba-hons',
    title: 'Criminology and Criminal Justice (BA Hons)',
    category: 'law',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Crime causation, criminal justice systems, policing, and social policy. Popular with students targeting the police service, probation, or policy research careers in the UK.',
    entryRequirements:
      '2 A-levels or equivalent. Strong analytical and writing skills assessed at interview.',
    intakeMonths: ['September', 'January'],
    published: true,
  },

  // ── Engineering ────────────────────────────────────────────────────────────

  {
    id: 'eng-001',
    slug: 'civil-engineering-beng-hons',
    title: 'Civil Engineering (BEng Hons)',
    category: 'engineering',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'on-campus',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Structural analysis, geotechnics, transport engineering, and project management. Accredited pathways lead to ICE (Institution of Civil Engineers) chartered status in the UK.',
    entryRequirements:
      '2 A-levels including Mathematics and Physics, or BTEC Level 3 Engineering.',
    intakeMonths: ['September'],
    published: true,
    featured: true,
  },
  {
    id: 'eng-002',
    slug: 'mechanical-engineering-beng-hons',
    title: 'Mechanical Engineering (BEng Hons)',
    category: 'engineering',
    qualificationLevel: 'Undergraduate — Level 6',
    duration: '3 years full-time',
    studyMode: 'on-campus',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Thermodynamics, fluid mechanics, materials science, and CAD. High graduate employability in automotive, aerospace, and manufacturing industries throughout the UK.',
    entryRequirements:
      '2 A-levels including Mathematics and Physics, or equivalent Engineering BTEC.',
    intakeMonths: ['September'],
    published: true,
  },

  // ── Foundation Year ────────────────────────────────────────────────────────

  {
    id: 'fnd-001',
    slug: 'foundation-year-business-and-social-sciences',
    title: 'Foundation Year — Business and Social Sciences',
    category: 'foundation',
    qualificationLevel: 'Foundation — Level 3/4',
    duration: '1 year (then progress to Year 1)',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'A full academic year that builds the knowledge and skills needed to enter Business, Social Sciences, Law, or Management undergraduate programmes at UK universities with confidence.',
    entryRequirements:
      '1 A-level or equivalent, or mature student with relevant work experience. No specific subject required.',
    intakeMonths: ['September', 'January'],
    published: true,
    featured: true,
  },
  {
    id: 'fnd-002',
    slug: 'foundation-year-science-and-engineering',
    title: 'Foundation Year — Science and Engineering',
    category: 'foundation',
    qualificationLevel: 'Foundation — Level 3/4',
    duration: '1 year (then progress to Year 1)',
    studyMode: 'on-campus',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Academic preparation for undergraduate study in Engineering, Computer Science, or Physical Sciences. Covers core Mathematics, Physics, and introductory engineering principles.',
    entryRequirements:
      '1 A-level (preferably Maths or Science), or equivalent qualification.',
    intakeMonths: ['September'],
    published: true,
  },

  // ── Business Top-Up ────────────────────────────────────────────────────────

  {
    id: 'top-001',
    slug: 'business-administration-top-up-ba-hons',
    title: 'Business Administration Top-Up (BA Hons)',
    category: 'business-top-up',
    qualificationLevel: 'Undergraduate — Level 6 Top-Up',
    duration: '1 year full-time',
    studyMode: 'blended',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Complete your BA Hons in just one year if you already hold an HND, HNC, or foundation degree in Business. Flexible study options make this ideal for working professionals.',
    entryRequirements:
      'HND, HNC, or Level 5 Foundation Degree in a Business-related subject.',
    intakeMonths: ['September', 'January', 'April'],
    published: true,
    featured: true,
  },
  {
    id: 'top-002',
    slug: 'project-management-top-up-ba-hons',
    title: 'Project Management Top-Up (BA Hons)',
    category: 'business-top-up',
    qualificationLevel: 'Undergraduate — Level 6 Top-Up',
    duration: '1 year full-time',
    studyMode: 'blended',
    attendance: 'part-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Upgrade your existing qualification to a full Honours degree in Project Management. Covers agile methodologies, risk management, and stakeholder engagement at Level 6.',
    entryRequirements:
      'HND or Level 5 Diploma in Project Management, Business, or a closely related field.',
    intakeMonths: ['September', 'January'],
    published: true,
  },

  // ── Postgraduate ───────────────────────────────────────────────────────────

  {
    id: 'pg-001',
    slug: 'mba-master-of-business-administration',
    title: 'MBA — Master of Business Administration',
    category: 'postgraduate',
    qualificationLevel: 'Postgraduate — Level 7',
    duration: '1 year full-time / 2 years part-time',
    studyMode: 'blended',
    attendance: 'flexible',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Develop strategic leadership, financial acumen, and entrepreneurial thinking through a globally recognised MBA at a UK university. LSOE provides free admissions guidance throughout.',
    entryRequirements:
      'Bachelor degree (2:2 or above) plus minimum 2 years professional work experience. GMAT waiver available.',
    intakeMonths: ['September', 'January'],
    published: true,
    featured: true,
  },
  {
    id: 'pg-002',
    slug: 'msc-data-science',
    title: 'MSc Data Science',
    category: 'postgraduate',
    qualificationLevel: 'Postgraduate — Level 7',
    duration: '1 year full-time',
    studyMode: 'on-campus',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Advanced machine learning, statistical modelling, big data analytics, and Python/R programming. Strong industry connections with UK tech companies and research institutions.',
    entryRequirements:
      'Bachelor degree (2:1 or above) in a quantitative subject (Mathematics, Computer Science, Engineering, or related field).',
    intakeMonths: ['September'],
    published: true,
  },
  {
    id: 'pg-003',
    slug: 'msc-cybersecurity',
    title: 'MSc Cybersecurity',
    category: 'postgraduate',
    qualificationLevel: 'Postgraduate — Level 7',
    duration: '1 year full-time',
    studyMode: 'on-campus',
    attendance: 'full-time',
    city: 'London',
    institutionName: 'UK Partner University',
    shortDescription:
      'Advanced network security, penetration testing, incident response, and digital forensics. Meets NCSC (National Cyber Security Centre) guidance for professional cyber education in the UK.',
    entryRequirements:
      'Bachelor degree in Computing, IT, or a related field. Relevant industry experience also considered.',
    intakeMonths: ['September'],
    published: true,
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

/** Return all published courses in a specific category */
export function getStaticCoursesByCategory(category) {
  return STATIC_COURSES.filter((c) => c.category === category && c.published);
}

/** Return a single published course by category + slug */
export function getStaticCourseBySlug(category, slug) {
  return STATIC_COURSES.find((c) => c.category === category && c.slug === slug && c.published) ?? null;
}

/** Return all published courses */
export function getAllStaticCourses() {
  return STATIC_COURSES.filter((c) => c.published);
}

/** Return all [category, slug] pairs for generateStaticParams */
export function getAllStaticParams() {
  return STATIC_COURSES
    .filter((c) => c.published)
    .map((c) => ({ category: c.category, slug: c.slug }));
}

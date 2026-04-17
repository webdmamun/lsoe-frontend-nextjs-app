import { getAllStaticParams } from '@/lib/courses/courseData';

export default function sitemap() {
  const base    = 'https://www.londonschoolofexcellence.com';
  // Dynamic date ensures Google always sees the freshest sitemap generation.
  const updated = new Date().toISOString();

  const pages = [
    { path: '',                                       priority: 1.0, freq: 'weekly'  },
    { path: '/about-us',                              priority: 0.9, freq: 'monthly' },
    { path: '/contact-us',                            priority: 0.9, freq: 'monthly' },
    { path: '/apply-now',                             priority: 0.9, freq: 'monthly' },
    { path: '/apply/uk-eu',                           priority: 0.9, freq: 'monthly' },
    { path: '/apply/international',                   priority: 0.9, freq: 'monthly' },
    { path: '/uk-eu-students',                        priority: 0.8, freq: 'monthly' },
    { path: '/international-students',                priority: 0.8, freq: 'monthly' },
    { path: '/student-visa-advice',                   priority: 0.8, freq: 'monthly' },
    { path: '/application-assessment',                priority: 0.8, freq: 'monthly' },
    { path: '/financial-planning-scholarships',       priority: 0.8, freq: 'monthly' },
    { path: '/secure-accommodation',                  priority: 0.8, freq: 'monthly' },
    { path: '/agent-partner',                         priority: 0.7, freq: 'monthly' },
    { path: '/become-an-agent',                       priority: 0.8, freq: 'monthly' },
    { path: '/refer-and-earn',                        priority: 0.6, freq: 'monthly' },
    // Courses — hub and category pages
    { path: '/courses',                               priority: 0.9, freq: 'weekly'  },
    { path: '/courses/business',                      priority: 0.8, freq: 'monthly' },
    { path: '/courses/computing',                     priority: 0.8, freq: 'monthly' },
    { path: '/courses/health',                        priority: 0.8, freq: 'monthly' },
    { path: '/courses/law',                           priority: 0.8, freq: 'monthly' },
    { path: '/courses/engineering',                   priority: 0.8, freq: 'monthly' },
    { path: '/courses/foundation',                    priority: 0.8, freq: 'monthly' },
    { path: '/courses/business-top-up',               priority: 0.8, freq: 'monthly' },
    { path: '/courses/postgraduate',                  priority: 0.7, freq: 'monthly' },
    // Resources
    { path: '/useful-links',                          priority: 0.8, freq: 'monthly' },
    { path: '/student-finance-uk',                    priority: 0.8, freq: 'monthly' },
    { path: '/am-i-eligible',                         priority: 0.8, freq: 'monthly' },
    { path: '/faq',                                   priority: 0.8, freq: 'monthly' },
    { path: '/partner-institutions',                  priority: 0.7, freq: 'monthly' },
    { path: '/ucas-guide',                            priority: 0.8, freq: 'monthly' },
    // De-prioritised / legal
    { path: '/aqf-guide',                             priority: 0.3, freq: 'yearly'  },
    { path: '/privacy-policy',                        priority: 0.3, freq: 'yearly'  },
    { path: '/terms',                                 priority: 0.3, freq: 'yearly'  },
    { path: '/modern-slavery-policy',                 priority: 0.3, freq: 'yearly'  },
    { path: '/cookie-policy',                         priority: 0.3, freq: 'yearly'  },
  ];

  const staticEntries = pages.map(({ path, priority, freq }) => ({
    url: `${base}${path}`,
    lastModified: updated,
    changeFrequency: freq,
    priority,
  }));

  // ── Course detail pages — generated from static course catalogue ────────────
  // When USE_SUPABASE is enabled in courseService.js, replace getAllStaticParams()
  // here with a Supabase query so new courses appear in the sitemap automatically.
  const courseDetailEntries = getAllStaticParams().map(({ category, slug }) => ({
    url: `${base}/courses/${category}/${slug}`,
    lastModified: updated,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...courseDetailEntries];
}

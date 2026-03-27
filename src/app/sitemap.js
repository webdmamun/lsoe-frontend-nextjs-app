export default function sitemap() {
  const baseUrl = 'https://www.londonschoolofexcellence.com';
  
  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/partner-with-us',
    '/apply-now',
    '/student-visa-advice',
    '/application-assessment',
    '/financial-planning-scholarships',
    '/secure-accommodation',
    '/aqf-guide',
    '/refer-and-earn',
    '/privacy-policy',
    '/terms',
    '/modern-slavery-policy',
    '/cookie-policy',
    '/site-map',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/office-dashboard', '/office-login', '/api/'],
    },
    sitemap: 'https://www.londonschoolofexcellence.com/sitemap.xml',
  }
}

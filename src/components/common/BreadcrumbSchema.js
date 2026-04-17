const BASE = 'https://www.londonschoolofexcellence.com';

/**
 * Renders an inline BreadcrumbList JSON-LD script tag.
 * Safe to use in both server and client components.
 *
 * @param {Array<{ name: string, href?: string }>} items
 */
export default function BreadcrumbSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${BASE}${item.href}` } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

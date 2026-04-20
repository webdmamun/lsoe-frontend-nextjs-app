import test from 'node:test';
import assert from 'node:assert/strict';

import {
  DEFAULT_BLOG_IMAGE_URL,
  getBlogImageUrls,
  normalizeImageUrl,
} from './blogImages.mjs';

test('normalizeImageUrl returns the default image for empty values', () => {
  assert.equal(normalizeImageUrl(''), DEFAULT_BLOG_IMAGE_URL);
  assert.equal(normalizeImageUrl(undefined), DEFAULT_BLOG_IMAGE_URL);
});

test('normalizeImageUrl converts site-relative images to absolute URLs', () => {
  assert.equal(
    normalizeImageUrl('/og-image.png'),
    'https://www.londonschoolofexcellence.com/og-image.png'
  );
});

test('getBlogImageUrls falls back from og to featured to default', () => {
  assert.deepEqual(
    getBlogImageUrls({
      title: 'Fallback post',
      featuredImage: 'https://example.com/featured.jpg',
      ogImage: '',
    }),
    {
      featured: 'https://example.com/featured.jpg',
      thumbnail: 'https://example.com/featured.jpg',
      og: 'https://example.com/featured.jpg',
    }
  );

  assert.equal(getBlogImageUrls({}).og, DEFAULT_BLOG_IMAGE_URL);
});

test('getBlogImageUrls derives thumbnail only when matching R2 featured and og variants exist', () => {
  const featured =
    'https://media.londonschoolofexcellence.com/blog/featured/student-finance.jpg';
  const og = 'https://media.londonschoolofexcellence.com/blog/og/student-finance.jpg';

  assert.equal(
    getBlogImageUrls({ featuredImage: featured, ogImage: og }).thumbnail,
    'https://media.londonschoolofexcellence.com/blog/thumb/student-finance.jpg'
  );
});

test('getBlogImageUrls does not derive thumbnail for older single-image posts', () => {
  const featured =
    'https://media.londonschoolofexcellence.com/blog/featured/older-upload.jpg';

  assert.equal(
    getBlogImageUrls({ featuredImage: featured, ogImage: '' }).thumbnail,
    featured
  );
});

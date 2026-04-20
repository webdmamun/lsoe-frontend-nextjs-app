export const SITE_URL = 'https://www.londonschoolofexcellence.com';
export const MEDIA_BASE_URL = 'https://media.londonschoolofexcellence.com';
export const DEFAULT_BLOG_IMAGE_URL = `${SITE_URL}/og-image.png`;

function cleanUrl(value) {
  return String(value || '').trim();
}

export function normalizeImageUrl(value, fallback = DEFAULT_BLOG_IMAGE_URL) {
  const url = cleanUrl(value);
  if (!url) return fallback;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('/')) return `${SITE_URL}${url}`;
  return url;
}

function getR2VariantPath(url, variant) {
  const parsed = new URL(url);
  if (parsed.hostname !== new URL(MEDIA_BASE_URL).hostname) return '';

  const match = parsed.pathname.match(/^\/blog\/(featured|og|thumb)\/([^/]+)$/);
  if (!match) return '';

  return `/blog/${variant}/${match[2]}`;
}

function canDeriveThumbnail(featuredUrl, ogUrl) {
  if (!featuredUrl || !ogUrl) return false;

  try {
    const featured = new URL(featuredUrl);
    const og = new URL(ogUrl);
    return (
      featured.hostname === new URL(MEDIA_BASE_URL).hostname &&
      og.hostname === featured.hostname &&
      featured.pathname.startsWith('/blog/featured/') &&
      og.pathname.startsWith('/blog/og/') &&
      featured.pathname.split('/').pop() === og.pathname.split('/').pop()
    );
  } catch {
    return false;
  }
}

export function getBlogImageUrls(post = {}) {
  const featuredInput = cleanUrl(post.featuredImage);
  const ogInput = cleanUrl(post.ogImage);

  const featured = normalizeImageUrl(featuredInput);
  const og = normalizeImageUrl(ogInput || featuredInput || DEFAULT_BLOG_IMAGE_URL);

  let thumbnail = featured;
  if (canDeriveThumbnail(featured, og)) {
    thumbnail = `${MEDIA_BASE_URL}${getR2VariantPath(featured, 'thumb')}`;
  }

  return {
    featured,
    thumbnail: thumbnail || featured || DEFAULT_BLOG_IMAGE_URL,
    og: og || featured || DEFAULT_BLOG_IMAGE_URL,
  };
}

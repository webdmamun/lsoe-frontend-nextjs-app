const WORDS_PER_MINUTE = 200;

export function slugify(value = '') {
  return value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}

export function estimateReadingTimeMinutes(content = '') {
  const plain = String(content)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/[#>*_\-\[\]()!]/g, ' ')
    .trim();

  const words = plain ? plain.split(/\s+/).filter(Boolean).length : 0;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function normalizeTags(tags) {
  if (Array.isArray(tags)) {
    return tags
      .map((tag) => String(tag).trim())
      .filter(Boolean)
      .slice(0, 20);
  }

  if (typeof tags === 'string') {
    return tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean)
      .slice(0, 20);
  }

  return [];
}

export function formatReadingTimeLabel(minutes = 1) {
  return `${minutes} min read`;
}

export function safeCanonicalUrl(url) {
  if (!url) return '';
  const raw = String(url).trim();
  if (!raw) return '';

  if (raw.startsWith('https://') || raw.startsWith('http://') || raw.startsWith('/')) {
    return raw;
  }

  return '';
}

export function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

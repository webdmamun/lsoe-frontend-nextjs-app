export function headingId(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function createUniqueHeadingId(text, counts = new Map()) {
  const baseId = headingId(text) || 'section';
  const nextCount = (counts.get(baseId) || 0) + 1;
  counts.set(baseId, nextCount);

  return nextCount === 1 ? baseId : `${baseId}-${nextCount}`;
}

export function extractMarkdownHeadings(content) {
  if (!content) return [];

  const counts = new Map();

  return String(content).split('\n').reduce((acc, line) => {
    const match = line.trim().match(/^(#{2,3})\s+(.+)$/);
    if (!match) return acc;

    const text = match[2].trim();
    acc.push({
      level: match[1].length,
      text,
      id: createUniqueHeadingId(text, counts),
    });

    return acc;
  }, []);
}

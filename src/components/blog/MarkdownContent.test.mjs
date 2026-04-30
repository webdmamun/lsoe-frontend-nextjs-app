import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { markdownRenderingFixture } from '../../lib/blog/markdownRenderingFixture.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, 'MarkdownContent.js');

async function readRendererSource() {
  return readFile(sourcePath, 'utf8');
}

test('blog renderer uses safe GFM markdown rendering with table support', async () => {
  const source = await readRendererSource();

  assert.match(source, /from ['"]react-markdown['"]/);
  assert.match(source, /from ['"]remark-gfm['"]/);
  assert.match(source, /from ['"]rehype-sanitize['"]/);
  assert.match(source, /remarkPlugins=\{\[remarkGfm\]\}/);
  assert.match(source, /rehypePlugins=\{\[rehypeSanitize\]\}/);
  assert.match(source, /skipHtml=\{true\}/);
  assert.match(source, /\btable\s*(?:\(|:)/);
  assert.match(source, /\boverflow-x-auto\b/);
});

test('blog renderer keeps internal and external link behavior explicit', async () => {
  const source = await readRendererSource();

  assert.match(source, /<Link\b/);
  assert.match(source, /target="_blank"/);
  assert.match(source, /rel="noopener noreferrer nofollow"/);
});

test('markdown rendering fixture covers links, image, table, blockquote, code, and unsafe html', () => {
  assert.match(markdownRenderingFixture, /\[Apply Now\]\(\/apply-now\)/);
  assert.match(markdownRenderingFixture, /\[UCAS\]\(https:\/\/www\.ucas\.com\)/);
  assert.match(markdownRenderingFixture, /!\[Student\]\(https:\/\/example\.com\/student\.jpg\)/);
  assert.match(markdownRenderingFixture, /\| Requirement \| UK \/ EU Students \| International Students \|/);
  assert.match(markdownRenderingFixture, /^> Keep evidence ready before submitting\.$/m);
  assert.match(markdownRenderingFixture, /`inline code`/);
  assert.match(markdownRenderingFixture, /```[\s\S]*application_status = "ready"[\s\S]*```/);
  assert.match(markdownRenderingFixture, /<script>alert\('blocked'\)<\/script>/);
});

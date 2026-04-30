import test from 'node:test';
import assert from 'node:assert/strict';

import {
  createUniqueHeadingId,
  extractMarkdownHeadings,
  headingId,
} from './markdownHeadings.mjs';

test('headingId keeps the existing blog anchor format', () => {
  assert.equal(headingId('Why this matters'), 'why-this-matters');
  assert.equal(headingId('Step 1: Prepare your documents'), 'step-1-prepare-your-documents');
});

test('createUniqueHeadingId appends a stable suffix for repeated headings', () => {
  const counts = new Map();

  assert.equal(createUniqueHeadingId('Academic Qualifications', counts), 'academic-qualifications');
  assert.equal(createUniqueHeadingId('Academic Qualifications', counts), 'academic-qualifications-2');
  assert.equal(createUniqueHeadingId('Academic Qualifications', counts), 'academic-qualifications-3');
});

test('extractMarkdownHeadings returns unique ids for duplicate TOC headings', () => {
  assert.deepEqual(
    extractMarkdownHeadings(`
## Academic Qualifications
### How to fix it
## Academic Qualifications
### How to fix it
`),
    [
      { level: 2, text: 'Academic Qualifications', id: 'academic-qualifications' },
      { level: 3, text: 'How to fix it', id: 'how-to-fix-it' },
      { level: 2, text: 'Academic Qualifications', id: 'academic-qualifications-2' },
      { level: 3, text: 'How to fix it', id: 'how-to-fix-it-2' },
    ]
  );
});

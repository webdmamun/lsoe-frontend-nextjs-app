import test from 'node:test';
import assert from 'node:assert/strict';
import sharp from 'sharp';

import { createImageVariants, IMAGE_VARIANTS } from './blogImageVariants.mjs';

async function makeMarkedImage(width, height) {
  return sharp({
    create: {
      width,
      height,
      channels: 3,
      background: '#2563eb',
    },
  })
    .composite([
      {
        input: Buffer.from(
          `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="${width}" height="${height}" fill="none" stroke="#dc2626" stroke-width="40"/>
          </svg>`
        ),
      },
    ])
    .jpeg()
    .toBuffer();
}

async function pixelAt(buffer, left, top) {
  const { data } = await sharp(buffer)
    .extract({ left, top, width: 1, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  return Array.from(data);
}

function isRed([red, green, blue]) {
  return red > 180 && green < 90 && blue < 90;
}

test('OG variant uses contain with a centered white canvas', () => {
  assert.equal(IMAGE_VARIANTS.og.width, 1200);
  assert.equal(IMAGE_VARIANTS.og.height, 630);
  assert.equal(IMAGE_VARIANTS.og.fit, 'contain');
  assert.equal(IMAGE_VARIANTS.og.position, 'center');
  assert.deepEqual(IMAGE_VARIANTS.og.background, { r: 255, g: 255, b: 255, alpha: 1 });
});

test('OG variant preserves edge content for portrait uploads while staying 1200x630', async () => {
  const variants = await createImageVariants(await makeMarkedImage(630, 1200));
  const metadata = await sharp(variants.og).metadata();

  assert.equal(metadata.width, 1200);
  assert.equal(metadata.height, 630);
  assert.equal(isRed(await pixelAt(variants.og, 600, 0)), true);
  assert.equal(isRed(await pixelAt(variants.og, 600, 629)), true);
});

test('OG variant preserves edge content for landscape uploads while staying 1200x630', async () => {
  const variants = await createImageVariants(await makeMarkedImage(2400, 630));
  const metadata = await sharp(variants.og).metadata();

  assert.equal(metadata.width, 1200);
  assert.equal(metadata.height, 630);
  assert.equal(isRed(await pixelAt(variants.og, 0, 315)), true);
  assert.equal(isRed(await pixelAt(variants.og, 1199, 315)), true);
});

test('OG variant preserves edge content for square uploads while thumbnail remains cropped', async () => {
  const variants = await createImageVariants(await makeMarkedImage(1000, 1000));
  const ogMetadata = await sharp(variants.og).metadata();
  const thumbnailMetadata = await sharp(variants.thumbnail).metadata();

  assert.equal(ogMetadata.width, 1200);
  assert.equal(ogMetadata.height, 630);
  assert.equal(thumbnailMetadata.width, 640);
  assert.equal(thumbnailMetadata.height, 360);
  assert.equal(isRed(await pixelAt(variants.og, 600, 0)), true);
  assert.equal(isRed(await pixelAt(variants.og, 600, 629)), true);
  assert.equal(isRed(await pixelAt(variants.thumbnail, 320, 0)), false);
});

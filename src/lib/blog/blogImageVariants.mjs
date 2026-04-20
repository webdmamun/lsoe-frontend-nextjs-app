import sharp from 'sharp';

export const IMAGE_VARIANTS = {
  thumbnail: { directory: 'blog/thumb', width: 640, height: 360, fit: 'cover', quality: 78 },
  featured: { directory: 'blog/featured', width: 1600, height: 1000, fit: 'inside', quality: 84 },
  og: {
    directory: 'blog/og',
    width: 1200,
    height: 630,
    fit: 'contain',
    position: 'center',
    background: { r: 255, g: 255, b: 255, alpha: 1 },
    quality: 82,
  },
};

export async function createImageVariants(buffer) {
  const baseImage = sharp(buffer, { failOn: 'none' }).rotate();

  const entries = await Promise.all(
    Object.entries(IMAGE_VARIANTS).map(async ([name, config]) => {
      const output = await baseImage
        .clone()
        .resize({
          width: config.width,
          height: config.height,
          fit: config.fit,
          position: config.position || sharp.strategy.attention,
          withoutEnlargement: name === 'featured',
          background: config.background || '#ffffff',
        })
        .flatten({ background: '#ffffff' })
        .jpeg({
          quality: config.quality,
          mozjpeg: true,
        })
        .toBuffer();

      return [name, output];
    })
  );

  return Object.fromEntries(entries);
}

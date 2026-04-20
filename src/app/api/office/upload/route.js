import { NextResponse } from 'next/server';
import crypto from 'crypto';
import sharp from 'sharp';
import { isAdminAuthenticated } from '@/lib/blog/adminAuth';

export const runtime = 'nodejs';

const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const OUTPUT_TYPE = 'image/jpeg';
const OUTPUT_EXT = 'jpg';

const IMAGE_VARIANTS = {
  thumbnail: { directory: 'blog/thumb', width: 640, height: 360, fit: 'cover', quality: 78 },
  featured: { directory: 'blog/featured', width: 1600, height: 1000, fit: 'inside', quality: 84 },
  og: { directory: 'blog/og', width: 1200, height: 630, fit: 'cover', quality: 82 },
};

function getR2Config() {
  const accountId = String(process.env.R2_ACCOUNT_ID || '').trim();
  const accessKeyId = String(process.env.R2_ACCESS_KEY_ID || '').trim();
  const secretAccessKey = String(process.env.R2_SECRET_ACCESS_KEY || '').trim();
  const bucket = String(process.env.R2_BUCKET_NAME || '').trim();
  const publicBase = String(process.env.R2_PUBLIC_BASE_URL || '').trim().replace(/\/$/, '');

  if (!accountId || !accessKeyId || !secretAccessKey || !bucket) {
    throw new Error('R2 credentials not configured');
  }

  // R2_ACCOUNT_ID may be stored as the full endpoint URL — extract just the 32-char hex ID
  const idMatch = accountId.match(/([0-9a-f]{32})/i);
  const resolvedAccountId = idMatch ? idMatch[1] : accountId;

  // Use path-style: https://<accountId>.r2.cloudflarestorage.com/<bucket>/<key>
  const endpoint = `https://${resolvedAccountId}.r2.cloudflarestorage.com`;

  return { endpoint, accessKeyId, secretAccessKey, bucket, publicBase };
}

// ------- AWS4 signing helpers — all HMAC steps use Buffer keys to avoid UTF-8/Latin-1 mismatch -------

function sha256hex(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

/** Returns a Buffer — never a string — so it can be safely chained as an HMAC key. */
function hmacBuf(keyBuf, data) {
  return crypto.createHmac('sha256', keyBuf).update(data, 'utf8').digest();
}

function deriveSigningKey(secretAccessKey, dateStamp, region, service) {
  const kDate    = hmacBuf(Buffer.from(`AWS4${secretAccessKey}`, 'utf8'), dateStamp);
  const kRegion  = hmacBuf(kDate,    region);
  const kService = hmacBuf(kRegion,  service);
  return         hmacBuf(kService, 'aws4_request');
}

// ----------------------------------------

async function uploadToR2(key, bodyBuffer, contentType) {
  const { endpoint, accessKeyId, secretAccessKey, bucket } = getR2Config();

  const now = new Date();
  // Format: 20260419T123456Z
  const amzDate  = now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const dateStamp = amzDate.slice(0, 8); // 20260419
  const region   = 'auto';
  const service  = 's3';

  const payloadHash    = sha256hex(bodyBuffer);
  const contentLength  = String(bodyBuffer.byteLength);

  // Path-style URL: endpoint / bucket / key
  const uploadUrl = `${endpoint}/${bucket}/${key}`;
  const host      = new URL(uploadUrl).host;

  // Canonical headers — MUST be sorted lexicographically, lowercase names, trimmed values
  const canonicalHeaders =
    `content-length:${contentLength}\n` +
    `content-type:${contentType}\n` +
    `host:${host}\n` +
    `x-amz-content-sha256:${payloadHash}\n` +
    `x-amz-date:${amzDate}\n`;

  const signedHeaders = 'content-length;content-type;host;x-amz-content-sha256;x-amz-date';

  // Canonical URI is the path portion after the host (includes bucket for path-style)
  const canonicalUri = `/${bucket}/${key}`;

  const canonicalRequest = [
    'PUT',
    canonicalUri,
    '',                  // empty query string
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join('\n');

  const credentialScope  = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign     = [
    'AWS4-HMAC-SHA256',
    amzDate,
    credentialScope,
    sha256hex(canonicalRequest),
  ].join('\n');

  const signingKey  = deriveSigningKey(secretAccessKey, dateStamp, region, service);
  const signature   = crypto.createHmac('sha256', signingKey).update(stringToSign, 'utf8').digest('hex');

  const authorization =
    `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}, ` +
    `SignedHeaders=${signedHeaders}, Signature=${signature}`;

  console.info('[r2-upload] endpoint=%s bucket=%s key=%s size=%s', host, bucket, key, contentLength);

  const response = await fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      'Content-Length':       contentLength,
      'Content-Type':         contentType,
      'x-amz-date':           amzDate,
      'x-amz-content-sha256': payloadHash,
      'Authorization':        authorization,
    },
    body: bodyBuffer,
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    console.error('[r2-upload] failed status=%s body=%s', response.status, text);
    throw new Error(`R2 upload failed (${response.status}): ${text}`);
  }
}

function buildPublicUrl(key) {
  const { publicBase } = getR2Config();
  const base = publicBase || 'https://media.londonschoolofexcellence.com';
  return `${base}/${key}`;
}

function sanitizeFileBase(original) {
  const base = original
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'image';
  const unique = crypto.randomBytes(6).toString('hex');
  return `${base}-${unique}`;
}

async function createImageVariants(buffer) {
  const baseImage = sharp(buffer, { failOn: 'none' }).rotate();

  const entries = await Promise.all(
    Object.entries(IMAGE_VARIANTS).map(async ([name, config]) => {
      const output = await baseImage
        .clone()
        .resize({
          width: config.width,
          height: config.height,
          fit: config.fit,
          position: sharp.strategy.attention,
          withoutEnlargement: name === 'featured',
          background: '#ffffff',
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

export async function POST(request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Only JPEG, PNG, and WebP images are allowed' },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (buffer.byteLength > MAX_BYTES) {
      return NextResponse.json(
        { success: false, error: 'File exceeds 5 MB limit' },
        { status: 400 }
      );
    }

    const fileBase = sanitizeFileBase(file.name || 'upload');
    const filename = `${fileBase}.${OUTPUT_EXT}`;
    const processed = await createImageVariants(buffer);

    const keys = {
      thumbnail: `${IMAGE_VARIANTS.thumbnail.directory}/${filename}`,
      featured: `${IMAGE_VARIANTS.featured.directory}/${filename}`,
      og: `${IMAGE_VARIANTS.og.directory}/${filename}`,
    };

    await Promise.all(
      Object.entries(processed).map(([name, output]) => uploadToR2(keys[name], output, OUTPUT_TYPE))
    );

    const urls = {
      thumbnailUrl: buildPublicUrl(keys.thumbnail),
      featuredUrl: buildPublicUrl(keys.featured),
      ogUrl: buildPublicUrl(keys.og),
    };

    return NextResponse.json({
      success: true,
      url: urls.featuredUrl,
      ...urls,
      variants: {
        thumbnail: urls.thumbnailUrl,
        featured: urls.featuredUrl,
        og: urls.ogUrl,
      },
    });
  } catch (error) {
    console.error('[/api/office/upload] POST error:', error.message);
    return NextResponse.json(
      { success: false, error: error.message || 'Upload failed' },
      { status: 500 }
    );
  }
}

import crypto from 'crypto';
import { cookies } from 'next/headers';

export const OFFICE_ROLES = {
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
};

const SESSION_COOKIE = 'office_admin_session';
const LEGACY_COOKIE = 'admin_auth_token';
const LEGACY_COOKIE_VALUE = 'secure_authenticated_session';
const SESSION_MAX_AGE = 60 * 60 * 24; // 1 day

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error('ADMIN_SESSION_SECRET env var is not set');
  return secret;
}

function base64UrlEncode(value) {
  return Buffer.from(value, 'utf8').toString('base64url');
}

function base64UrlDecode(value) {
  return Buffer.from(value, 'base64url').toString('utf8');
}

function sign(payloadB64) {
  return crypto.createHmac('sha256', getSessionSecret()).update(payloadB64).digest('base64url');
}

function buildCookieValue(payload) {
  const payloadB64 = base64UrlEncode(JSON.stringify(payload));
  const signature = sign(payloadB64);
  return `${payloadB64}.${signature}`;
}

function parseCookieValue(cookieValue) {
  if (!cookieValue || !cookieValue.includes('.')) return null;

  const [payloadB64, signature] = cookieValue.split('.');
  if (!payloadB64 || !signature) return null;
  if (signature !== sign(payloadB64)) return null;

  try {
    const parsed = JSON.parse(base64UrlDecode(payloadB64));
    if (!parsed?.exp || Date.now() > parsed.exp) return null;
    return parsed;
  } catch {
    return null;
  }
}

export async function setOfficeAuthCookies({
  role,
  email = '',
  name = '',
  userId = '',
  source = 'env',
}) {
  const cookieStore = await cookies();
  const payload = {
    role: role === OFFICE_ROLES.SUPER_ADMIN ? OFFICE_ROLES.SUPER_ADMIN : OFFICE_ROLES.ADMIN,
    email: String(email || '').trim().toLowerCase(),
    name: String(name || '').trim(),
    userId: String(userId || '').trim(),
    source: String(source || 'env'),
    exp: Date.now() + SESSION_MAX_AGE * 1000,
  };

  cookieStore.set({
    name: LEGACY_COOKIE,
    value: LEGACY_COOKIE_VALUE,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: SESSION_MAX_AGE,
  });

  cookieStore.set({
    name: SESSION_COOKIE,
    value: buildCookieValue(payload),
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: SESSION_MAX_AGE,
  });
}

export async function clearOfficeAuthCookies() {
  const cookieStore = await cookies();
  cookieStore.delete(LEGACY_COOKIE);
  cookieStore.delete(SESSION_COOKIE);
}

export async function getOfficeSession() {
  const cookieStore = await cookies();
  const legacyToken = cookieStore.get(LEGACY_COOKIE)?.value;
  const signedSession = cookieStore.get(SESSION_COOKIE)?.value;

  const parsed = parseCookieValue(signedSession);
  if (parsed) {
    return {
      isAuthenticated: true,
      role: parsed.role,
      email: parsed.email || '',
      name: parsed.name || '',
      userId: parsed.userId || '',
      source: parsed.source || 'env',
    };
  }

  if (legacyToken === LEGACY_COOKIE_VALUE) {
    return {
      isAuthenticated: true,
      role: OFFICE_ROLES.ADMIN,
      email: '',
      name: '',
      userId: '',
      source: 'legacy',
    };
  }

  return {
    isAuthenticated: false,
    role: null,
    email: '',
    name: '',
    userId: '',
    source: '',
  };
}

export async function isAdminAuthenticated() {
  const session = await getOfficeSession();
  return session.isAuthenticated;
}

export async function isSuperAdminAuthenticated() {
  const session = await getOfficeSession();
  return session.isAuthenticated && session.role === OFFICE_ROLES.SUPER_ADMIN;
}


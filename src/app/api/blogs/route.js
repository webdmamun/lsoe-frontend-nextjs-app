import { NextResponse } from 'next/server';
import { listPublishedBlogs } from '@/lib/blog/blogService';

const MAX_LIMIT = 50;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '0', 10) || 0, MAX_LIMIT) || null;
    const category = searchParams.get('category') || '';
    const tag = searchParams.get('tag') || '';
    const search = searchParams.get('search') || '';

    const data = await listPublishedBlogs({ limit, category, tag, search });

    return NextResponse.json(
      { success: true, data, total: data.length },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('[/api/blogs] GET error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json({ success: false, error: 'Method Not Allowed' }, { status: 405 });
}

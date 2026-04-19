import { NextResponse } from 'next/server';
import { getPublishedBlogBySlug } from '@/lib/blog/blogService';

export async function GET(_request, { params }) {
  try {
    const blog = await getPublishedBlogBySlug(params.slug);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(
      { success: true, data: blog },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('[/api/blogs/[slug]] GET error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createBlog, listAdminBlogs } from '@/lib/blog/blogService';
import { isAdminAuthenticated } from '@/lib/blog/adminAuth';

function unauthorised() {
  return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
}

export async function GET(request) {
  if (!(await isAdminAuthenticated())) return unauthorised();

  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || '';

    const data = await listAdminBlogs({ search, status });
    return NextResponse.json({ success: true, data, total: data.length });
  } catch (error) {
    console.error('[/api/office/blogs] GET error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  if (!(await isAdminAuthenticated())) return unauthorised();

  try {
    const body = await request.json();
    const created = await createBlog(body);

    // Invalidate ISR cache so /blog reflects new published post immediately
    revalidatePath('/blog', 'page');
    if (created.status === 'published' && created.slug) {
      revalidatePath(`/blog/${created.slug}`, 'page');
    }

    return NextResponse.json({ success: true, data: created }, { status: 201 });
  } catch (error) {
    console.error('[/api/office/blogs] POST error:', error);

    if (error.code === 'VALIDATION_ERROR') {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    if (error.code === 'DUPLICATE_SLUG') {
      return NextResponse.json({ success: false, error: 'Slug already exists' }, { status: 409 });
    }

    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

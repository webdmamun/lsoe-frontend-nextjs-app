import { NextResponse } from 'next/server';
import { deleteBlog, getAdminBlogById, updateBlog } from '@/lib/blog/blogService';
import { isAdminAuthenticated } from '@/lib/blog/adminAuth';

function unauthorised() {
  return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
}

export async function GET(_request, { params }) {
  if (!(await isAdminAuthenticated())) return unauthorised();

  try {
    const data = await getAdminBlogById(params.id);
    if (!data) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('[/api/office/blogs/[id]] GET error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  if (!(await isAdminAuthenticated())) return unauthorised();

  try {
    const body = await request.json();
    const updated = await updateBlog(params.id, body);

    if (!updated) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('[/api/office/blogs/[id]] PATCH error:', error);

    if (error.code === 'VALIDATION_ERROR') {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    if (error.code === 'DUPLICATE_SLUG') {
      return NextResponse.json({ success: false, error: 'Slug already exists' }, { status: 409 });
    }

    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(_request, { params }) {
  if (!(await isAdminAuthenticated())) return unauthorised();

  try {
    const removed = await deleteBlog(params.id);

    if (!removed) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    console.error('[/api/office/blogs/[id]] DELETE error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

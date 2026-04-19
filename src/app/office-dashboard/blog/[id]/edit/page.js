'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BlogForm from '@/components/office/blog/BlogForm';
import DashboardShell from '@/components/office/DashboardShell';
import { Loader2 } from 'lucide-react';

export default function EditBlogPage({ params }) {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      setError('');

      try {
        const res = await fetch(`/api/office/blogs/${params.id}`, { cache: 'no-store' });
        const json = await res.json();
        if (!res.ok || !json.success) {
          throw new Error(json.error || 'Failed to load blog post');
        }
        setPost(json.data);
      } catch (err) {
        setError(err.message || 'Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };

    run();
  }, [params.id]);

  const handleUpdate = async (payload) => {
    const res = await fetch(`/api/office/blogs/${params.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    if (!res.ok || !json.success) {
      throw new Error(json.error || 'Failed to update blog post');
    }

    router.push('/office-dashboard/blog');
  };

  if (isLoading) {
    return (
      <DashboardShell>
        <div className="flex items-center justify-center min-h-[60vh] text-slate-500">
          <Loader2 className="w-6 h-6 animate-spin text-brand-secondary mr-3" />
          <span className="text-sm font-semibold">Loading post…</span>
        </div>
      </DashboardShell>
    );
  }

  if (error || !post) {
    return (
      <DashboardShell>
        <div className="flex items-center justify-center min-h-[60vh] p-6">
          <div className="bg-white border border-red-200 text-red-600 rounded-2xl px-6 py-5 text-sm font-medium shadow-sm max-w-md text-center">
            {error || 'Post not found'}
          </div>
        </div>
      </DashboardShell>
    );
  }

  return (
    <BlogForm
      initialData={post}
      heading="Edit Blog Post"
      description="Update content, SEO metadata, and publication status."
      submitLabel="Update Post"
      onSubmit={handleUpdate}
    />
  );
}

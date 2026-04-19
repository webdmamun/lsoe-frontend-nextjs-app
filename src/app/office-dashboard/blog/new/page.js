'use client';

import { useRouter } from 'next/navigation';
import BlogForm from '@/components/office/blog/BlogForm';

export default function CreateBlogPage() {
  const router = useRouter();

  const handleCreate = async (payload) => {
    const res = await fetch('/api/office/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    if (!res.ok || !json.success) {
      throw new Error(json.error || 'Failed to create blog');
    }

    router.refresh();
    router.push('/office-dashboard/blog');
  };

  return (
    <BlogForm
      heading="Create Blog Post"
      description="Draft or publish a new SEO blog article for the public website."
      submitLabel="Save Post"
      onSubmit={handleCreate}
    />
  );
}

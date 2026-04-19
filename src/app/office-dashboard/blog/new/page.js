'use client';

import BlogForm from '@/components/office/blog/BlogForm';

export default function CreateBlogPage() {
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
    // Navigation is handled by BlogForm after showing success message
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

'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  AlertTriangle,
  CalendarDays,
  Eye,
  EyeOff,
  FileText,
  Loader2,
  PenSquare,
  Plus,
  RefreshCw,
  Search,
  Tag,
  Trash2,
  UserCircle2,
  X,
} from 'lucide-react';
import DashboardShell from '@/components/office/DashboardShell';

export default function OfficeBlogListPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [actionLoadingId, setActionLoadingId] = useState('');
  const [error, setError] = useState('');
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set('search', search.trim());
      if (statusFilter !== 'all') params.set('status', statusFilter);
      const res = await fetch(`/api/office/blogs?${params.toString()}`, { cache: 'no-store' });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || 'Failed to fetch blogs');
      setPosts(json.data || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch blogs');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  const statusCounts = useMemo(() => {
    return posts.reduce(
      (acc, post) => {
        if (post.status === 'published') acc.published += 1;
        else acc.draft += 1;
        return acc;
      },
      { published: 0, draft: 0 }
    );
  }, [posts]);

  const categoryCount = useMemo(() => {
    return new Set(posts.map((p) => p.category).filter(Boolean)).size;
  }, [posts]);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/office/blogs/${deleteTarget.id}`, { method: 'DELETE' });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || 'Delete failed');
      setDeleteTarget(null);
      await fetchPosts();
    } catch (err) {
      setError(err.message || 'Delete failed');
      setDeleteTarget(null);
    } finally {
      setIsDeleting(false);
    }
  };

  const toggleStatus = async (post) => {
    const nextStatus = post.status === 'published' ? 'draft' : 'published';
    setActionLoadingId(post.id);
    try {
      const res = await fetch(`/api/office/blogs/${post.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...post,
          status: nextStatus,
          publishDate: nextStatus === 'published'
            ? post.publishDate || new Date().toISOString()
            : post.publishDate,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || 'Update failed');
      await fetchPosts();
    } catch (err) {
      setError(err.message || 'Update failed');
    } finally {
      setActionLoadingId('');
    }
  };

  return (
    <DashboardShell>
      <div className="p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-start mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">Blog Manager</p>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Blog Management</h1>
              <p className="text-sm text-slate-500 mt-1">Create, edit, publish, and manage SEO blog posts.</p>
            </div>
            <Link
              href="/office-dashboard/blog/new"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-primary text-white font-bold hover:brightness-110 transition-all shrink-0"
            >
              <Plus className="w-4 h-4" /> Create Post
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <StatCard label="Total Posts" value={posts.length} icon={FileText} color="blue" />
            <StatCard label="Published" value={statusCounts.published} icon={Eye} color="green" />
            <StatCard label="Drafts" value={statusCounts.draft} icon={EyeOff} color="amber" />
            <StatCard label="Categories" value={categoryCount} icon={Tag} color="purple" />
          </div>

          {/* Filters */}
          <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 mb-5 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && fetchPosts()}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/40"
                  placeholder="Search by title, slug, author, category — press Enter"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/40"
              >
                <option value="all">All statuses</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
              <button
                onClick={fetchPosts}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
              </button>
            </div>
          </div>

          {/* Error */}
          {error ? (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              {error}
              <button onClick={() => setError('')} className="ml-auto"><X className="w-4 h-4" /></button>
            </div>
          ) : null}

          {/* Content */}
          {isLoading ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center shadow-sm">
              <Loader2 className="w-8 h-8 animate-spin text-brand-secondary mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-500">Loading blog posts…</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-16 text-center shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-7 h-7" />
              </div>
              <p className="text-lg font-bold text-slate-700">No posts yet</p>
              <p className="text-sm text-slate-500 mt-1 mb-5">Create your first blog post to start publishing content.</p>
              <Link
                href="/office-dashboard/blog/new"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-primary text-white font-bold hover:brightness-110 transition-all"
              >
                <Plus className="w-4 h-4" /> Create Blog Post
              </Link>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-100">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-slate-400">Post</th>
                      <th className="px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-slate-400">Author</th>
                      <th className="px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-slate-400">Category</th>
                      <th className="px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-slate-400">Status</th>
                      <th className="px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-slate-400">Publish Date</th>
                      <th className="px-5 py-3.5 text-right text-[11px] font-black uppercase tracking-wider text-slate-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-slate-50/60 transition-colors group">
                        <td className="px-5 py-4 min-w-[280px]">
                          <p className="text-sm font-bold text-slate-900 leading-snug">{post.title}</p>
                          <p className="text-xs text-slate-400 mt-0.5 font-mono">/{post.slug}</p>
                          {post.excerpt && (
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2 max-w-[340px]">{post.excerpt}</p>
                          )}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 text-sm text-slate-700">
                            <UserCircle2 className="w-4 h-4 text-slate-400" />
                            {post.authorName}
                          </span>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                            {post.category || '—'}
                          </span>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                            post.status === 'published'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}>
                            {post.status === 'published'
                              ? <Eye className="w-3 h-3" />
                              : <EyeOff className="w-3 h-3" />
                            }
                            {post.status === 'published' ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                            <CalendarDays className="w-4 h-4 text-slate-400" />
                            {post.publishDate
                              ? new Date(post.publishDate).toLocaleDateString('en-GB')
                              : <span className="text-slate-400 italic">Not set</span>
                            }
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex justify-end flex-wrap gap-2">
                            <Link
                              href={`/office-dashboard/blog/${post.id}/edit`}
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
                            >
                              <PenSquare className="w-3.5 h-3.5" /> Edit
                            </Link>
                            <button
                              onClick={() => toggleStatus(post)}
                              disabled={actionLoadingId === post.id}
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 disabled:opacity-60 transition-colors"
                            >
                              {actionLoadingId === post.id ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              ) : post.status === 'published' ? (
                                <EyeOff className="w-3.5 h-3.5" />
                              ) : (
                                <Eye className="w-3.5 h-3.5" />
                              )}
                              {post.status === 'published' ? 'Unpublish' : 'Publish'}
                            </button>
                            <button
                              onClick={() => setDeleteTarget(post)}
                              disabled={actionLoadingId === post.id}
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-red-200 text-red-600 text-sm font-semibold hover:bg-red-50 disabled:opacity-60 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 border-t border-slate-100 text-xs text-slate-400">
                {posts.length} post{posts.length !== 1 ? 's' : ''} total
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete confirmation modal */}
      {deleteTarget ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setDeleteTarget(null)} />
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-4 border border-red-100">
                <AlertTriangle className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Delete Post?</h3>
              <p className="text-sm text-slate-500 mb-1">Permanently deleting:</p>
              <p className="text-base font-bold text-slate-800 mb-2">{deleteTarget.title}</p>
              <p className="text-xs text-red-500 font-semibold mb-7">This action cannot be undone.</p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setDeleteTarget(null)}
                  disabled={isDeleting}
                  className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="flex-1 py-3 px-4 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                >
                  {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </DashboardShell>
  );
}

function StatCard({ label, value, icon: Icon, color = 'blue' }) {
  const colors = {
    blue:   'text-blue-600 bg-blue-50',
    green:  'text-green-600 bg-green-50',
    amber:  'text-amber-600 bg-amber-50',
    purple: 'text-purple-600 bg-purple-50',
  };
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between min-h-[92px]">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="text-2xl font-black text-slate-900 mt-1">{value}</p>
      </div>
      {Icon && (
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${colors[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
      )}
    </div>
  );
}

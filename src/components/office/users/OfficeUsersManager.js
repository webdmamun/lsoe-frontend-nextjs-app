'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  FileSearch,
  Loader2,
  Plus,
  RefreshCw,
  Search,
  Shield,
  Trash2,
  UserPlus,
  Users,
  X,
} from 'lucide-react';
import DashboardShell from '@/components/office/DashboardShell';

const DEFAULT_FORM = {
  fullName: '',
  email: '',
  password: '',
  role: 'admin',
};

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('en-GB');
}

export default function OfficeUsersManager() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [actionLoadingId, setActionLoadingId] = useState('');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [createForm, setCreateForm] = useState(DEFAULT_FORM);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sessionInfo, setSessionInfo] = useState({ userId: '', email: '' });
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchSession = async () => {
    const res = await fetch('/api/office/session', { cache: 'no-store' });
    const json = await res.json();
    if (res.ok && json.success) {
      setSessionInfo({
        userId: json.data.userId || '',
        email: (json.data.email || '').toLowerCase(),
      });
    }
  };

  const fetchUsers = async () => {
    setIsLoading(true);
    setError('');
    setSuccess('');
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set('search', search.trim());
      if (roleFilter !== 'all') params.set('role', roleFilter);
      const query = params.toString();
      const res = await fetch(`/api/office/users${query ? `?${query}` : ''}`, { cache: 'no-store' });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || 'Failed to load users');
      setUsers(json.data || []);
    } catch (err) {
      setError(err.message || 'Failed to load users');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSession();
    fetchUsers();
  }, []);

  const canDelete = (user) => {
    if (user.id === 'env-super-admin') return false;
    if (sessionInfo.userId && user.id === sessionInfo.userId) return false;
    if (sessionInfo.email && user.email.toLowerCase() === sessionInfo.email) return false;
    return true;
  };

  const counts = useMemo(() => {
    return users.reduce(
      (acc, user) => {
        if (user.role === 'super_admin') acc.superAdmins += 1;
        else acc.admins += 1;
        return acc;
      },
      { admins: 0, superAdmins: 0 }
    );
  }, [users]);

  const handleCreate = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!createForm.fullName.trim()) nextErrors.fullName = 'Full name is required';
    if (!createForm.email.trim()) nextErrors.email = 'Email is required';
    if (!createForm.email.includes('@')) nextErrors.email = 'Enter a valid email';
    if (!createForm.password.trim()) nextErrors.password = 'Password is required';
    if (createForm.password.length < 10) nextErrors.password = 'Use at least 10 characters';
    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      return;
    }
    setFormErrors({});
    setError('');
    setSuccess('');
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/office/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createForm),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || 'Failed to create user');
      setIsCreateOpen(false);
      setCreateForm(DEFAULT_FORM);
      setFormErrors({});
      setSuccess('Admin user created successfully.');
      await fetchUsers();
    } catch (err) {
      setError(err.message || 'Failed to create user');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget || !canDelete(deleteTarget)) return;
    setIsDeleting(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch(`/api/office/users/${deleteTarget.id}`, { method: 'DELETE' });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || 'Failed to delete user');
      setSuccess('Admin user deleted successfully.');
      setDeleteTarget(null);
      await fetchUsers();
    } catch (err) {
      setError(err.message || 'Failed to delete user');
      setDeleteTarget(null);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <DashboardShell>
      <div className="p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-start mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">Super Admin</p>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Admin User Management</h1>
              <p className="text-sm text-slate-500 mt-1">Manage office admin accounts and access levels.</p>
            </div>
            <button
              onClick={() => setIsCreateOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-primary text-white font-bold hover:brightness-110 transition-all shrink-0"
            >
              <Plus className="w-4 h-4" /> Create Admin
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <StatCard label="Total Admins" value={users.length} icon={Users} color="blue" />
            <StatCard label="Admins" value={counts.admins} icon={Shield} color="indigo" />
            <StatCard label="Super Admins" value={counts.superAdmins} icon={Shield} color="purple" />
          </div>

          {/* Filters */}
          <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 mb-5 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && fetchUsers()}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/40"
                  placeholder="Search by name or email — press Enter"
                />
              </div>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/40"
              >
                <option value="all">All roles</option>
                <option value="admin">Admin</option>
                <option value="super_admin">Super admin</option>
              </select>
              <button
                onClick={fetchUsers}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
              </button>
            </div>
          </div>

          {/* Alerts */}
          {error ? (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              {error}
              <button onClick={() => setError('')} className="ml-auto"><X className="w-4 h-4" /></button>
            </div>
          ) : null}
          {success ? (
            <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
              <Shield className="w-4 h-4 shrink-0" />
              {success}
              <button onClick={() => setSuccess('')} className="ml-auto"><X className="w-4 h-4" /></button>
            </div>
          ) : null}

          {/* Table */}
          {isLoading ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center shadow-sm">
              <Loader2 className="w-8 h-8 animate-spin text-brand-secondary mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-500">Loading users…</p>
            </div>
          ) : users.length === 0 ? (
            <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-16 text-center shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 mx-auto mb-4 flex items-center justify-center">
                <FileSearch className="w-7 h-7" />
              </div>
              <p className="text-lg font-bold text-slate-700">No users found</p>
              <p className="text-sm text-slate-500 mt-1 mb-5">Create your first admin user to start managing access.</p>
              <button
                onClick={() => setIsCreateOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-primary text-white font-bold hover:brightness-110 transition-all"
              >
                <Plus className="w-4 h-4" /> Create Admin
              </button>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-100">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-slate-400">Name</th>
                      <th className="px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-slate-400">Email</th>
                      <th className="px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-slate-400">Role</th>
                      <th className="px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-slate-400">Status</th>
                      <th className="px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-slate-400">Created</th>
                      <th className="px-5 py-3.5 text-right text-[11px] font-black uppercase tracking-wider text-slate-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center text-xs font-extrabold shrink-0">
                              {(user.name || user.email || 'A')[0].toUpperCase()}
                            </div>
                            <span className="text-sm font-semibold text-slate-800">{user.name || '—'}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-600">{user.email}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                            user.role === 'super_admin'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            <Shield className="w-3 h-3" />
                            {user.role === 'super_admin' ? 'Super Admin' : 'Admin'}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                            {user.status || 'active'}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-600">{formatDate(user.createdAt)}</td>
                        <td className="px-5 py-4 text-right">
                          <button
                            onClick={() => canDelete(user) && setDeleteTarget(user)}
                            disabled={!canDelete(user) || actionLoadingId === user.id}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-red-200 text-red-600 text-sm font-semibold hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            title={!canDelete(user) ? 'Cannot delete your own account or env admin' : 'Delete user'}
                          >
                            {actionLoadingId === user.id
                              ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              : <Trash2 className="w-3.5 h-3.5" />
                            }
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 border-t border-slate-100 text-xs text-slate-400">
                {users.length} admin{users.length !== 1 ? 's' : ''} total · Current super admin account cannot be deleted
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create User Modal */}
      {isCreateOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsCreateOpen(false)} />
          <div className="relative z-10 w-full max-w-xl bg-white border border-slate-100 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="text-xl font-black text-slate-900">Create Admin User</h2>
                <p className="text-sm text-slate-500 mt-1">Invite a new office admin account.</p>
              </div>
              <button onClick={() => setIsCreateOpen(false)} className="p-2 rounded-lg hover:bg-slate-100 text-slate-500">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleCreate} className="space-y-4">
              <FieldLabel label="Full Name" error={formErrors.fullName}>
                <input
                  value={createForm.fullName}
                  onChange={(e) => {
                    setFormErrors((prev) => ({ ...prev, fullName: '' }));
                    setCreateForm((prev) => ({ ...prev, fullName: e.target.value }));
                  }}
                  className={inputClass(formErrors.fullName)}
                  placeholder="e.g. Operations Admin"
                />
              </FieldLabel>
              <FieldLabel label="Email" error={formErrors.email}>
                <input
                  type="email"
                  value={createForm.email}
                  onChange={(e) => {
                    setFormErrors((prev) => ({ ...prev, email: '' }));
                    setCreateForm((prev) => ({ ...prev, email: e.target.value }));
                  }}
                  className={inputClass(formErrors.email)}
                  placeholder="admin@lsoe.co.uk"
                />
              </FieldLabel>
              <FieldLabel label="Password" error={formErrors.password}>
                <input
                  type="password"
                  value={createForm.password}
                  onChange={(e) => {
                    setFormErrors((prev) => ({ ...prev, password: '' }));
                    setCreateForm((prev) => ({ ...prev, password: e.target.value }));
                  }}
                  className={inputClass(formErrors.password)}
                  placeholder="Minimum 10 chars with upper/lowercase + number"
                />
                <p className="text-xs text-slate-400 mt-1">At least 10 characters with uppercase, lowercase, and a number.</p>
              </FieldLabel>
              <FieldLabel label="Role">
                <select
                  value={createForm.role}
                  onChange={(e) => setCreateForm((prev) => ({ ...prev, role: e.target.value }))}
                  className={inputClass()}
                >
                  <option value="admin">Admin</option>
                  <option value="super_admin">Super Admin</option>
                </select>
              </FieldLabel>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-xs text-slate-500">
                Super admin creation is only enabled when server config explicitly allows it.
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-sm font-bold hover:brightness-110 disabled:opacity-60 transition-all"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
                  Create Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {/* Delete confirmation modal */}
      {deleteTarget ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setDeleteTarget(null)} />
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-4 border border-red-100">
                <AlertTriangle className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Delete Admin?</h3>
              <p className="text-sm text-slate-500 mb-1">Permanently deleting:</p>
              <p className="text-base font-bold text-slate-800 mb-2">{deleteTarget.email}</p>
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

function FieldLabel({ label, children, error }) {
  return (
    <label className="block">
      <span className="block text-sm font-bold text-slate-700 mb-1.5">{label}</span>
      {children}
      {error ? <p className="text-xs text-red-600 font-medium mt-1">{error}</p> : null}
    </label>
  );
}

function inputClass(hasError = false) {
  return `w-full px-3 py-2.5 rounded-xl border bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/40 ${
    hasError ? 'border-red-300' : 'border-slate-200'
  }`;
}

function StatCard({ label, value, icon: Icon, color = 'blue' }) {
  const colors = {
    blue:   'text-blue-600 bg-blue-50',
    indigo: 'text-indigo-600 bg-indigo-50',
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

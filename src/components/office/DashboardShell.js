'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { LayoutDashboard, LogOut, Newspaper, Shield } from 'lucide-react';

export default function DashboardShell({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sessionMeta, setSessionMeta] = useState({ name: 'Admin User', role: 'admin' });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/office/session', { cache: 'no-store' });
        const json = await res.json();
        if (!mounted) return;
        const role = json?.data?.role || 'admin';
        const name = json?.data?.name || json?.data?.email || 'Admin User';
        setSessionMeta({ name, role });
      } catch { /* keep defaults */ }
    })();
    return () => { mounted = false; };
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/office-login');
  };

  const navItems = [
    { href: '/office-dashboard', label: 'Dashboard', icon: LayoutDashboard, exact: true },
    { href: '/office-dashboard/blog', label: 'Blogs', icon: Newspaper },
    { href: '/office-dashboard/users', label: 'Users', icon: Shield },
  ];

  const initials = sessionMeta.name
    .split(' ')
    .map((w) => w[0] || '')
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'A';

  return (
    <div className="min-h-screen flex bg-slate-100/70">
      {/* ── Sidebar ── */}
      <aside className="hidden lg:flex w-64 xl:w-72 bg-[#012759] text-white flex-col fixed inset-y-0 z-20 shadow-xl">
        <div className="p-6 xl:p-8 border-b border-white/10">
          <div className="text-xl xl:text-2xl font-black tracking-tight text-white">LSOE Admin</div>
          <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-bold">Office Dashboard</p>
          <div className="mt-5 rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
            <p className="text-sm font-bold text-white truncate">{sessionMeta.name}</p>
            <p className="text-[11px] uppercase tracking-wider text-slate-300 mt-0.5">
              {String(sessionMeta.role || 'admin').replace('_', ' ')}
            </p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ href, label, icon: Icon, exact }) => {
            const isActive = exact ? pathname === href : pathname.startsWith(href);
            return (
              <button
                key={href}
                onClick={() => router.push(href)}
                className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#26b2e6]" />}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-1">
          <div className="flex items-center gap-3 px-4 py-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-black text-white shrink-0">
              {initials}
            </div>
            <p className="text-sm font-semibold text-white truncate">{sessionMeta.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium text-sm transition-colors"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── Mobile top bar ── */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-20 bg-[#012759] px-4 h-14 flex items-center justify-between shadow-md">
        <span className="text-white font-black text-lg">LSOE Admin</span>
        <div className="flex items-center gap-1">
          {navItems.map(({ href, label, icon: Icon, exact }) => {
            const isActive = exact ? pathname === href : pathname.startsWith(href);
            return (
              <button
                key={href}
                onClick={() => router.push(href)}
                title={label}
                className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
          <button
            onClick={handleLogout}
            title="Sign Out"
            className="p-2 rounded-lg text-slate-400 hover:text-white"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Main content ── */}
      <main className="flex-1 lg:ml-64 xl:ml-72 pt-14 lg:pt-0 min-h-screen">
        {children}
      </main>
    </div>
  );
}

"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  LogOut, Users, Search, Loader2, Handshake, Gift, Trash2, X,
  Mail, Phone, Globe2, MapPin, CalendarDays, GraduationCap,
  Building2, AlertTriangle, RefreshCw, Eye, BookOpen, ChevronDown,
  UserCheck, Star, Clock, CheckCircle2, XCircle, Briefcase,
} from "lucide-react";

// ─── Status Configurations ────────────────────────────────────────────────────
const STATUS_CONFIG = {
  applications: {
    statuses: ["New", "Contacted", "Qualified", "Booked", "Enrolled", "Closed"],
    colors: {
      New:       { bg: "bg-blue-100",   text: "text-blue-700",   dot: "bg-blue-500",   border: "border-blue-200"   },
      Contacted: { bg: "bg-amber-100",  text: "text-amber-700",  dot: "bg-amber-500",  border: "border-amber-200"  },
      Qualified: { bg: "bg-purple-100", text: "text-purple-700", dot: "bg-purple-500", border: "border-purple-200" },
      Booked:    { bg: "bg-orange-100", text: "text-orange-700", dot: "bg-orange-500", border: "border-orange-200" },
      Enrolled:  { bg: "bg-green-100",  text: "text-green-700",  dot: "bg-green-500",  border: "border-green-200"  },
      Closed:    { bg: "bg-gray-100",   text: "text-gray-500",   dot: "bg-gray-400",   border: "border-gray-200"   },
    },
  },
  partners: {
    statuses: ["New", "Reviewing", "Meeting Scheduled", "Active", "Rejected"],
    colors: {
      New:                { bg: "bg-blue-100",   text: "text-blue-700",   dot: "bg-blue-500",   border: "border-blue-200"   },
      Reviewing:          { bg: "bg-amber-100",  text: "text-amber-700",  dot: "bg-amber-500",  border: "border-amber-200"  },
      "Meeting Scheduled":{ bg: "bg-purple-100", text: "text-purple-700", dot: "bg-purple-500", border: "border-purple-200" },
      Active:             { bg: "bg-green-100",  text: "text-green-700",  dot: "bg-green-500",  border: "border-green-200"  },
      Rejected:           { bg: "bg-red-100",    text: "text-red-700",    dot: "bg-red-500",    border: "border-red-200"    },
    },
  },
  referrals: {
    statuses: ["Pending", "Contacted", "Enrolled", "Rewarded", "Closed"],
    colors: {
      Pending:   { bg: "bg-blue-100",    text: "text-blue-700",    dot: "bg-blue-500",    border: "border-blue-200"    },
      Contacted: { bg: "bg-amber-100",   text: "text-amber-700",   dot: "bg-amber-500",   border: "border-amber-200"   },
      Enrolled:  { bg: "bg-green-100",   text: "text-green-700",   dot: "bg-green-500",   border: "border-green-200"   },
      Rewarded:  { bg: "bg-emerald-100", text: "text-emerald-700", dot: "bg-emerald-500", border: "border-emerald-200" },
      Closed:    { bg: "bg-gray-100",    text: "text-gray-500",    dot: "bg-gray-400",    border: "border-gray-200"    },
    },
  },
};

const ENDPOINTS = {
  applications: "/api/applications",
  partners: "/api/partners",
  referrals: "/api/referrals",
};

// ─── Helper: Status Pill ─────────────────────────────────────────────────────
function StatusPill({ status, tab }) {
  const cfg = STATUS_CONFIG[tab]?.colors[status];
  if (!cfg) return <span className="text-xs text-gray-400">{status || "—"}</span>;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${cfg.bg} ${cfg.text} ${cfg.border} whitespace-nowrap`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {status}
    </span>
  );
}

// ─── Helper: Status Select Dropdown ─────────────────────────────────────────
function StatusSelect({ item, tab, onUpdate, isUpdating }) {
  const statuses = STATUS_CONFIG[tab]?.statuses || [];
  const cfg = STATUS_CONFIG[tab]?.colors[item.status];

  return (
    <div className="relative">
      <select
        value={item.status || ""}
        onChange={(e) => onUpdate(item.id, e.target.value)}
        disabled={isUpdating === item.id}
        onClick={(e) => e.stopPropagation()}
        className={`appearance-none text-xs font-bold pl-2.5 pr-7 py-1.5 rounded-full border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-secondary transition-all ${
          cfg ? `${cfg.bg} ${cfg.text} ${cfg.border}` : "bg-gray-100 text-gray-600 border-gray-200"
        } ${isUpdating === item.id ? "opacity-50 cursor-wait" : ""}`}
      >
        {statuses.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-1.5 flex items-center">
        {isUpdating === item.id
          ? <Loader2 className="w-3 h-3 animate-spin text-gray-400" />
          : <ChevronDown className="w-3 h-3 text-current opacity-60" />
        }
      </div>
    </div>
  );
}

// ─── Delete Confirm Modal ────────────────────────────────────────────────────
function DeleteModal({ item, tab, onConfirm, onCancel, isDeleting }) {
  const name = tab === "referrals"
    ? `${item.studentFirstName} ${item.studentLastName}`
    : `${item.firstName} ${item.lastName}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full z-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-5 border border-red-100">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-extrabold text-gray-900 mb-2">Delete Lead?</h3>
          <p className="text-sm text-gray-500 font-medium mb-1">
            You are about to permanently delete:
          </p>
          <p className="text-base font-bold text-gray-800 mb-6">{name}</p>
          <p className="text-xs text-red-500 font-semibold mb-8">This action cannot be undone.</p>
          <div className="flex gap-3 w-full">
            <button
              onClick={onCancel}
              disabled={isDeleting}
              className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isDeleting}
              className="flex-1 py-3 px-4 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
            >
              {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Detail Drawer ───────────────────────────────────────────────────────────
function DetailDrawer({ item, tab, onClose, onStatusUpdate, isUpdating }) {
  if (!item) return null;

  const statuses = STATUS_CONFIG[tab]?.statuses || [];
  const name = tab === "referrals"
    ? `${item.studentFirstName} ${item.studentLastName}`
    : `${item.firstName} ${item.lastName}`;
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();

  const Field = ({ label, value, icon: Icon }) => (
    <div className="space-y-1">
      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
        {Icon && <Icon className="w-3 h-3" />}{label}
      </p>
      <p className="text-sm font-semibold text-gray-800 break-all">{value || "—"}</p>
    </div>
  );

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-40 flex flex-col border-l border-gray-200 overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100 bg-slate-50 flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center font-extrabold text-xl shrink-0 shadow-lg shadow-brand-primary/20">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-extrabold text-gray-900 truncate">{name}</h2>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            {new Date(item.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <div className="mt-2">
            <StatusPill status={item.status} tab={tab} />
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors shrink-0">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Status Changer */}
      <div className="px-6 py-4 border-b border-gray-100">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Update Status</p>
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => {
            const cfg = STATUS_CONFIG[tab]?.colors[s];
            const isActive = item.status === s;
            return (
              <button
                key={s}
                onClick={() => onStatusUpdate(item.id, s)}
                disabled={isUpdating === item.id || isActive}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                  isActive
                    ? `${cfg?.bg} ${cfg?.text} ${cfg?.border} ring-2 ring-offset-1 ring-current`
                    : `bg-white text-gray-500 border-gray-200 hover:${cfg?.bg} hover:${cfg?.text}`
                } disabled:cursor-not-allowed`}
              >
                {isActive && isUpdating === item.id ? <Loader2 className="w-3 h-3 animate-spin inline" /> : s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5">
        {tab === "applications" && (
          <>
            <div className="grid grid-cols-2 gap-5">
              <Field label="Email" value={item.email} icon={Mail} />
              <Field label="Phone" value={item.phone} icon={Phone} />
              <Field label="Nationality" value={item.nationality} icon={Globe2} />
              <Field label="English Level" value={item.englishLevel} icon={GraduationCap} />
              <Field label="Origin" value={item.origin === "uk" ? "UK Resident" : "International"} icon={MapPin} />
              <Field label="Live in England" value={item.liveInEngland} />
            </div>
            <div className="h-px bg-gray-100" />
            {item.origin === "uk" ? (
              <div className="grid grid-cols-2 gap-5">
                <Field label="Study Location" value={item.studyLocation} icon={BookOpen} />
                <Field label="Residency Status" value={item.residencyStatus} />
                <Field label="Preferred Call Date" value={item.callDate} icon={CalendarDays} />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-5">
                <Field label="Subject of Interest" value={item.interestedSubject} icon={BookOpen} />
                <Field label="City" value={item.city} />
                <Field label="Country" value={item.country} icon={Globe2} />
                <Field label="Preferred Call Date" value={item.callDate} icon={CalendarDays} />
              </div>
            )}
          </>
        )}

        {tab === "partners" && (
          <>
            <div className="grid grid-cols-2 gap-5">
              <Field label="Email" value={item.email} icon={Mail} />
              <Field label="Phone" value={item.phone} icon={Phone} />
              <Field label="Organisation" value={item.organization} icon={Building2} />
              <Field label="Country" value={item.country} icon={Globe2} />
              <Field label="Partnership Type" value={item.partnershipType} icon={Briefcase} />
              <Field label="Expected Students / yr" value={item.expectedStudents} icon={UserCheck} />
              <Field label="Experience" value={item.experience} icon={Star} />
            </div>
            {item.message && (
              <>
                <div className="h-px bg-gray-100" />
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Message</p>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-gray-100">
                    "{item.message}"
                  </p>
                </div>
              </>
            )}
          </>
        )}

        {tab === "referrals" && (
          <>
            <div>
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-3">Student Details</p>
              <div className="grid grid-cols-2 gap-5">
                <Field label="Email" value={item.studentEmail} icon={Mail} />
                <Field label="Phone" value={item.studentPhone} icon={Phone} />
                <Field label="Study Destination" value={item.studyDestination} icon={Globe2} />
                <Field label="Study Level" value={item.studyLevel} icon={GraduationCap} />
              </div>
            </div>
            <div className="h-px bg-gray-100" />
            <div>
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-3">Referred By</p>
              <div className="grid grid-cols-2 gap-5">
                <Field label="Name" value={`${item.referrerFirstName} ${item.referrerLastName}`} icon={Users} />
                <Field label="Relationship" value={item.relationship} />
                <Field label="Email" value={item.referrerEmail} icon={Mail} />
                <Field label="Phone" value={item.referrerPhone} icon={Phone} />
              </div>
            </div>
            {item.additionalInfo && (
              <>
                <div className="h-px bg-gray-100" />
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Notes</p>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-gray-100">
                    "{item.additionalInfo}"
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("applications");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [counts, setCounts] = useState({ applications: 0, partners: 0, referrals: 0 });
  const [detailItem, setDetailItem] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(null); // item id currently being updated
  const [toast, setToast] = useState(null);
  const router = useRouter();

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setData([]);          // ← clear immediately so stale data never bleeds between tabs
    setStatusFilter("All");
    setSearchTerm("");
    try {
      const res = await fetch(ENDPOINTS[activeTab]);
      if (res.ok) {
        const json = await res.json();
        const rows = json.data || [];
        setData(rows);
        setCounts((prev) => ({ ...prev, [activeTab]: rows.length }));
      } else {
        console.error(`API error for ${activeTab}:`, res.status);
      }
    } catch (err) {
      console.error(`Failed to fetch ${activeTab}:`, err);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Update status
  const handleStatusUpdate = async (id, newStatus) => {
    setIsUpdating(id);
    try {
      const res = await fetch(`${ENDPOINTS[activeTab]}?id=${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setData((prev) => prev.map((item) => item.id === id ? { ...item, status: newStatus } : item));
        if (detailItem?.id === id) setDetailItem((prev) => ({ ...prev, status: newStatus }));
        showToast("Status updated successfully");
      } else {
        showToast("Failed to update status", "error");
      }
    } catch {
      showToast("Network error", "error");
    } finally {
      setIsUpdating(null);
    }
  };

  // Delete lead
  const handleDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`${ENDPOINTS[activeTab]}?id=${deleteTarget.id}`, { method: "DELETE" });
      if (res.ok) {
        setData((prev) => prev.filter((item) => item.id !== deleteTarget.id));
        setCounts((prev) => ({ ...prev, [activeTab]: prev[activeTab] - 1 }));
        if (detailItem?.id === deleteTarget.id) setDetailItem(null);
        setDeleteTarget(null);
        showToast("Lead deleted");
      } else {
        showToast("Failed to delete lead", "error");
      }
    } catch {
      showToast("Network error", "error");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/office-login");
  };

  // Filter data
  const filteredData = data.filter((item) => {
    const term = searchTerm.toLowerCase();
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;

    let matchesSearch = true;
    if (term) {
      if (activeTab === "applications") {
        matchesSearch = [item.firstName, item.lastName, item.email, item.origin, item.nationality]
          .some((v) => v?.toLowerCase().includes(term));
      } else if (activeTab === "partners") {
        matchesSearch = [item.firstName, item.lastName, item.email, item.organization, item.country]
          .some((v) => v?.toLowerCase().includes(term));
      } else {
        matchesSearch = [item.referrerFirstName, item.referrerLastName, item.studentFirstName, item.studentLastName, item.studentEmail]
          .some((v) => v?.toLowerCase().includes(term));
      }
    }
    return matchesStatus && matchesSearch;
  });

  const statuses = STATUS_CONFIG[activeTab]?.statuses || [];

  // Status count breakdown for sidebar
  const statusCounts = statuses.reduce((acc, s) => {
    acc[s] = data.filter((item) => item.status === s).length;
    return acc;
  }, {});

  const tabConfig = [
    { key: "applications", label: "Applications", icon: Users },
    { key: "partners",     label: "Partners",     icon: Handshake },
    { key: "referrals",   label: "Referrals",    icon: Gift },
  ];

  // Table column headers per tab
  const tableHeaders = {
    applications: ["Lead", "Contact", "Origin", "Subject / Loc.", "English", "Date", "Status", ""],
    partners:     ["Lead", "Contact", "Organisation", "Country", "Type", "Expected", "Date", "Status", ""],
    referrals:    ["Student", "Contact", "Referred By", "Destination", "Level", "Date", "Status", ""],
  };

  return (
    <div className="min-h-screen flex bg-slate-50">

      {/* ── Sidebar ───────────────────────────────────────────────────── */}
      <aside className="hidden lg:flex w-64 xl:w-72 bg-[#012759] text-white flex-col fixed inset-y-0 z-20">
        <div className="p-6 xl:p-8 border-b border-white/10">
          <div className="text-xl xl:text-2xl font-black tracking-tight text-white">LSOE Admin</div>
          <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-bold">Lead Management</p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {tabConfig.map(({ key, label, icon: Icon }) => {
            const isActive = activeTab === key;
            const cfg = STATUS_CONFIG[key];
            return (
              <div key={key}>
                <button
                  onClick={() => { setActiveTab(key); setDetailItem(null); }}
                  className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                    isActive ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                  <span className={`ml-auto text-xs py-0.5 px-2 rounded-full font-bold ${isActive ? "bg-[#26b2e6] text-white" : "bg-white/10 text-slate-300"}`}>
                    {counts[key]}
                  </span>
                </button>
                {isActive && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {cfg.statuses.map((s) => {
                      const c = cfg.colors[s];
                      return (
                        <div key={s} className="flex items-center justify-between px-3 py-1">
                          <span className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                            {s}
                          </span>
                          <span className="text-[11px] text-slate-400 font-bold">{statusCounts[s] || 0}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium text-sm transition-colors"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main area ────────────────────────────────────────────────── */}
      <main className="flex-1 lg:ml-64 xl:ml-72 flex flex-col min-h-screen">

        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sticky top-0 z-10 shadow-sm">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900 capitalize tracking-tight">
              {activeTab === "applications" ? "Applications" : activeTab === "partners" ? "Partnership Requests" : "Student Referrals"}
            </h1>
            <p className="text-xs text-gray-400 font-medium mt-0.5">{filteredData.length} of {data.length} leads</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/30 focus:border-brand-secondary transition-all font-medium text-gray-700 placeholder:text-gray-400"
              />
            </div>
            <button
              onClick={fetchData}
              className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors shrink-0"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
            {/* Mobile logout */}
            <button onClick={handleLogout} className="lg:hidden p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-500">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Mobile Tab Bar */}
        <div className="lg:hidden flex border-b border-gray-200 bg-white px-4 gap-1 overflow-x-auto">
          {tabConfig.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => { setActiveTab(key); setDetailItem(null); }}
              className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === key ? "border-brand-secondary text-brand-primary" : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
            >
              <Icon className="w-4 h-4" /> {label}
              <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full font-bold ${activeTab === key ? "bg-brand-secondary/10 text-brand-secondary" : "bg-gray-100 text-gray-400"}`}>
                {counts[key]}
              </span>
            </button>
          ))}
        </div>

        {/* Status Filter Tabs */}
        <div className="bg-white border-b border-gray-100 px-4 sm:px-8 py-3 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setStatusFilter("All")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              statusFilter === "All"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            All ({data.length})
          </button>
          {statuses.map((s) => {
            const cfg = STATUS_CONFIG[activeTab]?.colors[s];
            const count = statusCounts[s] || 0;
            return (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all whitespace-nowrap ${
                  statusFilter === s
                    ? `${cfg?.bg} ${cfg?.text} ${cfg?.border} ring-1 ring-current`
                    : "bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600"
                }`}
              >
                {s} ({count})
              </button>
            );
          })}
        </div>

        {/* Table Content */}
        <div className="flex-1 p-4 sm:p-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
              <Loader2 className="w-10 h-10 animate-spin text-brand-secondary" />
              <p className="font-bold animate-pulse">Loading {activeTab}...</p>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-gray-400 bg-white rounded-2xl border border-dashed border-gray-200">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                {activeTab === "applications" ? <Users className="w-8 h-8 text-gray-200" /> : activeTab === "partners" ? <Handshake className="w-8 h-8 text-gray-200" /> : <Gift className="w-8 h-8 text-gray-200" />}
              </div>
              <p className="text-lg font-bold text-gray-600">No {activeTab} found</p>
              <p className="text-sm text-gray-400 mt-1 font-medium">Try changing your filters or search term</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      {tableHeaders[activeTab].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left text-[11px] font-black text-gray-400 uppercase tracking-wider whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredData.map((item, idx) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.02 }}
                        onClick={() => setDetailItem(item)}
                        className={`hover:bg-blue-50/30 cursor-pointer transition-colors group ${
                          detailItem?.id === item.id ? "bg-blue-50/40" : ""
                        }`}
                      >
                        {activeTab === "applications" && (
                          <>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center text-xs font-extrabold shrink-0">
                                  {item.firstName?.[0]}{item.lastName?.[0]}
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 text-sm leading-tight">{item.firstName} {item.lastName}</p>
                                  <p className="text-[11px] text-gray-400 font-medium">{item.nationality || "—"}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <p className="text-sm font-medium text-gray-700 max-w-[180px] truncate">{item.email}</p>
                              <p className="text-xs text-gray-400 font-medium">{item.phone}</p>
                            </td>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold border ${
                                item.origin === "uk"
                                  ? "bg-indigo-50 text-indigo-700 border-indigo-100"
                                  : "bg-teal-50 text-teal-700 border-teal-100"
                              }`}>
                                {item.origin === "uk" ? <MapPin className="w-3 h-3" /> : <Globe2 className="w-3 h-3" />}
                                {item.origin === "uk" ? "UK" : "Intl"}
                              </span>
                            </td>
                            <td className="px-4 py-3.5">
                              <p className="text-sm font-semibold text-gray-700 max-w-[140px] truncate">
                                {item.origin === "uk" ? item.studyLocation : item.interestedSubject}
                              </p>
                              <p className="text-[11px] text-gray-400">
                                {item.origin === "uk" ? item.residencyStatus : `${item.city || ""}${item.city && item.country ? ", " : ""}${item.country || ""}`}
                              </p>
                            </td>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <span className="text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-2 py-1 rounded-lg">{item.englishLevel || "—"}</span>
                            </td>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <p className="text-xs font-medium text-gray-500">
                                {new Date(item.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                              </p>
                            </td>
                            <td className="px-4 py-3.5" onClick={(e) => e.stopPropagation()}>
                              <StatusSelect item={item} tab={activeTab} onUpdate={handleStatusUpdate} isUpdating={isUpdating} />
                            </td>
                            <td className="px-4 py-3.5" onClick={(e) => e.stopPropagation()}>
                              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  onClick={() => setDetailItem(item)}
                                  className="p-1.5 rounded-lg text-gray-400 hover:text-brand-secondary hover:bg-blue-50 transition-colors"
                                  title="View Details"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => setDeleteTarget(item)}
                                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </>
                        )}

                        {activeTab === "partners" && (
                          <>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center text-xs font-extrabold shrink-0">
                                  {item.firstName?.[0]}{item.lastName?.[0]}
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 text-sm leading-tight">{item.firstName} {item.lastName}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <p className="text-sm font-medium text-gray-700 max-w-[180px] truncate">{item.email}</p>
                              <p className="text-xs text-gray-400">{item.phone}</p>
                            </td>
                            <td className="px-4 py-3.5">
                              <p className="text-sm font-bold text-brand-primary max-w-[160px] truncate">{item.organization || "—"}</p>
                            </td>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <p className="text-sm font-medium text-gray-700">{item.country || "—"}</p>
                            </td>
                            <td className="px-4 py-3.5">
                              <p className="text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-2 py-1 rounded-lg max-w-[120px] truncate">{item.partnershipType || "—"}</p>
                            </td>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <p className="text-sm font-semibold text-emerald-600">{item.expectedStudents || "—"}</p>
                            </td>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <p className="text-xs font-medium text-gray-500">
                                {new Date(item.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                              </p>
                            </td>
                            <td className="px-4 py-3.5" onClick={(e) => e.stopPropagation()}>
                              <StatusSelect item={item} tab={activeTab} onUpdate={handleStatusUpdate} isUpdating={isUpdating} />
                            </td>
                            <td className="px-4 py-3.5" onClick={(e) => e.stopPropagation()}>
                              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => setDetailItem(item)} className="p-1.5 rounded-lg text-gray-400 hover:text-brand-secondary hover:bg-blue-50 transition-colors"><Eye className="w-4 h-4" /></button>
                                <button onClick={() => setDeleteTarget(item)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4" /></button>
                              </div>
                            </td>
                          </>
                        )}

                        {activeTab === "referrals" && (
                          <>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#26b2e6] to-[#012759] text-white flex items-center justify-center text-xs font-extrabold shrink-0">
                                  {item.studentFirstName?.[0]}{item.studentLastName?.[0]}
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 text-sm leading-tight">{item.studentFirstName} {item.studentLastName}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <p className="text-sm font-medium text-gray-700 max-w-[180px] truncate">{item.studentEmail}</p>
                              <p className="text-xs text-gray-400">{item.studentPhone || "—"}</p>
                            </td>
                            <td className="px-4 py-3.5">
                              <p className="text-sm font-bold text-brand-primary">{item.referrerFirstName} {item.referrerLastName}</p>
                              <p className="text-[11px] text-gray-400 max-w-[160px] truncate">{item.referrerEmail}</p>
                            </td>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <p className="text-sm font-medium text-gray-700">{item.studyDestination || "—"}</p>
                            </td>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <span className="text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-2 py-1 rounded-lg">{item.studyLevel || "—"}</span>
                            </td>
                            <td className="px-4 py-3.5 whitespace-nowrap">
                              <p className="text-xs font-medium text-gray-500">
                                {new Date(item.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                              </p>
                            </td>
                            <td className="px-4 py-3.5" onClick={(e) => e.stopPropagation()}>
                              <StatusSelect item={item} tab={activeTab} onUpdate={handleStatusUpdate} isUpdating={isUpdating} />
                            </td>
                            <td className="px-4 py-3.5" onClick={(e) => e.stopPropagation()}>
                              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => setDetailItem(item)} className="p-1.5 rounded-lg text-gray-400 hover:text-brand-secondary hover:bg-blue-50 transition-colors"><Eye className="w-4 h-4" /></button>
                                <button onClick={() => setDeleteTarget(item)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4" /></button>
                              </div>
                            </td>
                          </>
                        )}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ── Overlays ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {/* Backdrop for detail drawer */}
        {detailItem && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => setDetailItem(null)}
          />
        )}

        {/* Detail Drawer */}
        {detailItem && (
          <DetailDrawer
            key="drawer"
            item={detailItem}
            tab={activeTab}
            onClose={() => setDetailItem(null)}
            onStatusUpdate={handleStatusUpdate}
            isUpdating={isUpdating}
          />
        )}

        {/* Delete Modal */}
        {deleteTarget && (
          <DeleteModal
            key="delete"
            item={deleteTarget}
            tab={activeTab}
            onConfirm={handleDelete}
            onCancel={() => setDeleteTarget(null)}
            isDeleting={isDeleting}
          />
        )}
      </AnimatePresence>

      {/* ── Toast Notification ───────────────────────────────────────── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-2xl shadow-xl text-sm font-bold ${
              toast.type === "error"
                ? "bg-red-600 text-white"
                : "bg-gray-900 text-white"
            }`}
          >
            {toast.type === "error"
              ? <XCircle className="w-4 h-4 shrink-0" />
              : <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            }
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

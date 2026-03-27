"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LogOut, Users, Search, 
  MapPin, Globe2, Loader2, CheckCircle2, 
  CalendarDays, Mail, Phone, BookOpen,
  Handshake, Building2, Briefcase, GraduationCap, Gift
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("applications"); // "applications", "partners", or "referrals"
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [counts, setCounts] = useState({ applications: 0, partners: 0, referrals: 0 });
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const endpoints = {
        applications: "/api/applications",
        partners: "/api/partners",
        referrals: "/api/referrals"
      };
      const res = await fetch(endpoints[activeTab]);
      if (res.ok) {
        const json = await res.json();
        setData(json.data || []);
        
        setCounts(prev => ({
          ...prev,
          [activeTab]: (json.data || []).length
        }));
      }
    } catch (error) {
      console.error(`Failed to fetch ${activeTab}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth", { method: "DELETE" });
      router.push("/office-login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const filteredData = data.filter(item => {
    const term = searchTerm.toLowerCase();
    if (activeTab === "applications") {
      return (
        item.firstName?.toLowerCase().includes(term) ||
        item.lastName?.toLowerCase().includes(term) ||
        item.email?.toLowerCase().includes(term) ||
        item.origin?.toLowerCase().includes(term) ||
        item.nationality?.toLowerCase().includes(term)
      );
    } else if (activeTab === "partners") {
      return (
        item.firstName?.toLowerCase().includes(term) ||
        item.lastName?.toLowerCase().includes(term) ||
        item.email?.toLowerCase().includes(term) ||
        item.organization?.toLowerCase().includes(term) ||
        item.country?.toLowerCase().includes(term)
      );
    } else {
      return (
        item.referrerFirstName?.toLowerCase().includes(term) ||
        item.referrerLastName?.toLowerCase().includes(term) ||
        item.studentFirstName?.toLowerCase().includes(term) ||
        item.studentLastName?.toLowerCase().includes(term) ||
        item.studentEmail?.toLowerCase().includes(term)
      );
    }
  });

  return (
    <div className="min-h-screen flex bg-[#f8fafc]">
      
      {/* Sidebar fixed for large screens */}
      <aside className="hidden lg:flex w-72 bg-slate-900 text-white flex-col fixed inset-y-0 z-20">
        <div className="p-8 border-b border-white/10">
          <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
            LSOE Admin
          </div>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-bold">Workspace</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button 
            onClick={() => setActiveTab("applications")}
            className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl font-semibold border transition-all ${
              activeTab === "applications" 
              ? "bg-brand-primary/20 text-brand-secondary border-brand-primary/30" 
              : "text-gray-400 border-transparent hover:bg-white/5 hover:text-white"
            }`}
          >
            <Users className="w-5 h-5" />
            Applications
            {counts.applications > 0 && (
              <span className="ml-auto bg-brand-secondary text-white text-xs py-0.5 px-2.5 rounded-full shadow-sm">{counts.applications}</span>
            )}
          </button>

          <button 
            onClick={() => setActiveTab("partners")}
            className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl font-semibold border transition-all ${
              activeTab === "partners" 
              ? "bg-brand-primary/20 text-brand-secondary border-brand-primary/30" 
              : "text-gray-400 border-transparent hover:bg-white/5 hover:text-white"
            }`}
          >
            <Handshake className="w-5 h-5" />
            Partners
            {counts.partners > 0 && (
              <span className="ml-auto bg-brand-secondary text-white text-xs py-0.5 px-2.5 rounded-full shadow-sm">{counts.partners}</span>
            )}
          </button>

          <button 
            onClick={() => setActiveTab("referrals")}
            className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl font-semibold border transition-all ${
              activeTab === "referrals" 
              ? "bg-brand-primary/20 text-brand-secondary border-brand-primary/30" 
              : "text-gray-400 border-transparent hover:bg-white/5 hover:text-white"
            }`}
          >
            <Gift className="w-5 h-5" />
            Referrals
            {counts.referrals > 0 && (
              <span className="ml-auto bg-brand-secondary text-white text-xs py-0.5 px-2.5 rounded-full shadow-sm">{counts.referrals}</span>
            )}
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen w-full relative">
        
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-200/80 px-4 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-0 z-10 shadow-sm shadow-gray-100/50">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight capitalize">
              {activeTab === "applications" ? "Recent Applications" : activeTab === "partners" ? "Partnership Requests" : "Student Referrals"}
            </h1>
            <button 
              onClick={handleLogout}
              className="sm:hidden p-2 text-gray-400 hover:text-red-500 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative max-w-md w-full sm:ml-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all font-medium text-gray-700 placeholder:text-gray-400 shadow-inner shadow-gray-100"
            />
          </div>
        </header>

        {/* Board / Table Content */}
        <div className="flex-1 p-4 sm:p-10 bg-slate-50/50">
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4 py-20">
              <Loader2 className="w-10 h-10 animate-spin text-brand-primary" />
              <p className="font-bold tracking-tight animate-pulse text-gray-500">Retrieving {activeTab} data...</p>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 bg-white border border-dashed border-gray-300 rounded-[2rem] p-12 py-32 shadow-sm">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-5">
                {activeTab === "applications" ? <Users className="w-10 h-10 text-gray-300" /> : activeTab === "partners" ? <Handshake className="w-10 h-10 text-gray-300" /> : <Gift className="w-10 h-10 text-gray-300" />}
              </div>
              <p className="text-xl font-bold text-gray-700 tracking-tight">No {activeTab} found</p>
              <p className="text-sm mt-2 font-medium text-gray-400 text-center max-w-sm">Wait for new submissions or adjust your active search filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 items-start">
              {filteredData.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-[1.5rem] shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all p-6 relative overflow-hidden group flex flex-col h-full"
                >
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {item.status || "New"}
                  </div>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-8 pr-24">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg shrink-0 leading-none">
                      {activeTab === 'referrals' ? (item.studentFirstName?.charAt(0) || "") : (item.firstName?.charAt(0) || "")}
                      {activeTab === 'referrals' ? (item.studentLastName?.charAt(0) || "") : (item.lastName?.charAt(0) || "")}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-gray-900 tracking-tight leading-tight">
                        {activeTab === 'referrals' ? `${item.studentFirstName} ${item.studentLastName}` : `${item.firstName} ${item.lastName}`}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium flex items-center gap-1.5 mt-1.5">
                        <CalendarDays className="w-3.5 h-3.5 text-brand-primary" />
                        {new Date(item.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>

                  {/* Body Details (Conditional) */}
                  {activeTab === "applications" ? (
                    <>
                      <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-6 relative z-10">
                        <div className="space-y-1">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><Mail className="w-3 h-3"/> Email</p>
                          <p className="text-sm font-semibold text-gray-800 truncate" title={item.email}>{item.email}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><Phone className="w-3 h-3"/> Phone</p>
                          <p className="text-sm font-semibold text-gray-800">{item.phone}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><Globe2 className="w-3 h-3"/> Origin</p>
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold ${item.origin === 'uk' ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'bg-teal-50 text-teal-700 border border-teal-100'} capitalize`}>
                            {item.origin === 'uk' ? <MapPin className="w-3 h-3" /> : <Globe2 className="w-3 h-3" />}
                            {item.origin === 'uk' ? 'UK Resident' : 'International'}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><GraduationCap className="w-3 h-3"/> English Level</p>
                          <p className="text-sm font-semibold text-gray-800 flex items-center gap-1.5 mr-auto">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {item.englishLevel || 'N/A'}
                          </p>
                        </div>
                      </div>

                      <div className="pt-6 mt-auto border-t border-gray-100/80 bg-slate-50/50 -mx-6 -mb-6 px-6 pb-6 relative group-hover:bg-slate-50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                          {item.origin === 'uk' ? <MapPin className="w-16 h-16"/> : <Globe2 className="w-16 h-16"/>}
                        </div>
                        {item.origin === 'uk' ? (
                          <div className="grid grid-cols-2 gap-5 relative z-10">
                            <div className="space-y-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Study Loc.</p>
                              <p className="text-sm font-extrabold text-[#FF6A00]">{item.studyLocation}</p>
                            </div>
                            <div className="space-y-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Residency</p>
                              <p className="text-sm font-extrabold text-emerald-600">{item.residencyStatus}</p>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-5 relative z-10">
                            <div className="space-y-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Subject</p>
                              <p className="text-sm font-extrabold text-[#FF6A00] truncate" title={item.interestedSubject}>{item.interestedSubject}</p>
                            </div>
                            <div className="space-y-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Location</p>
                              <p className="text-sm font-extrabold text-blue-600 truncate" title={`${item.city}, ${item.country}`}>{item.city}, <span className="text-gray-400">{item.country}</span></p>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  ) : activeTab === "partners" ? (
                    <>
                      {/* Partner View */}
                      <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-6 relative z-10">
                        <div className="space-y-1">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><Mail className="w-3 h-3"/> Work Email</p>
                          <p className="text-sm font-semibold text-gray-800 truncate" title={item.email}>{item.email}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><Phone className="w-3 h-3"/> Phone</p>
                          <p className="text-sm font-semibold text-gray-800">{item.phone}</p>
                        </div>
                        <div className="space-y-1 col-span-2">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><Building2 className="w-3 h-3"/> Organization</p>
                          <p className="text-sm font-extrabold text-brand-primary">{item.organization}</p>
                        </div>
                      </div>

                      <div className="pt-6 mt-auto border-t border-gray-100/80 bg-slate-50/50 -mx-6 -mb-6 px-6 pb-6 relative group-hover:bg-slate-50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                           <Handshake className="w-16 h-16" />
                        </div>
                        <div className="grid grid-cols-2 gap-5 relative z-10">
                          <div className="space-y-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Type</p>
                            <p className="text-xs font-black text-brand-secondary truncate" title={item.partnershipType}>{item.partnershipType}</p>
                          </div>
                          <div className="space-y-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Referrals / yr</p>
                            <p className="text-xs font-black text-emerald-600">{item.expectedStudents || "N/A"}</p>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-white/50 rounded-xl border border-gray-100 text-[11px] font-medium text-gray-500 italic line-clamp-2">
                          "{item.message || "No additional message provided."}"
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Referrals View */}
                      <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-6 relative z-10">
                        <div className="space-y-1">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><Mail className="w-3 h-3"/> Student Email</p>
                          <p className="text-sm font-semibold text-gray-800 truncate" title={item.studentEmail}>{item.studentEmail}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><Phone className="w-3 h-3"/> Student Phone</p>
                          <p className="text-sm font-semibold text-gray-800">{item.studentPhone || "N/A"}</p>
                        </div>
                        <div className="space-y-1 col-span-2">
                          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><Users className="w-3 h-3"/> Referred By</p>
                          <p className="text-sm font-extrabold text-brand-primary">{item.referrerFirstName} {item.referrerLastName}</p>
                          <p className="text-[10px] text-gray-400 font-medium truncate">{item.referrerEmail} ({item.referrerPhone})</p>
                        </div>
                      </div>

                      <div className="pt-6 mt-auto border-t border-gray-100/80 bg-slate-50/50 -mx-6 -mb-6 px-6 pb-6 relative group-hover:bg-slate-50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                           <Gift className="w-16 h-16" />
                        </div>
                        <div className="grid grid-cols-2 gap-5 relative z-10">
                          <div className="space-y-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Destination</p>
                            <p className="text-xs font-black text-brand-secondary truncate" title={item.studyDestination}>{item.studyDestination || "N/A"}</p>
                          </div>
                          <div className="space-y-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Level</p>
                            <p className="text-xs font-black text-emerald-600 truncate">{item.studyLevel || "N/A"}</p>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-white/50 rounded-xl border border-gray-100 text-[11px] font-medium text-gray-500 italic line-clamp-2">
                          "{item.additionalInfo || "No additional notes provided."}"
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </main>

    </div>
  );
}


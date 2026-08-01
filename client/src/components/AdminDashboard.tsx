import React, { useState } from 'react';
import { ShieldAlert, Users, Building2, AlertTriangle, CheckCircle, BarChart3, LogOut, Flag } from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'reports' | 'fraud'>('overview');

  const stats = [
    { label: 'Total Users', value: '4,280' },
    { label: 'Verified Donors', value: '3,120' },
    { label: 'Hospitals', value: '48' },
    { label: 'Organizations', value: '19' },
    { label: 'Active Requests', value: '37' },
    { label: 'Emergency Requests', value: '8' },
    { label: 'Successful Matches', value: '1,284' },
    { label: 'Donation Records', value: '2,891' },
  ];

  const reports = [
    { id: '#1092', reason: 'Suspicious blood request', status: 'Under Review', hospital: 'Unverified Clinic' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-2.5 rounded-xl text-white shadow-md">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-900">LifeLink Admin Control Center</h1>
              <p className="text-xs text-slate-500 font-medium">Role: SYSTEM_ADMIN (Full Privileges)</p>
            </div>
          </div>
          <button onClick={onLogout} className="text-slate-400 hover:text-red-600 transition-colors p-2 flex items-center gap-1 font-semibold text-sm">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex gap-4 border-b border-slate-200 pb-4">
          <button onClick={() => setActiveTab('overview')} className={`px-5 py-2 rounded-xl font-bold text-sm ${activeTab === 'overview' ? 'bg-slate-900 text-white' : 'bg-white border text-slate-600'}`}>System Statistics</button>
          <button onClick={() => setActiveTab('reports')} className={`px-5 py-2 rounded-xl font-bold text-sm ${activeTab === 'reports' ? 'bg-slate-900 text-white' : 'bg-white border text-slate-600'}`}>Reports & Verification ({reports.length})</button>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
                  <h3 className="text-3xl font-black text-slate-900 mt-2">{s.value}</h3>
                </div>
              ))}
            </div>

            {/* Analytics Blood Demand Bar Chart Simulation */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-slate-900">Blood Demand Analytics (Anonymized & Aggregated)</h3>
              <div className="space-y-3 font-mono text-sm">
                <div>A+ : <span className="text-red-600 font-bold">███████████</span> (420 units)</div>
                <div>O+ : <span className="text-red-600 font-bold">█████████████</span> (580 units)</div>
                <div>B+ : <span className="text-red-600 font-bold">████████</span> (310 units)</div>
                <div>AB+ : <span className="text-red-600 font-bold">████</span> (140 units)</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-black text-slate-900">Fake Request Detection & Reports Queue</h3>
            <div className="space-y-4">
              {reports.map((rep) => (
                <div key={rep.id} className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{rep.id}</span>
                      <span className="bg-amber-200 text-amber-900 text-xs px-2.5 py-0.5 rounded-full font-bold">⚠️ Flagged: {rep.reason}</span>
                    </div>
                    <p className="text-xs text-slate-600">Status: <strong className="text-amber-700">{rep.status}</strong> | Hospital: {rep.hospital}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => alert('Investigation opened.')} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold">Investigate</button>
                    <button onClick={() => alert('Request resolved & verified.')} className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold">Resolve</button>
                    <button onClick={() => alert('Fraudulent account blocked.')} className="bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-bold">Take Action</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
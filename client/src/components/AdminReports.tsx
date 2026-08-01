import React, { useState } from 'react';
import { ShieldAlert, CheckCircle, Trash2, Eye } from 'lucide-react';

export default function AdminReports() {
  const [reports, setReports] = useState([
    { id: 'Report #1092', reason: 'Suspicious blood request', status: 'Under Review', reporter: 'User_982' }
  ]);

  const handleAction = (id: string, actionType: string) => {
    alert(`Action '${actionType}' successfully executed on ${id}. Audit log updated.`);
    setReports(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-red-600 p-2.5 rounded-xl text-white">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-black text-slate-900">Report & Verification Management</h2>
          <p className="text-xs text-slate-500">Review flagged content, fake requests, and platform misuse reports</p>
        </div>
      </div>

      <div className="space-y-4">
        {reports.map((rep) => (
          <div key={rep.id} className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">{rep.id}</span>
                <span className="bg-amber-200 text-amber-900 text-xs px-2.5 py-0.5 rounded-full font-bold">{rep.reason}</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">Status: <strong className="text-amber-700">{rep.status}</strong> | Reported by: {rep.reporter}</p>
            </div>

            <div className="flex gap-2">
              <button onClick={() => alert('Opening full investigation audit trail...')} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" /> Investigate
              </button>
              <button onClick={() => handleAction(rep.id, 'Resolve')} className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Resolve
              </button>
              <button onClick={() => handleAction(rep.id, 'Take Action / Block')} className="bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1">
                <Trash2 className="w-3.5 h-3.5" /> Take Action
              </button>
            </div>
          </div>
        ))}
        {reports.length === 0 && (
          <p className="text-sm text-slate-400 text-center py-6">No pending reports in queue.</p>
        )}
      </div>
    </div>
  );
}
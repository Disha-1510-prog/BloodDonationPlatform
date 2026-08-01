import React from 'react';
import { Award, History, ArrowLeft, ShieldCheck } from 'lucide-react';

interface DonorHistoryBadgesProps {
  onBack: () => void;
}

export default function DonorHistoryBadges({ onBack }: DonorHistoryBadgesProps) {
  const badges = [
    { title: '🏅 First Donation', desc: 'Completed initial life-saving donation' },
    { title: '🏅 Regular Donor', desc: 'Maintained consistent donation frequency' },
    { title: '🏅 5 Donations', desc: 'Milestone reached: 5 successful units' },
    { title: '🏅 10 Donations', desc: 'Milestone reached: 10 successful units' },
    { title: '🏅 Emergency Helper', desc: 'Responded to critical emergency alerts' },
  ];

  const history = [
    { date: '12-03-2026', org: 'XYZ Blood Bank', type: 'Blood' },
    { date: '18-09-2025', org: 'ABC Hospital', type: 'Blood' },
    { date: '05-02-2025', org: 'XYZ Blood Bank', type: 'Blood' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>

        {/* Recognition Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 p-2.5 rounded-xl text-white">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">Donor Recognition System</h1>
              <p className="text-xs text-slate-500">Non-monetary reward badges & donation impact metrics</p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-400 font-bold uppercase">Donation Impact Metric</span>
              <h3 className="text-2xl font-black text-red-500 mt-1">6 Successful Donations Recorded</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {badges.map((badge, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1">
                <h4 className="font-bold text-slate-900">{badge.title}</h4>
                <p className="text-xs text-slate-500">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Private History Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-2.5 rounded-xl text-white">
                <History className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">Private Donation History</h2>
                <p className="text-xs text-slate-500">Secure records accessible only by authorized account holders</p>
              </div>
            </div>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Authorized Access Only
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold text-slate-400 uppercase">
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Organization / Bank</th>
                  <th className="py-3 px-4">Donation Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium">
                {history.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-4 px-4 text-slate-900 font-bold">{row.date}</td>
                    <td className="py-4 px-4 text-slate-700">{row.org}</td>
                    <td className="py-4 px-4 text-red-600 font-bold">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
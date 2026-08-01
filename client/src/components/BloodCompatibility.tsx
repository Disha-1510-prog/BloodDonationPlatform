import React from 'react';
import { ArrowLeft, ShieldAlert, HeartPulse, Info } from 'lucide-react';

interface BloodCompatibilityProps {
  onBack: () => void;
}

export default function BloodCompatibility({ onBack }: BloodCompatibilityProps) {
  const compatibilityData = [
    { donor: 'O−', canDonateTo: 'All Blood Types (Universal Donor)' },
    { donor: 'O+', canDonateTo: 'O+, A+, B+, AB+' },
    { donor: 'A−', canDonateTo: 'A−, A+, AB−, AB+' },
    { donor: 'A+', canDonateTo: 'A+, AB+' },
    { donor: 'B−', canDonateTo: 'B−, B+, AB−, AB+' },
    { donor: 'B+', canDonateTo: 'B+, AB+' },
    { donor: 'AB−', canDonateTo: 'AB−, AB+' },
    { donor: 'AB+', canDonateTo: 'AB+ (Universal Recipient)' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2.5 rounded-xl text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">Blood Group Compatibility Reference</h1>
              <p className="text-xs text-slate-500">Red Blood Cell (RBC) Donation Matching Guide</p>
            </div>
          </div>

          {/* Clinical Disclaimer Banner */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed font-medium">
              <strong>Clinical Disclaimer:</strong> Do not use this table alone to determine whether a real patient can receive blood. Actual transfusion compatibility depends on clinical testing and blood-bank procedures. Our system uses blood groups as a search/filtering aid, with final matching handled strictly by the hospital or blood bank.
            </p>
          </div>

          {/* Compatibility Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold text-slate-400 uppercase">
                  <th className="py-3 px-4">Donor Blood Group</th>
                  <th className="py-3 px-4">Can Donate RBCs To</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {compatibilityData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-4 px-4 font-black text-red-600 text-lg">{row.donor}</td>
                    <td className="py-4 px-4 font-semibold text-slate-700">{row.canDonateTo}</td>
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
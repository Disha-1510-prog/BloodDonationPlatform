import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, ShieldCheck } from 'lucide-react';

export default function AnalyticsDashboard() {
  const demandData = [
    { group: 'O+', units: 580, bar: '█████████████' },
    { group: 'A+', units: 420, bar: '███████████' },
    { group: 'B+', units: 310, bar: '████████' },
    { group: 'AB+', units: 140, bar: '████' },
  ];

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
      <div className="flex justify-between items-center border-b border-slate-100 pb-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Platform Analytics & Impact Engine</h2>
          <p className="text-xs text-slate-500">Anonymized and aggregated public statistics adhering to data minimization</p>
        </div>
        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">
          🔒 Public Anonymized Data
        </span>
      </div>

      {/* Blood Demand Visualizer */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Current Blood Demand Index</h3>
        <div className="space-y-3 font-mono text-sm bg-slate-50 p-6 rounded-2xl border border-slate-200">
          {demandData.map((item) => (
            <div key={item.group} className="flex justify-between items-center">
              <span className="font-bold text-slate-800 w-12">{item.group}</span>
              <span className="text-red-600 font-bold flex-1 px-4 tracking-tighter">{item.bar}</span>
              <span className="text-xs text-slate-500 font-sans">{item.units} units requested</span>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase">Active Donors</span>
          <h4 className="text-2xl font-black text-slate-900">3,120</h4>
        </div>
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase">Requests Fulfilled</span>
          <h4 className="text-2xl font-black text-slate-900">1,284</h4>
        </div>
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase">Avg. Response Time</span>
          <h4 className="text-2xl font-black text-emerald-600">14 mins</h4>
        </div>
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase">Monthly Donations</span>
          <h4 className="text-2xl font-black text-slate-900">492</h4>
        </div>
      </div>
    </div>
  );
}
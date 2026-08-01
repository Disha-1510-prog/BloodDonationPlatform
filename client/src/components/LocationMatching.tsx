import React, { useState } from 'react';
import { MapPin, Navigation, Search, ShieldAlert, ArrowLeft } from 'lucide-react';

interface LocationMatchingProps {
  onBack: () => void;
}

export default function LocationMatching({ onBack }: LocationMatchingProps) {
  const [bloodGroup, setBloodGroup] = useState('O+');
  const [radius, setRadius] = useState(10);
  const [searched, setSearched] = useState(false);

  // Filtered matching logic simulation based on proximity tiers
  const matchedDonors = [
    { id: '1', tier: 'Same Area', area: 'Bhubaneswar (Central)', blood: 'O+', available: true },
    { id: '2', tier: 'Same Area', area: 'Bhubaneswar (Nayapalli)', blood: 'O+', available: true },
    { id: '3', tier: 'Nearby Area', area: 'Cuttack Urban Sector', blood: 'O+', available: true },
    { id: '4', tier: 'Surrounding Region', area: 'Khurda District Hub', blood: 'O+', available: true },
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
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">Location-Based Donor Matching</h1>
              <p className="text-xs text-slate-500">Prioritizing same area, nearby zones, and surrounding regions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Required Blood Group</label>
              <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-bold text-red-600">
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Search Radius: {radius} km</label>
              <input 
                type="range" 
                min="5" 
                max="50" 
                value={radius} 
                onChange={(e) => setRadius(Number(e.target.value))} 
                className="w-full accent-red-600 mt-4 cursor-pointer"
              />
            </div>
          </div>

          <button onClick={() => setSearched(true)} className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-red-200 transition-all text-sm">
            Calculate Proximity Matches
          </button>
        </div>

        {searched && (
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-2xl flex justify-between items-center shadow-lg">
              <div>
                <span className="text-xs text-slate-400 font-bold uppercase">Search Summary</span>
                <h3 className="text-2xl font-black text-red-500 mt-0.5">Required: {bloodGroup} | Radius: {radius} km</h3>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black">{matchedDonors.length}</span>
                <span className="block text-xs text-slate-400">Potential Matches</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {matchedDonors.map((donor, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full border border-red-100">
                      {donor.tier}
                    </span>
                    <span className="text-xs font-bold text-emerald-600">Available: Yes</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Approx. Area: {donor.area}</h4>
                    <p className="text-xs text-slate-400 mt-1">🔒 Privacy Rule: Exact home locations are hidden publicly.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
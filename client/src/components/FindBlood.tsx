import React, { useState } from 'react';
import { Search, HeartPulse, ArrowLeft, ShieldCheck, PhoneCall } from 'lucide-react';

interface FindBloodProps {
  onBack: () => void;
}

export default function FindBlood({ onBack }: FindBloodProps) {
  const [bloodGroup, setBloodGroup] = useState('O-Positive');
  const [location, setLocation] = useState('Bhubaneswar');
  const [units, setUnits] = useState(2);
  const [urgency, setUrgency] = useState('Emergency');
  const [searched, setSearched] = useState(false);

  // Mock verified matching donors adhering strictly to privacy guidelines (no private addresses exposed)
  const mockDonors = [
    { id: 'D1', bloodGroup: 'O-Positive', area: 'Bhubaneswar (Central)', available: true, verified: true },
    { id: 'D2', bloodGroup: 'O-Positive', area: 'Bhubaneswar (North)', available: true, verified: true },
    { id: 'D3', bloodGroup: 'O-Positive', area: 'Bhubaneswar (East)', available: true, verified: true }
  ];

  const handleRequestContact = (donorId: string) => {
    alert(`Secure contact request sent for Donor ID: ${donorId}. The platform will mediate connection while preserving privacy.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2.5 rounded-xl text-white">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">Find Blood Directory</h1>
              <p className="text-xs text-slate-500">Locate verified donors safely without exposing private personal details</p>
            </div>
          </div>

          {/* Search Filters Form */}
          <div className="grid md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Blood Group</label>
              <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-bold text-red-600">
                {['A-Positive', 'A-Negative', 'B-Positive', 'B-Negative', 'AB-Positive', 'AB-Negative', 'O-Positive', 'O-Negative'].map((bg) => <option key={bg} value={bg}>{bg}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Location / City</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-medium" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Required Units</label>
              <input type="number" min="1" max="10" value={units} onChange={(e) => setUnits(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-medium" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Urgency Level</label>
              <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-bold">
                <option value="Normal">🟢 Normal</option>
                <option value="Urgent">🟡 Urgent</option>
                <option value="Emergency">🔴 Emergency</option>
              </select>
            </div>
          </div>

          <button onClick={() => setSearched(true)} className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-red-200 transition-all text-sm">
            Search Matching Donors & Inventories
          </button>
        </div>

        {/* Results Section */}
        {searched && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-900">Available Donors in {location} ({bloodGroup})</h3>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Privacy-Protected Directory
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {mockDonors.map((donor) => (
                <div key={donor.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-black text-red-600">{donor.bloodGroup}</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                      Available: Yes
                    </span>
                  </div>

                  <div className="text-sm text-slate-600 space-y-1">
                    <p><strong>Approx. area:</strong> {donor.area}</p>
                    <p className="text-xs text-slate-400">🔒 Personal address & phone remain encrypted.</p>
                  </div>

                  <button 
                    onClick={() => handleRequestContact(donor.id)}
                    className="w-full bg-slate-900 hover:bg-red-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <PhoneCall className="w-4 h-4" /> Request Contact
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
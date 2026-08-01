import React, { useState } from 'react';
import { Calendar, MapPin, Users, PlusCircle, LogOut, ArrowLeft } from 'lucide-react';

interface NgoDashboardProps {
  onLogout: () => void;
}

export default function NgoDashboard({ onLogout }: NgoDashboardProps) {
  const [camps, setCamps] = useState([
    {
      id: '1',
      name: 'Blood Donation Camp',
      location: 'College Campus',
      date: '15 August',
      time: '10:00 AM–4:00 PM',
      registeredDonorsCount: 126,
      donorsList: ['Rahul', 'Ananya', 'Arjun', 'Priya', 'Vikram']
    }
  ]);

  const [selectedCamp, setSelectedCamp] = useState(camps[0]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2.5 rounded-xl text-white shadow-md shadow-red-200">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-900">LifeLink NGO Portal</h1>
              <p className="text-xs text-slate-500 font-medium">Campaign & Blood Drive Management</p>
            </div>
          </div>
          <button onClick={onLogout} className="text-slate-400 hover:text-red-600 transition-colors p-2 flex items-center gap-1 font-semibold text-sm">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Active Donation Camps & Drives</h2>
              <p className="text-xs text-slate-500">Manage campaign details, volunteer coordination, and participant registries</p>
            </div>
            <button onClick={() => alert('Create new camp modal opened.')} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
              <PlusCircle className="w-4 h-4" /> Create Camp
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {camps.map((camp) => (
              <div key={camp.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-black text-slate-900">🩸 {camp.name}</h3>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                    {camp.registeredDonorsCount} Registered Donors
                  </span>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-600" /> {camp.location}</p>
                  <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-red-600" /> {camp.date} | {camp.time}</p>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Registered Donors List</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm font-semibold text-slate-800">
                    {camp.donorsList.map((donor, idx) => (
                      <li key={idx}>{donor}</li>
                    ))}
                    <li className="text-slate-400 font-normal italic">...and {camp.registeredDonorsCount - camp.donorsList.length} more</li>
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
import React, { useState } from 'react';
import { HeartPulse, Bell, Calendar, AlertTriangle, CheckCircle, LogOut } from 'lucide-react';

interface DonorDashboardProps {
  onLogout: () => void;
}

export default function DonorDashboard({ onLogout }: DonorDashboardProps) {
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [requests, setRequests] = useState([
    { id: '1', hospital: 'City General Hospital', bloodType: 'O-Positive', units: 2, distance: '2.5 km away', urgency: 'CRITICAL' },
    { id: '2', hospital: 'Metro Healthcare Center', bloodType: 'O-Positive', units: 1, distance: '4.1 km away', urgency: 'HIGH' }
  ]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history' | 'settings'>('dashboard');

  const handleAcceptRequest = (hospitalName: string) => {
    alert(`You have accepted the request for ${hospitalName}. The hospital has been notified and will contact you shortly.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2.5 rounded-xl text-white shadow-md shadow-red-200">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-900">Life<span className="text-red-600">Link</span></h1>
              <p className="text-xs text-slate-500 font-medium">Donor Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-red-50 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-bold border border-red-200">
              <Bell className="w-3.5 h-3.5 animate-bounce" />
              Real-Time Alerts Active
            </div>
            <button onClick={onLogout} className="text-slate-400 hover:text-red-600 transition-colors p-2">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        
        {/* Welcome & Status Banner */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">Verified Donor</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">Welcome, Rahul 👋</h2>
            <p className="text-slate-500 text-sm mt-1">Thank you for being part of our life-saving community network.</p>
          </div>
          
          <div className="flex items-center gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 w-full md:w-auto justify-between md:justify-start">
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase">Blood Group</span>
              <span className="text-2xl font-black text-red-600">O+</span>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase">Donation Status</span>
              <span className={`text-sm font-bold ${isAvailable ? 'text-emerald-600' : 'text-amber-600'}`}>
                {isAvailable ? '🟢 Available' : '🟠 Unavailable'}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats & Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Active Requests Near You</span>
              <h3 className="text-3xl font-black text-slate-900 mt-1">{requests.length}</h3>
            </div>
            <div className="bg-red-50 text-red-600 p-3.5 rounded-xl">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Donations</span>
              <h3 className="text-3xl font-black text-slate-900 mt-1">7</h3>
            </div>
            <div className="bg-emerald-50 text-emerald-600 p-3.5 rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Last Donation</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">14 Nov 2025</h3>
            </div>
            <div className="bg-indigo-50 text-indigo-600 p-3.5 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Interactive Features Toolbar */}
        <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-4">
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'dashboard' ? 'bg-red-600 text-white shadow-md shadow-red-200' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            Active Requests Nearby
          </button>
          <button 
            onClick={() => setActiveTab('history')} 
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'history' ? 'bg-red-600 text-white shadow-md shadow-red-200' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            Donation History & Appointments
          </button>
          <button 
            onClick={() => setActiveTab('settings')} 
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'settings' ? 'bg-red-600 text-white shadow-md shadow-red-200' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            Profile & Privacy Settings
          </button>
        </div>

        {/* TAB 1: ACTIVE REQUESTS */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-900">Urgent Broadcasts Matching Your Blood Group (O+)</h3>
              <span className="text-xs text-slate-500 font-semibold">Updated live via network</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {requests.map((req) => (
                <div key={req.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full border border-red-100">
                      {req.urgency} URGENCY
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{req.distance}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{req.hospital}</h4>
                    <p className="text-slate-500 text-sm mt-1">Required: <strong className="text-slate-800">{req.units} Units</strong> ({req.bloodType})</p>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button 
                      onClick={() => handleAcceptRequest(req.hospital)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-xl font-bold text-sm shadow-md transition-all"
                    >
                      Accept Request
                    </button>
                    <button 
                      onClick={() => alert('Request reported for verification check.')}
                      className="px-4 py-2.5 border border-slate-200 text-slate-500 hover:text-red-600 rounded-xl text-sm font-semibold transition-all"
                    >
                      Report Issue
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: HISTORY & APPOINTMENTS */}
        {activeTab === 'history' && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-black text-slate-900">Donation History & Upcoming Appointments</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                <div>
                  <span className="block font-bold text-slate-900">City General Hospital Blood Bank</span>
                  <span className="text-xs text-slate-500">Completed on 14 Nov 2025 • 1 Unit Donated</span>
                </div>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">Successful</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                <div>
                  <span className="block font-bold text-slate-900">Red Cross Regional Center</span>
                  <span className="text-xs text-slate-500">Completed on 22 Aug 2025 • 1 Unit Donated</span>
                </div>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">Successful</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SETTINGS & AVAILABILITY */}
        {activeTab === 'settings' && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 max-w-2xl">
            <h3 className="text-xl font-black text-slate-900">Account & Privacy Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <h4 className="font-bold text-slate-900">Donation Availability Toggle</h4>
                  <p className="text-slate-500 text-sm">Turn off if you are temporarily unavailable to receive emergency alerts.</p>
                </div>
                <button 
                  onClick={() => setIsAvailable(!isAvailable)}
                  className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${isAvailable ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-700'}`}
                >
                  {isAvailable ? 'Available' : 'Unavailable'}
                </button>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase">Preferred Contact Method</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-semibold">
                  <option>Phone Call & SMS</option>
                  <option>Email Notification Only</option>
                </select>
              </div>

              <button onClick={() => alert('Profile settings updated successfully!')} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all">
                Save Changes
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
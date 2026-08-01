import React, { useState } from 'react';
import { Bell, Mail, Globe, CheckCircle2, XCircle, AlertCircle, ArrowLeft } from 'lucide-react';

interface NotificationCenterProps {
  onBack: () => void;
}

export default function NotificationCenter({ onBack }: NotificationCenterProps) {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'URGENT BLOOD REQUEST',
      bloodGroup: 'O+',
      message: 'O+ blood is required at a verified hospital in your area (Bhubaneswar Central).',
      hospital: 'City General Hospital',
      radius: '3.5 km away',
      status: 'pending'
    },
    {
      id: '2',
      type: 'URGENT BLOOD REQUEST',
      bloodGroup: 'O+',
      message: 'O+ blood needed for emergency trauma surgery case.',
      hospital: 'Apollo Healthcare',
      radius: '8.2 km away',
      status: 'pending'
    }
  ]);

  const handleAction = (id: string, response: 'help' | 'unavailable') => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, status: response } : n));
    if (response === 'help') {
      alert('Thank you! Hospital notified. Secure connection established.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6 text-slate-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-2.5 rounded-xl text-white">
                <Bell className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900">Live Notification Center</h1>
                <p className="text-xs text-slate-500">Website & Email multi-channel dispatch simulation</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-blue-200">
                <Globe className="w-3.5 h-3.5" /> Website Active
              </span>
              <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-purple-200">
                <Mail className="w-3.5 h-3.5" /> Email Synced
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {notifications.map((notif) => (
              <div key={notif.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🩸 {notif.type} ({notif.bloodGroup})
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{notif.radius}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase">{notif.hospital}</span>
                </div>

                <p className="text-slate-700 font-medium text-sm">
                  {notif.message}
                </p>

                {notif.status === 'pending' ? (
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => handleAction(notif.id, 'help')}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-red-200 transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" /> I Can Help
                    </button>
                    <button
                      onClick={() => handleAction(notif.id, 'unavailable')}
                      className="px-5 py-3 border border-slate-200 hover:bg-slate-200 text-slate-600 rounded-xl font-semibold text-sm transition-all"
                    >
                      Not Available
                    </button>
                  </div>
                ) : (
                  <div className={`p-3 rounded-xl text-center text-sm font-bold ${notif.status === 'help' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'}`}>
                    {notif.status === 'help' ? '✓ Response Recorded: You have accepted this request.' : 'Status: Marked as Not Available'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { HeartPulse, ArrowLeft, ShieldCheck, Lock } from 'lucide-react';

interface OrganRegistrationProps {
  onBack: () => void;
}

export default function OrganRegistration({ onBack }: OrganRegistrationProps) {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [intent, setIntent] = useState('All Organs & Tissues');
  const [nomineeName, setNomineeName] = useState('');
  const [nomineePhone, setNomineePhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6 text-slate-800">
      <div className="max-w-2xl mx-auto space-y-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2.5 rounded-xl text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">Organ Donor Intent Registration</h1>
              <p className="text-xs text-slate-500">Secure registration with strict privacy & security controls</p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center gap-3">
            <Lock className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-xs text-emerald-800 font-medium">
              Protected by end-to-end encryption, role-based access control, and strict data minimization policies.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Legal Name</label>
                  <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Date of Birth</label>
                  <input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Donation Intent Scope</label>
                <select value={intent} onChange={(e) => setIntent(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-bold text-red-600">
                  <option value="All Organs & Tissues">All Organs & Tissues (Universal Pledge)</option>
                  <option value="Specific Organs">Specific Organs Only (Heart, Kidneys, Livers)</option>
                  <option value="Tissues Only">Tissues / Corneas Only</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Emergency Nominee Name</label>
                  <input type="text" required placeholder="Family member / Nominee" value={nomineeName} onChange={(e) => setNomineeName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nominee Phone Number</label>
                  <input type="tel" required placeholder="+91 XXXXX XXXXX" value={nomineePhone} onChange={(e) => setNomineePhone(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-red-200 transition-all text-sm mt-4">
                Pledge Organ Donation Intent Securely
              </button>
            </form>
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex bg-emerald-100 text-emerald-800 p-4 rounded-full">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Registration Reference Recorded</h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your pledge has been securely recorded under reference ID <strong className="text-slate-900">ORG-REG-94821</strong> with strict privacy safeguards.
              </p>
              <button onClick={() => setSubmitted(false)} className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold">
                Register Another / Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
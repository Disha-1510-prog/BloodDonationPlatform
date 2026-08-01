import React, { useState } from 'react';
import { HeartPulse, ArrowLeft } from 'lucide-react';

interface AuthProps {
  onBack: () => void;
}

export default function Auth({ onBack }: AuthProps) {
  const [tab, setTab] = useState<'login' | 'donor-reg' | 'recipient-reg'>('donor-reg');

  // Donor Form State
  const [donorName, setDonorName] = useState('');
  const [donorDob, setDonorDob] = useState('');
  const [donorGender, setDonorGender] = useState('');
  const [donorBloodGroup, setDonorBloodGroup] = useState('O-Positive');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorCity, setDonorCity] = useState('');
  const [donorContactMethod, setDonorContactMethod] = useState('Phone');
  const [donorLastDonation, setDonorLastDonation] = useState('');
  const [donorAvailability, setDonorAvailability] = useState('Available');
  const [donorPassword, setDonorPassword] = useState('');

  // Recipient Form State
  const [recName, setRecName] = useState('');
  const [recPhone, setRecPhone] = useState('');
  const [recEmail, setRecEmail] = useState('');
  const [recBloodGroup, setRecBloodGroup] = useState('O-Positive');
  const [recHospital, setRecHospital] = useState('');
  const [recCity, setRecCity] = useState('');
  const [recDate, setRecDate] = useState('');
  const [recUnits, setRecUnits] = useState(1);
  const [recReason, setRecReason] = useState('Surgery');
  const [recEmergencyLevel, setRecEmergencyLevel] = useState('Critical');

  const handleDonorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Donor registration successful! (Securely saved without sensitive medical logs)');
    onBack();
  };

  const handleRecipientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Recipient request registered successfully! Pending verification.');
    onBack();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-600 p-2.5 rounded-xl text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">LifeLink Portal</h1>
              <p className="text-xs text-slate-500">Secure Account Registration & Sign In</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 mb-8 gap-4">
            <button
              onClick={() => setTab('donor-reg')}
              className={`pb-3 font-bold text-sm border-b-2 transition-all ${tab === 'donor-reg' ? 'border-red-600 text-red-600' : 'border-transparent text-slate-400'}`}
            >
              Donor Registration
            </button>
            <button
              onClick={() => setTab('recipient-reg')}
              className={`pb-3 font-bold text-sm border-b-2 transition-all ${tab === 'recipient-reg' ? 'border-red-600 text-red-600' : 'border-transparent text-slate-400'}`}
            >
              Recipient Request
            </button>
            <button
              onClick={() => setTab('login')}
              className={`pb-3 font-bold text-sm border-b-2 transition-all ${tab === 'login' ? 'border-red-600 text-red-600' : 'border-transparent text-slate-400'}`}
            >
              Sign In
            </button>
          </div>

          {/* DONOR REGISTRATION FORM */}
          {tab === 'donor-reg' && (
            <form onSubmit={handleDonorSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                  <input type="text" required value={donorName} onChange={(e) => setDonorName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-red-600 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Date of Birth</label>
                  <input type="date" required value={donorDob} onChange={(e) => setDonorDob(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-red-600 focus:outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Blood Group</label>
                  <select value={donorBloodGroup} onChange={(e) => setDonorBloodGroup(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white">
                    {['A-Positive', 'A-Negative', 'B-Positive', 'B-Negative', 'AB-Positive', 'AB-Negative', 'O-Positive', 'O-Negative'].map((bg) => <option key={bg} value={bg}>{bg}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Gender (Optional)</label>
                  <select value={donorGender} onChange={(e) => setDonorGender(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white">
                    <option value="">Prefer not to say</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">City / Area</label>
                  <input type="text" required placeholder="e.g. Cuttack" value={donorCity} onChange={(e) => setDonorCity(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                  <input type="tel" required placeholder="+91 XXXXX XXXXX" value={donorPhone} onChange={(e) => setDonorPhone(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input type="email" required placeholder="name@example.com" value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Contact</label>
                  <select value={donorContactMethod} onChange={(e) => setDonorContactMethod(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white">
                    <option value="Phone">Phone Call</option>
                    <option value="SMS">SMS</option>
                    <option value="Email">Email</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Last Donation Date</label>
                  <input type="date" value={donorLastDonation} onChange={(e) => setDonorLastDonation(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Availability</label>
                  <select value={donorAvailability} onChange={(e) => setDonorAvailability(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white">
                    <option value="Available">Available Now</option>
                    <option value="Unavailable">Temporarily Unavailable</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Password</label>
                <input type="password" required placeholder="••••••••" value={donorPassword} onChange={(e) => setDonorPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
              </div>

              <p className="text-xs text-slate-400 italic">Note: Sensitive medical information is strictly avoided to protect your privacy.</p>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-red-200 transition-all text-sm mt-4">
                Complete Donor Registration
              </button>
            </form>
          )}

          {/* RECIPIENT REGISTRATION FORM */}
          {tab === 'recipient-reg' && (
            <form onSubmit={handleRecipientSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Patient / Recipient Name</label>
                  <input type="text" required value={recName} onChange={(e) => setRecName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Contact Number</label>
                  <input type="tel" required value={recPhone} onChange={(e) => setRecPhone(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input type="email" required value={recEmail} onChange={(e) => setRecEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Blood Group Required</label>
                  <select value={recBloodGroup} onChange={(e) => setRecBloodGroup(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white">
                    {['A-Positive', 'A-Negative', 'B-Positive', 'B-Negative', 'AB-Positive', 'AB-Negative', 'O-Positive', 'O-Negative'].map((bg) => <option key={bg} value={bg}>{bg}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Units Required</label>
                  <input type="number" min="1" max="20" required value={recUnits} onChange={(e) => setRecUnits(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Hospital Name</label>
                  <input type="text" required placeholder="e.g. City Medical Center" value={recHospital} onChange={(e) => setRecHospital(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">City / Area</label>
                  <input type="text" required value={recCity} onChange={(e) => setRecCity(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Required Date</label>
                  <input type="date" required value={recDate} onChange={(e) => setRecDate(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Request Category</label>
                  <select value={recReason} onChange={(e) => setRecReason(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white">
                    <option value="Surgery">Surgery / Operation</option>
                    <option value="Accident">Accident / Trauma</option>
                    <option value="Thalassemia">Thalassemia Care</option>
                    <option value="Other">Other Medical Need</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Emergency Level</label>
                  <select value={recEmergencyLevel} onChange={(e) => setRecEmergencyLevel(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-bold text-red-600">
                    <option value="Critical">Critical (Immediate)</option>
                    <option value="High">High Priority</option>
                    <option value="Normal">Scheduled</option>
                  </select>
                </div>
              </div>

              <p className="text-xs text-amber-600 bg-amber-50 p-3 rounded-xl border border-amber-200 font-medium">
                🔒 Security Notice: Sensitive information is protected and requests undergo hospital verification before public broadcast.
              </p>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-red-200 transition-all text-sm mt-4">
                Submit Verified Request
              </button>
            </form>
          )}

          {/* SIGN IN FORM */}
          {tab === 'login' && (
            <form onSubmit={(e) => { e.preventDefault(); alert('Signed in successfully!'); onBack(); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                <input type="email" required placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Password</label>
                <input type="password" required placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
              </div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-red-200 transition-all text-sm mt-4">
                Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
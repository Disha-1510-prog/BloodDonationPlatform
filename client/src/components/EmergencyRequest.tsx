import React, { useState } from 'react';
import { AlertTriangle, ArrowLeft, CheckCircle2, ShieldAlert, FileText, Send } from 'lucide-react';

interface EmergencyRequestProps {
  onBack: () => void;
}

export default function EmergencyRequest({ onBack }: EmergencyRequestProps) {
  const [step, setStep] = useState<'form' | 'workflow'>('form');
  const [bloodGroup, setBloodGroup] = useState('O-Positive');
  const [units, setUnits] = useState(2);
  const [hospital, setHospital] = useState('');
  const [location, setLocation] = useState('');
  const [reqDate, setReqDate] = useState('');
  const [emergencyLevel, setEmergencyLevel] = useState('🔴 Emergency');
  const [contactPerson, setContactPerson] = useState('');
  const [requestId, setRequestId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestId('REQ-' + Math.floor(100000 + Math.random() * 900000));
    setStep('workflow');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6 text-slate-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {step === 'form' && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6">
            <div className="flex items-center gap-3 bg-red-50 p-4 rounded-2xl border border-red-200">
              <div className="bg-red-600 p-2.5 rounded-xl text-white">
                <AlertTriangle className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <h1 className="text-xl font-black text-red-700">Emergency Blood Request</h1>
                <p className="text-xs text-red-600">Broadcasts instant alerts to verified donors and hospital networks.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Blood Group Required</label>
                  <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-bold text-red-600">
                    {['A-Positive', 'A-Negative', 'B-Positive', 'B-Negative', 'AB-Positive', 'AB-Negative', 'O-Positive', 'O-Negative'].map((bg) => <option key={bg} value={bg}>{bg}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Units Needed</label>
                  <input type="number" min="1" max="20" required value={units} onChange={(e) => setUnits(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Hospital Name</label>
                  <input type="text" required placeholder="e.g. Apollo Hospital" value={hospital} onChange={(e) => setHospital(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">City / Location</label>
                  <input type="text" required placeholder="e.g. Bhubaneswar" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Required Date & Time</label>
                  <input type="datetime-local" required value={reqDate} onChange={(e) => setReqDate(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Emergency Level</label>
                  <select value={emergencyLevel} onChange={(e) => setEmergencyLevel(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-bold">
                    <option value="🟢 Normal">🟢 Normal</option>
                    <option value="🟡 Urgent">🟡 Urgent</option>
                    <option value="🔴 Emergency">🔴 Emergency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Contact Person</label>
                  <input type="text" required placeholder="Full Name & Phone" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Supporting Hospital Document / Prescription Note</label>
                <input type="file" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100" />
              </div>

              <p className="text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200 font-medium">
                ⚠️ All emergency requests undergo instant hospital verification to maintain network authenticity.
              </p>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-red-200 transition-all text-sm flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Broadcast Emergency Request
              </button>
            </form>
          </div>
        )}

        {/* WORKFLOW PIPELINE VIEW */}
        {step === 'workflow' && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex bg-emerald-100 text-emerald-800 p-3 rounded-full mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Request Created Successfully!</h2>
              <p className="text-xs font-bold text-red-600 uppercase tracking-widest">Patient / Request ID: {requestId}</p>
            </div>

            <div className="space-y-6 max-w-md mx-auto py-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-2xl font-bold flex items-center justify-center">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900">1. Request Created</h4>
                  <p className="text-xs text-slate-500">Logged securely into LifeLink emergency queue.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500 text-white rounded-2xl font-bold flex items-center justify-center animate-pulse">⏳</div>
                <div>
                  <h4 className="font-bold text-slate-900">2. Hospital Verification</h4>
                  <p className="text-xs text-slate-500">Validating hospital credentials & case documents.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 opacity-50">
                <div className="w-10 h-10 bg-slate-200 text-slate-600 rounded-2xl font-bold flex items-center justify-center">3</div>
                <div>
                  <h4 className="font-bold text-slate-900">3. Eligible Donors Notified</h4>
                  <p className="text-xs text-slate-500">Push & SMS alerts dispatched to compatible local donors.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 opacity-50">
                <div className="w-10 h-10 bg-slate-200 text-slate-600 rounded-2xl font-bold flex items-center justify-center">4</div>
                <div>
                  <h4 className="font-bold text-slate-900">4. Donor Responds & Coordinates</h4>
                  <p className="text-xs text-slate-500">Hospital coordination & donation fulfillment.</p>
                </div>
              </div>
            </div>

            <button onClick={() => setStep('form')} className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold text-sm transition-all">
              Submit Another Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
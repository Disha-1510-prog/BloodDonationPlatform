import React from 'react';
import { HeartPulse, AlertTriangle, Search, UserPlus, Building2, Phone, Mail, MapPin } from 'lucide-react';

interface HomeProps {
  onNavigate: (view: 'home' | 'login' | 'register' | 'donor-dashboard' | 'find-blood' | 'emergency') => void;
  onOpenFindBlood: () => void;
  onOpenEmergency: () => void;
}

export default function Home({ onNavigate, onOpenFindBlood, onOpenEmergency }: HomeProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-xl text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">Life<span className="text-red-600">Link</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-600">
            <a href="#about" className="hover:text-red-600 transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-red-600 transition-colors">How It Works</a>
            <a href="#blood-groups" className="hover:text-red-600 transition-colors">Blood Groups</a>
            <a href="#stats" className="hover:text-red-600 transition-colors">Statistics</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('login')}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => onNavigate('register')}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md shadow-red-200 transition-all"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Important Emergency Section */}
      <section className="bg-red-600 text-white py-12 px-6 text-center shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-red-500">
            <AlertTriangle className="w-4 h-4 animate-bounce" />
            Critical Response Network
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">Need Blood Urgently?</h1>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Create a verified request and notify eligible registered donors instantly.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={onOpenEmergency}
              className="bg-white text-red-600 hover:bg-red-50 px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-xl transition-all"
            >
              <AlertTriangle className="w-5 h-5" />
              Emergency Donation Request
            </button>
            <button
              onClick={onOpenFindBlood}
              className="bg-red-700 hover:bg-red-800 text-white border border-red-500 px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 transition-all"
            >
              <Search className="w-5 h-5" />
              Find Blood
            </button>
          </div>
        </div>
      </section>

      {/* Action Hub Buttons */}
      <section className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div onClick={() => onNavigate('register')} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-4 cursor-pointer hover:border-red-200 transition-all group">
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-all">
              <UserPlus className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Become a Donor</h3>
              <p className="text-slate-500 text-sm">Register your profile to save lives locally.</p>
            </div>
          </div>
          <div onClick={() => onNavigate('register')} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-4 cursor-pointer hover:border-red-200 transition-all group">
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-all">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Register Hospital</h3>
              <p className="text-slate-500 text-sm">Onboard blood banks and verified medical facilities.</p>
            </div>
          </div>
          <div onClick={onOpenFindBlood} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-4 cursor-pointer hover:border-red-200 transition-all group">
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-all">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Search Directory</h3>
              <p className="text-slate-500 text-sm">Locate active blood units and stock availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Platform */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">About LifeLink</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              LifeLink bridges the critical gap between blood donors, recipients, and hospitals. Our platform uses automated notifications and location matching to streamline emergency blood distribution when every second counts.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-xl font-bold">01</div>
              <div>
                <h4 className="font-bold text-slate-900">Verified Requests</h4>
                <p className="text-slate-500 text-sm">All emergency entries include hospital validation to prevent misinformation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-xl font-bold">02</div>
              <div>
                <h4 className="font-bold text-slate-900">Instant Matching</h4>
                <p className="text-slate-500 text-sm">Donors are notified based on proximity and compatible blood groupings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-2">How It Works</h2>
            <p className="text-slate-500">Three simple steps to coordinate life-saving donations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-2xl font-black flex items-center justify-center mx-auto mb-6 text-lg">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Register Profile</h3>
              <p className="text-slate-500 text-sm">Sign up as a donor or recipient with essential contact info.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-2xl font-black flex items-center justify-center mx-auto mb-6 text-lg">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Broadcast / Search</h3>
              <p className="text-slate-500 text-sm">Recipients submit emergency requirements or search active inventories.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-2xl font-black flex items-center justify-center mx-auto mb-6 text-lg">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Connect & Donate</h3>
              <p className="text-slate-500 text-sm">Donors receive instant alerts and coordinate with hospitals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Groups Compatibility Section */}
      <section id="blood-groups" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Blood Group Compatibility</h2>
          <p className="text-slate-500">Know your donor and recipient matching profiles.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['O-Negative (Universal Donor)', 'O-Positive', 'A-Positive', 'A-Negative', 'B-Positive', 'B-Negative', 'AB-Positive', 'AB-Negative'].map((group, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <span className="text-lg font-black text-red-600">{group.split(' ')[0]}</span>
              <p className="text-xs text-slate-500 mt-1">{group.substring(group.indexOf(' ') + 1)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Donation Statistics */}
      <section id="stats" className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-4xl font-black text-red-500 mb-1">10,480+</span>
            <span className="text-slate-400 text-sm">Registered Donors</span>
          </div>
          <div>
            <span className="block text-4xl font-black text-red-500 mb-1">3,200+</span>
            <span className="text-slate-400 text-sm">Successful Donations</span>
          </div>
          <div>
            <span className="block text-4xl font-black text-red-500 mb-1">150+</span>
            <span className="text-slate-400 text-sm">Partner Hospitals</span>
          </div>
          <div>
            <span className="block text-4xl font-black text-red-500 mb-1">99.8%</span>
            <span className="text-slate-400 text-sm">Emergency Response Rate</span>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 p-2 rounded-xl text-white">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-lg font-black text-slate-900">Life<span className="text-red-600">Link</span></span>
            </div>
            <p className="text-slate-500 text-sm">Empowering communities through rapid emergency blood coordination.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-3">Contact Information</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-red-600" /> +1 (800) 555-LIFE</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-red-600" /> support@lifelink.org</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-600" /> Healthcare Innovation Hub</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-3">Emergency Helpline</h4>
            <p className="text-2xl font-black text-red-600">1800-LIFE-911</p>
            <p className="text-xs text-slate-400 mt-1">Available 24/7 for critical hospital dispatches.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
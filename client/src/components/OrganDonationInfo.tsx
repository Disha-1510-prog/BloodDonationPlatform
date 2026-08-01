import React from 'react';
import { HeartPulse, ArrowLeft, ShieldCheck, ExternalLink } from 'lucide-react';

interface OrganDonationInfoProps {
  onBack: () => void;
}

export default function OrganDonationInfo({ onBack }: OrganDonationInfoProps) {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2.5 rounded-xl text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">Organ Donation Information Hub</h1>
              <p className="text-xs text-slate-500">Educational resources & official registry guidelines</p>
            </div>
          </div>

          {/* Official Registry Notice */}
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-blue-600" /> Official National Registries Integration Notice
            </div>
            <p className="text-xs text-blue-700 leading-relaxed">
              For actual Indian deployment, organ donation intent must be registered through official government authorities such as **NOTTO (National Organ and Tissue Transplant Organization)** rather than unofficial allocators. Use the official links below to pledge your organs.
            </p>
          </div>

          <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900">What is Organ Donation?</h3>
              <p>Organ donation is the process of surgically gifting an organ or tissues from a living or recently deceased person to someone who needs a transplant to survive or improve quality of life.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900">How Organ Donation Works</h3>
              <p>When a registered individual expresses intent or family consent is granted upon brain death, organs are matched via national allocation networks based on medical urgency, blood type, and tissue compatibility.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Myths vs. Facts</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Myth:</strong> Doctors will not try to save my life if I am a donor. <strong>Fact:</strong> Saving your life is always the absolute priority of medical staff.</li>
                <li><strong>Myth:</strong> Age prevents donation. <strong>Fact:</strong> Medical suitability at the time of death determines eligibility, not age.</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4">
              <a 
                href="https://www.notto.mohfw.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md transition-all"
              >
                Visit Official NOTTO Portal <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
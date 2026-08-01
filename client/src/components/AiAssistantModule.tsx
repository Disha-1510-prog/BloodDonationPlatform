import React, { useState } from 'react';
import { Bot, Sparkles, Send, ArrowLeft, ShieldAlert, Search } from 'lucide-react';

interface AiAssistantProps {
  onBack: () => void;
}

export default function AiAssistantModule({ onBack }: AiAssistantProps) {
  // 1. AI Chatbot State
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I am your LifeLink AI Assistant. Ask me how blood donation works, pre-donation tips, or how to register.' }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  // 2. Natural Language Intelligent Search State
  const [searchPrompt, setSearchPrompt] = useState('I need O positive blood near Cuttack tomorrow.');
  const [parsedResult, setParsedResult] = useState<{ bloodGroup: string; location: string; date: string } | null>(null);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userText = inputQuery;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputQuery('');

    // Simulate AI response logic
    setTimeout(() => {
      let aiReply = 'I can help with general platform guidelines. For specific medical questions, please consult a healthcare professional.';
      const lower = userText.toLowerCase();
      if (lower.includes('work') || lower.includes('donation')) {
        aiReply = 'Blood donation is a safe, simple process where whole blood or components are collected to save lives. It takes about 10-15 minutes for the actual donation.';
      } else if (lower.includes('before') || lower.includes('tip')) {
        aiReply = 'Before donating, ensure you eat a healthy meal, stay well hydrated, and get adequate rest. Avoid fatty foods right before donation.';
      } else if (lower.includes('register')) {
        aiReply = 'You can register easily by clicking the "Register" button on the top navigation bar to create your donor or recipient account.';
      }

      setMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 600);
  };

  const handleSmartSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Intelligent extraction simulation
    setParsedResult({
      bloodGroup: 'O+',
      location: 'Cuttack',
      date: 'Tomorrow'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>

        {/* AI Request Prioritization Banner */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-2.5 rounded-xl text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">AI Request Prioritization Engine</h1>
              <p className="text-xs text-slate-500">Automated triage supporting administrators without replacing medical professionals</p>
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-200 p-4 rounded-2xl flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
            <p className="text-xs text-purple-800 leading-relaxed font-medium">
              <strong>Clinical Safeguard:</strong> AI assists in sorting requests based on urgency level, time remaining, blood requirements, verification status, and available resources, but final prioritization and medical decisions rest strictly with healthcare professionals.
            </p>
          </div>
        </div>

        {/* Intelligent Natural Language Search */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2.5 rounded-xl text-white">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Intelligent Natural Language Search</h2>
              <p className="text-xs text-slate-500">Type naturally and let the system extract search parameters</p>
            </div>
          </div>

          <form onSubmit={handleSmartSearch} className="space-y-4">
            <input 
              type="text" 
              value={searchPrompt} 
              onChange={(e) => setSearchPrompt(e.target.value)} 
              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm font-medium"
            />
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all">
              Extract & Search
            </button>
          </form>

          {parsedResult && (
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase text-slate-400">Extracted Parameters</h4>
              <div className="flex gap-6 text-sm font-bold text-slate-800">
                <span>Blood Group: <span className="text-red-600">{parsedResult.bloodGroup}</span></span>
                <span>Location: <span className="text-slate-900">{parsedResult.location}</span></span>
                <span>Date: <span className="text-slate-900">{parsedResult.date}</span></span>
              </div>
            </div>
          )}
        </div>

        {/* AI Educational Chatbot */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2.5 rounded-xl text-white">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">LifeLink Educational AI Chatbot</h2>
              <p className="text-xs text-slate-500">Ask general questions about blood donation and registration</p>
            </div>
          </div>

          <div className="bg-slate-50 h-64 rounded-2xl border border-slate-200 p-4 overflow-y-auto space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md p-3.5 rounded-2xl text-sm ${m.sender === 'user' ? 'bg-red-600 text-white font-medium' : 'bg-white border border-slate-200 text-slate-800'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleChatSubmit} className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ask a question (e.g., 'What should I do before donating?')..." 
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl font-bold flex items-center justify-center shadow-md">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
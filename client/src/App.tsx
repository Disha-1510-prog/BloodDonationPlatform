import React, { useState } from 'react';
import Home from './components/Home';
import Auth from './components/Auth';
import DonorDashboard from './components/DonorDashboard';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'register' | 'donor-dashboard'>('home');

  return (
    <div>
      {currentView === 'home' && <Home onNavigate={(view) => setCurrentView(view)} />}
      {(currentView === 'login' || currentView === 'register') && (
        <Auth onBack={() => setCurrentView('home')} />
      )}
      {currentView === 'donor-dashboard' && <DonorDashboard onLogout={() => setCurrentView('home')} />}
    </div>
  );
}
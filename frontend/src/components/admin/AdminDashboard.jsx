import React, { useState } from 'react';
import Header from '../common/Header';
import ReportList from './ReportList';
import AnalyticsDashboard from './AnalyticsDashboard';
import { DashboardIcon, AnalyticsIcon } from '../common/Icons';

const AdminDashboard = ({ user, onLogout }) => {
  const [activeView, setActiveView] = useState('reports');

  const renderActiveView = () => {
    switch (activeView) {
      case 'reports':
        return <ReportList />;
      case 'analytics':
        return <AnalyticsDashboard />;
      default:
        return <ReportList />;
    }
  };
  
  const NavItem = ({ view, icon, label }) => (
    <button
      onClick={() => setActiveView(view)}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 w-full text-left ${
        activeView === view
          ? 'bg-primary text-white'
          : 'text-gray-600 hover:bg-green-100 hover:text-primary'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );


  return (
    <div className="flex flex-col min-h-screen">
      <Header user={user} onLogout={onLogout} />
       <div className="flex flex-1 flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-surface p-4 border-r">
          <nav className="flex flex-row md:flex-col gap-2">
            <NavItem view="reports" icon={<DashboardIcon className="h-5 w-5" />} label="Manage Reports" />
            <NavItem view="analytics" icon={<AnalyticsIcon className="h-5 w-5" />} label="Analytics" />
          </nav>
        </aside>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
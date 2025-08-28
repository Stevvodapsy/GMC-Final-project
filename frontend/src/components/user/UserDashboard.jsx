import React, { useState } from 'react';
import Header from '../common/Header';
import { ScheduleIcon, ReportIcon, RewardIcon, HistoryIcon, ActivityIcon } from '../common/Icons';
import SchedulePickupForm from './SchedulePickupForm';
import ReportWasteForm from './ReportWasteForm';
import RewardsDashboard from './RewardsDashboard';
import PickupHistory from './PickupHistory';
import ActivityFeed from './ActivityFeed';

const UserDashboard = ({ user, onLogout }) => {
  const [activeView, setActiveView] = useState('schedule');

  const renderActiveView = () => {
    switch (activeView) {
      case 'schedule':
        return <SchedulePickupForm />;
      case 'report':
        return <ReportWasteForm />;
      case 'rewards':
        return <RewardsDashboard user={user} />;
      case 'history':
        return <PickupHistory />;
      case 'activity':
        return <ActivityFeed />;
      default:
        return <SchedulePickupForm />;
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
            <NavItem view="schedule" icon={<ScheduleIcon className="h-5 w-5" />} label="Schedule Pickup" />
            <NavItem view="report" icon={<ReportIcon className="h-5 w-5" />} label="Report Waste" />
            <NavItem view="rewards" icon={<RewardIcon className="h-5 w-5" />} label="My Rewards" />
            <NavItem view="activity" icon={<ActivityIcon className="h-5 w-5" />} label="Activity Feed" />
            <NavItem view="history" icon={<HistoryIcon className="h-5 w-5" />} label="Pickup History" />
          </nav>
        </aside>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
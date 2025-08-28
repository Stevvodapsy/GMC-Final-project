import React from 'react';
import ReportList from '../components/ReportList';
import AnalyticsDashboard from '../components/AnalyticsDashboard';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AnalyticsDashboard />
      <ReportList />
    </div>
  );
};

export default AdminDashboard;
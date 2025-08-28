import React, { useState, useCallback } from 'react';
import AuthPage from './components/auth/AuthPage';
import UserDashboard from './components/user/UserDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';

const App = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser).user : null;
  });

  const handleLogin = useCallback((loggedInUser) => {
    setUser(loggedInUser);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  const renderContent = () => {
    if (!user) {
      return <AuthPage onLogin={handleLogin} />;
    }

    if (user.role === 'admin') {
      return <AdminDashboard user={user} onLogout={handleLogout} />;
    }

    if (user.role === 'user') {
      return <UserDashboard user={user} onLogout={handleLogout} />;
    }

    if (user.role === 'employee') {
      return <EmployeeDashboard user={user} onLogout={handleLogout} />;
    }
    
    return <AuthPage onLogin={handleLogin} />;
  };

  return (
    <div className="bg-background min-h-screen font-sans text-secondary">
      {renderContent()}
    </div>
  );
};

export default App;
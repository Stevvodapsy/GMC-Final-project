import React from 'react';
import { LeafIcon, LogoutIcon } from './Icons';

const Header = ({ user, onLogout }) => {
  return (
    <header className="bg-surface shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <LeafIcon className="h-8 w-8 text-primary" />
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Smart Waste <span className="text-primary">Manager</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="font-semibold text-gray-700">{user.name}</p>
          <p className="text-xs text-gray-500 capitalize">{user.role}</p>
        </div>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-full transition-colors duration-200"
          aria-label="Logout"
        >
          <LogoutIcon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
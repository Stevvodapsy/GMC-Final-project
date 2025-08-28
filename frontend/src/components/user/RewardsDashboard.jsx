import React from 'react';
import { RewardIcon } from '../common/Icons';

const RewardsDashboard = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-surface rounded-xl shadow-lg p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                        <RewardIcon className="h-8 w-8 text-yellow-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">My Rewards</h2>
                        <p className="text-gray-500">Your points for contributing to a cleaner city.</p>
                    </div>
                </div>
                <div className="text-center bg-primary text-white p-4 rounded-lg shadow-md">
                    <p className="text-sm font-medium">Total Points</p>
                    <p className="text-3xl font-bold">{user.points?.toLocaleString() || 0}</p>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Rewards History</h3>
                <ul className="divide-y divide-gray-200">
                    {mockRewards.map((reward) => (
                        <li key={reward.id} className="py-4 flex justify-between items-center">
                            <div>
                                <p className="font-medium text-gray-800">{reward.action}</p>
                                <p className="text-sm text-gray-500">{new Date(reward.date).toLocaleDateString()}</p>
                            </div>
                            <p className="font-bold text-lg text-primary">+{reward.points}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default RewardsDashboard;
import React from 'react';
import { LeafIcon, ReportIcon, RewardIcon } from '../common/Icons';
import { Status } from '../../../../constants';

const AnalyticsDashboard = () => {
    const totalReports = mockReports.length;
    const totalPoints = mockRewards.reduce((sum, reward) => sum + reward.points, 0);

    const StatCard = ({ icon, label, value, color }) => (
        <div className="bg-surface p-6 rounded-xl shadow-md flex items-center gap-4">
            <div className={`p-3 rounded-full ${color}`}>
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );

    const BarChart = ({ title, data, unit, color }) => {
        const maxValue = Math.max(...data.map(item => item.value), 1); // Avoid division by zero
        return (
            <div className="bg-surface p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
                <div className="space-y-4">
                    {data.map(item => (
                        <div key={item.name} className="grid grid-cols-4 items-center gap-2 sm:gap-4">
                            <p className="col-span-1 text-sm font-medium text-gray-600 truncate">{item.name}</p>
                            <div className="col-span-3 bg-gray-200 rounded-full h-5">
                                <div
                                    className={`${color} h-5 rounded-full flex items-center justify-end px-2 text-white text-xs font-bold transition-all duration-500`}
                                    style={{ width: `${(item.value / maxValue) * 100}%` }}
                                >
                                  <span className="truncate">{item.value.toLocaleString()} {unit}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Analytics Dashboard</h2>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard 
                    icon={<ReportIcon className="h-6 w-6 text-orange-600" />} 
                    label="Total Reports" 
                    value={totalReports} 
                    color="bg-orange-100"
                />
                <StatCard 
                    icon={<RewardIcon className="h-6 w-6 text-yellow-600" />} 
                    label="Total Points Awarded" 
                    value={totalPoints.toLocaleString()} 
                    color="bg-yellow-100"
                />
                 <StatCard 
                    icon={<LeafIcon className="h-6 w-6 text-green-600" />} 
                    label="Resolved Reports" 
                    value={mockReports.filter(r => r.status === Status.RESOLVED || r.status === Status.COMPLETED).length}
                    color="bg-green-100"
                />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <BarChart 
                    title="Reports by Area"
                    data={mockAnalytics.reportsByArea.map(d => ({name: d.name, value: d.reports}))}
                    unit="reports"
                    color="bg-primary"
                />
                <BarChart 
                    title="Recycling Activity"
                    data={mockAnalytics.recyclingActivity.map(d => ({name: d.name, value: d.points}))}
                    unit="points"
                    color="bg-accent"
                />
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
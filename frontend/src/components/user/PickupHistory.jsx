import React from 'react';
import { Status } from '../../constants';
import { HistoryIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from '../common/Icons';

const getStatusStyles = (status) => {
  switch (status) {
    case Status.COMPLETED:
      return {
        bgColor: 'bg-green-100',
        textColor: 'text-green-800',
        Icon: CheckCircleIcon,
      };
    case Status.SCHEDULED:
       return {
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-800',
        Icon: ClockIcon,
      };
    case Status.MISSED:
      return {
        bgColor: 'bg-red-100',
        textColor: 'text-red-800',
        Icon: XCircleIcon,
      };
    default:
      return {
        bgColor: 'bg-gray-100',
        textColor: 'text-gray-800',
        Icon: HistoryIcon,
      };
  }
};

const PickupHistory = () => {
    const userPickups = mockPickups
      .filter(p => p.userId === mockUser.id)
      .sort((a,b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime());

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-surface rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-indigo-100 p-3 rounded-full">
                        <HistoryIcon className="h-8 w-8 text-indigo-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Pickup History</h2>
                        <p className="text-gray-500">A record of your past and scheduled pickups.</p>
                    </div>
                </div>

                {userPickups.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {userPickups.map((pickup) => {
                            const { bgColor, textColor, Icon } = getStatusStyles(pickup.status);
                            return (
                                <li key={pickup.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                    <div>
                                        <p className="font-medium text-gray-800">Waste Pickup</p>
                                        <p className="text-sm text-gray-500">
                                            {new Date(pickup.scheduledDate).toLocaleString('en-US', {
                                                year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-full ${bgColor} ${textColor}`}>
                                        <Icon className="h-4 w-4" />
                                        <span>{pickup.status}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <div className="text-center text-gray-500 py-8">
                        <HistoryIcon className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                        <p>You have no pickup history yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PickupHistory;
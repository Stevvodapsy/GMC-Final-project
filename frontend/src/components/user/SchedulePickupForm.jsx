import React, { useState } from 'react';
import { ScheduleIcon } from '../common/Icons';

const SchedulePickupForm = () => {
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call
    console.log('Scheduling pickup for:', date);
    setMessage(`Pickup successfully scheduled for ${new Date(date).toDateString()}!`);
    setDate('');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
        <div className="bg-surface rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                    <ScheduleIcon className="h-8 w-8 text-primary" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Schedule a Pickup</h2>
                    <p className="text-gray-500">Choose a convenient date for your waste collection.</p>
                </div>
            </div>

            {message && (
                <div className="bg-green-100 border-l-4 border-primary text-green-700 p-4 mb-6" role="alert">
                    <p>{message}</p>
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Date
                    </label>
                    <input
                        type="date"
                        id="pickup-date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                    <p><strong>Note:</strong> Pickups are generally done between 9 AM and 5 PM. Please ensure your waste is accessible.</p>
                </div>
                
                <button
                    type="submit"
                    className="w-full px-4 py-3 font-semibold text-white bg-primary rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
                >
                    Confirm Schedule
                </button>
            </form>
        </div>
    </div>
  );
};

export default SchedulePickupForm;
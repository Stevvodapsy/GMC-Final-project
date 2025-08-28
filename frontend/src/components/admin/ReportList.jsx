import React from 'react';
import { Status } from '../../../../constants';

const getStatusColor = (status) => {
  switch (status) {
    case Status.PENDING:
      return 'bg-yellow-100 text-yellow-800';
    case Status.IN_PROGRESS:
      return 'bg-blue-100 text-blue-800';
    case Status.SCHEDULED:
        return 'bg-purple-100 text-purple-800';
    case Status.COMPLETED:
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const ReportCard = ({ report }) => (
    <div className="bg-surface rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-xl flex flex-col">
        {report.photoUrl && <img src={report.photoUrl} alt="Waste report" className="w-full h-48 object-cover" />}
        <div className="p-4 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                    {report.status}
                </span>
                <span className="text-xs text-gray-500">{new Date(report.createdAt).toLocaleDateString()}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">{report.type}</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2">{report.location}</p>
            <p className="text-sm text-gray-500 mb-4 flex-grow">{report.description}</p>
            
            <div className="text-xs text-gray-500 border-t pt-3 mt-auto">
                <p>Reported by: <span className="font-medium text-gray-700">{report.reportedBy}</span></p>
                <p>Assigned to: <span className="font-medium text-gray-700">{report.assignee || 'Unassigned'}</span></p>
            </div>

             <div className="mt-4 flex gap-2">
                <select aria-label={`Assign team for report ${report.id}`} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Assign Team...</option>
                    <option value="Team A">Team A</option>
                    <option value="Team B">Team B</option>
                    <option value="Team C">Team C</option>
                </select>
                <button className="px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-green-700 transition-colors text-sm whitespace-nowrap">
                    Update
                </button>
            </div>
        </div>
    </div>
);

const ReportList = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Reports</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockReports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ReportList;
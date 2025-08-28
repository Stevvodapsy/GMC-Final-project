import React, { useState, useEffect } from 'react';

const ReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports data from the API
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            <p>Location: {report.location}</p>
            <p>Description: {report.description}</p>
            <p>Status: {report.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
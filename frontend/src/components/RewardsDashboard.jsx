import React, { useState, useEffect } from 'react';

const RewardsDashboard = () => {
  const [rewards, setRewards] = useState({ points: 0, history: [] });

  useEffect(() => {
    // Fetch rewards data from the API
  }, []);

  return (
    <div>
      <h2>Rewards Dashboard</h2>
      <h3>Total Points: {rewards.points}</h3>
      <h4>History</h4>
      <ul>
        {rewards.history.map((item, index) => (
          <li key={index}>
            {item.action}: {item.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsDashboard;
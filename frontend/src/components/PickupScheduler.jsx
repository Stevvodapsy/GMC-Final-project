import React, { useState } from 'react';

const PickupScheduler = () => {
  const [date, setDate] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(date);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="datetime-local"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <input type="submit" value="Schedule Pickup" />
    </form>
  );
};

export default PickupScheduler;
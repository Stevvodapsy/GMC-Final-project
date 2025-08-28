import React, { useState } from 'react';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    photo: '',
  });

  const { location, description, photo } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={location}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Description"
          name="description"
          value={description}
          onChange={onChange}
          required
        ></textarea>
      </div>
      <div>
        <input
          type="file"
          name="photo"
          value={photo}
          onChange={onChange}
          required
        />
      </div>
      <input type="submit" value="Submit Report" />
    </form>
  );
};

export default ReportForm;
import React, { useState } from "react";
import "./DriveApplications.css";

function DriveApplications() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your logic here to submit the data to a server or database.
    console.log(formData);
  };

  return (
    <div className="drive-applications">
      <h1>Apply For Seminar</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="event">Event:</label>
          <select
            id="event"
            name="event"
            value={formData.event}
            onChange={handleChange}
            required
          >
            <option value="">Select Event</option>
            <option value="Data Science">Data Science</option>
            <option value="AI & ML">
              AI & ML
            </option>
            <option value="Cyber Security">
             Cyber Security
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DriveApplications;

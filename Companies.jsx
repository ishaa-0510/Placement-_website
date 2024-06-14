// src/components/Companies/Companies.jsx
import React from 'react';
import './Companies.css';

const companiesData = [
  {
    name: 'TCS',
    seminars: [
      { topic: 'AI in Business', schedule: '2024-07-01 10:00 AM' },
      { topic: 'Blockchain Technology', schedule: '2024-07-02 02:00 PM' }
    ]
  },
  {
    name: 'Wipro',
    seminars: [
      { topic: 'Cyber Security', schedule: '2024-07-03 11:00 AM' },
      { topic: 'Cloud Computing', schedule: '2024-07-04 01:00 PM' }
    ]
  },
  {
    name: 'Infosys',
    seminars: [
      { topic: 'Data Analytics', schedule: '2024-07-05 09:00 AM' },
      { topic: 'Machine Learning', schedule: '2024-07-06 03:00 PM' }
    ]
  }
];

const Companies = () => {
  return (
    <div className="companies">
      {companiesData.map((company, index) => (
        <div key={index} className="company-card">
          <h2>{company.name}</h2>
          <ul>
            {company.seminars.map((seminar, seminarIndex) => (
              <li key={seminarIndex}>
                <strong>{seminar.topic}:</strong> {seminar.schedule}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Companies;

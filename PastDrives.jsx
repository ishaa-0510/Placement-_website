// src/components/PastDrives.jsx

import React from 'react';
import './PastDrives.css';
import tcs from '../../assets/tcs.png';
import wipro from '../../assets/wipro.png';
import infosys from '../../assets/infosys.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const PastDrives = () => {
  const drives = [
    {
      company: "Tata Consultancy Services",
      logo: tcs,
      icon: program_icon_1,
      jobDescription: "Software Developer role requiring knowledge in Java and SQL.",
      docLink: "https://cdn4.tcsion.com/per/g04/pub/1678/iONAppsHub/instance/1/product/microsite_data/ZTCSYGFRV/microsite_1597696262956/pdf/TCSiONDocumentManager.pdf?version=-24316404"
    },
    
    {
      company: "Wipro",
      logo: wipro,
      icon: program_icon_2,
      jobDescription: "IT Consultant with expertise in cloud solutions and cybersecurity.",
      docLink: "https://arkajainuniversity.ac.in/wp-content/uploads/2021/08/AJU_TP_UG_0004_21-22_WIPRO_24-08-2021.pdf"
    },
    {
      company: "Infosys",
      logo: infosys,
      icon: program_icon_3,
      jobDescription: "Data Analyst position focused on big data and machine learning.",
      docLink: "https://www.infosys.com/cn/careers/Documents/SAP%20Technical%20.pdf"
    }
  ];

  return (
    <div className="past-drives-container">
      {drives.map((drive, index) => (
        <div className="past-drive" key={index}>
          <img src={drive.logo} alt={`${drive.company} logo`} className="company-logo" />
          <div className="caption">
            <img src={drive.icon} alt="Program icon" className="program-icon" />
            <p className="company-name">{drive.company}</p>
            <p className="job-description">{drive.jobDescription}</p>
            <a href={drive.docLink} target="_blank" rel="noopener noreferrer" className="doc-link">Job Description</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastDrives;

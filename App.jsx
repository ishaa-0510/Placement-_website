import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

import PastDrives from './components/PastDrives/PastDrives';
import Companies from './components/Companies/Companies';
import DriveApplications from './components/DriveApplications/DriveApplications';
import Contact from './components/Contact/Contact'

const App = () => {
  const [playState, setPlayState] = useState(false);

  // Simulate an error on line 8
  const handleClick = () => {
    // Assuming there's an error in this function
    console.log('Button clicked');
    setPlayState(!playState);
  };

  return (
    <div>
      <Navbar />
      
      
      <div className="container">
        <PastDrives />
        <Companies />
        <DriveApplications />
        <Contact />
        
        
        <button onClick={handleClick}>Toggle Play State</button>
      </div>
    </div>
  );
}

export default App;

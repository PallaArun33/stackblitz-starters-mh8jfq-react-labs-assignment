import React, { useState, useRef } from 'react';
import CountdownTimer from './components/CountdownTimer';
import SelectReset from './components/SelectReset';

import './App.css';

const options = [10, 20, 30, 40, 50];

function App() {
  const [selectedTime, setSelectedTime] = useState(10);
  const [resetClicked, setResetClicked] = useState(false);
  const countdownRef = useRef(null);
   

  const onClickReset = () => {
    console.log('Resetting to', selectedTime, 'seconds');
    // Set resetClicked to true to start the countdown timer
    
    setResetClicked(true);
    if (countdownRef.current) {
      countdownRef.current.onStop(); // Pause the timer
      countdownRef.current.onStart(); // Restart the timer
    }
  };

  const onChangeSelect = (e) => {
    setSelectedTime(parseInt(e.target.value));
    // Set resetClicked to false to prevent automatic countdown start
    setResetClicked(false);
  };

  return (
    <div className="bg-container">
      <div className="card">
        <h1 className="react-labs" >
          <a
            href="https://www.reactlabs.ai/"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            React Labs
          </a>
          <br />
          ReactJS Assignment
        </h1>
        <div className="timer-wrapper time-container">
          <CountdownTimer
            countdownRef={countdownRef}
            selectedTime={selectedTime}
            
            resetClicked={resetClicked}
          />
          <SelectReset
            options={options}
            selectedTime={selectedTime}
            onChangeSelect={onChangeSelect}
            onClickReset={onClickReset}
          />
          
        </div>
      </div>
    </div>
  );
}

export default App;

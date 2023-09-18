import React from 'react';
import "./index.css"
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
const CountdownTimer = ({ selectedTime, countdownRef, resetClicked }) => {
  const renderTime = ({ remainingTime }) => {
    if (remainingTime <= 0) {
      return <div className="timer too-late">Too late...</div>;
    }

    return (
      <div className="timer timer-container">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  return (
    <div className="round-circle">
      {resetClicked && (
        <CountdownCircleTimer
          isPlaying={resetClicked}
          duration={selectedTime}
          colors={['#', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}
      {!resetClicked && (
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}
    </div>
  );
};

export default CountdownTimer;

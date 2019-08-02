import React from 'react';
import '../stylesheets/Timer.css'

const Timer = ({ timer }) => {
  if (timer === null) return null;

  return (
    <g className="timer" >
      <rect />
      <text>{timer}</text>
    </g>
  );
  
};

export default Timer;
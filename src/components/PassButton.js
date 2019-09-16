import React from 'react';
import '../stylesheets/PassButton.css';

const PassButton = ({show, text, pass}) => {
  const style = {
    opacity: show ? 1 : 0,
    cursor: show ? 'pointer' : 'default'
  };

  return (
    <g
      className="pass-button"
      style={style}
      onClick={e => {
        e.preventDefault();
        pass();
      }}
    >
      <rect />
      <text>{text}</text>
    </g>
  );
};

export default PassButton;

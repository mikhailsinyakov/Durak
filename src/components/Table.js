import React from 'react';
import '../stylesheets/Table.css';

const Table = ({field}) => {
  const style = {
    cx: field.width / 2 + 'px',
    cy: field.height / 2 + 'px',
    r: (field.width - field.playerSpace * 2) / 2 + 'px'
  };
  return <circle className="table" style={style} />;
};

export default Table;

import React, { PropTypes } from 'react';

const colorCell = (cells) => {
  if (cells) {
    if (cells.ship && cells.attacked) return 'red';
    if (cells.attacked && !cells.ship) return 'gray';
  }
  return 'white';
};

const Cell = ({ onClick, cells, id }) => {
  const color = colorCell(cells);
  return (
    <div
      className="box"
      onClick={() => onClick(id)}
      style={{
        backgroundColor: color,
        border: '1px solid',
        height: '15px',
        width: '15px',
        textAlign: 'center',
        display:'inline-block',
      }}
    >
    </div>
  );
};



export default Cell;

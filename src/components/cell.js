import React, { PropTypes } from 'react';

const colorCell = (cells) => {
  if (cells) {
    if (cells.ship && cells.attacked) return 'red';
    // if (cells.ship && !cells.attacked) return 'black';
    if (cells.attacked && !cells.ship) return 'gray';
  }
  return 'white';
};

const Cell = ({ onClick, cells, id }) => {
  const color = colorCell(cells);
  return (
    <div
      className="box"
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
      id={id}
    >
    </div>
  );
};



export default Cell;

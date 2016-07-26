import React, { PropTypes } from 'react';

const Cell = ({ onClick, cells, id }) => {
  let color = '';
  console.log(cells);
  if (cells) {

    if (cells.ship && cells.attacked) color = 'red';
    else if (cells.ship && !cells.attacked) color = 'black';
    else if (cells.attacked && !cells.ship) color = 'gray'
    else color = 'white';
  }
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
)};

Cell.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    hit: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cell;

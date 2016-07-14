import React, { PropTypes } from 'react';

const Cell = ({ onClick, cells, id }) => {
  let color;
  for (var i = 0; i < cells.length; i++) {

    if (cells[i].id===id) {color = true}
  }
  return (

  <div
    className="box"
    onClick={onClick}
    style={{
      backgroundColor: color ? 'red' : 'white',
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

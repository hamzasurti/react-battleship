import React, { PropTypes } from 'react';

const Cell = ({ onClick, cells, id }) => {
  return (

  <div
    className="box"
    onClick={onClick}
    style={{
      backgroundColor: cells ? 'red' : 'white',
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

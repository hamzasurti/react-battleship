import React, { PropTypes } from 'react';

const Cell = ({ onClick, hit }) => (

  <div
    className="box"
    onClick={onClick}
    style={{
      backgroundColor: hit ? 'red' : 'white',
    }}
  >
  </div>
);

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  hit: PropTypes.bool.isRequired,
};

export default Cell;

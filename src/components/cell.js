import React, { PropTypes } from 'react';

const Cell = ({ onClick, hit, id }) => (

  <div
    className="box"
    onClick={onClick}
    style={{
      backgroundColor: hit ? 'red' : 'white',
    }}
    id={id}
  >
  </div>
);

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  hit: PropTypes.bool.isRequired,
};

export default Cell;

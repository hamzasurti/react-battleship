import React, { PropTypes } from 'react';

const Ships = ({cells, onCellClick}) => {
  return (
    <button onClick={onCellClick} >ShipMe</button>
  )
}

export default Ships;

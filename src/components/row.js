import React, { PropTypes } from 'react'
import Cell from './Cell';

const Row = ({ id, cells, onClick }) => {
  console.log('cells', cells);
  const row = [];
  for (let i = 0; i < 10; i++) {
    row.push(<Cell key={id.concat(i+1)}
    onClick={onClick}
    id={id.concat(i+1)}

    />);
  }
  return (
    <div>
    {row}
    </div>
  );
};

Cell.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    hit: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,

}

export default Row;

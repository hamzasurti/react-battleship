import React, { PropTypes } from 'react';
import Cell from './cell';

const Row = ({ id, cells, onClick }) => {
  const row = [];
  for (let i = 0; i < 10; i++) {
    const cellKey = id.concat(i + 1);
    row.push(<Cell
      key={cellKey}
      onClick={onClick}
      id={cellKey}
      cells={cells[cellKey] ? cells[cellKey] : undefined}
    />);
  }
  return (
    <div>
    {row}
    </div>
  );
};

Cell.propTypes = {
  id: PropTypes.string.isRequired,
  cells: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    hit: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Row;

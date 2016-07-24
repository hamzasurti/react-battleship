import React, { PropTypes } from 'react';
import Cell from './cell';

const Row = ({ id, cells, onClick }) => {
  const row = [];
  for (let i = 0; i < 10; i++) {
    row.push(<Cell
      key={id.concat(i + 1)}
      onClick={onClick}
      id={id.concat(i + 1)}
      cells={cells[id.concat(i + 1)] ? cells[id.concat(i + 1)] : undefined}
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

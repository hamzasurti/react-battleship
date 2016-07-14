import React, { PropTypes } from 'react';
import Row from './Row';

const letterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const Battleship = ({ cells, onCellClick }) => {
  const columns = [];
  for (let i = 0; i < 10; i++) {
    columns.push(<Row key={letterArr[i]} id={letterArr[i]}
      cells={cells}
      onClick={(e) => onCellClick(e)}
      />);
  }
  return (
    <div className="board" >
    {columns}
    </div>
  );
};

Battleship.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    hit: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onCellClick: PropTypes.func.isRequired,

}

export default Battleship;

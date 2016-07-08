import React from 'react';
import Row from './../components/row';

const Battleship = () => {
  const columns = [];
  for (let i = 0; i < 10; i++) {
    columns.push(<Row />);
  }
  return (
    <div className="board" >
    {columns}
    </div>
  );
};

export default Battleship;

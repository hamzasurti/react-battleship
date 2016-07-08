import React from 'react';
import Cell from './cell';

const Row = () => {
  const row = [];
  for (let i = 0; i < 10; i++) {
    row.push(<Cell />);
  }
  return (
    <div>
    {row}
    </div>
  );
};

export default Row;

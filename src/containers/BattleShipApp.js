import React, { Component } from 'react';
import Row from './../components/row'

export default class Battleship extends Component {
  render() {
    const columns = [];
    for (let i = 0; i < 10; i++) {
      columns.push(<Row />);
    }
    return (
      <div className="board" >
      {columns}
      </div>
    );
  }
}

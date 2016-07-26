import React from 'react';
import BattleShipApp from '../containers/BattleShipApp';
import AvailableShips from '../containers/AvailableShips';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';


const App = () => (
  <div>
    <h1>Battleship</h1>
    <BattleShipApp />
    <AvailableShips />
    <AddTodo />
    <VisibleTodoList />
    <Footer />

  </div>
);

// <BattleShipApp />
export default App;

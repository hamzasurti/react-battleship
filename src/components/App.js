import React from 'react';
import BattleShipApp from '../containers/BattleShipApp';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer'


const App = () => (
  <div>
    <h1>Battleship</h1>
    <BattleShipApp />
    <BattleShipApp />
    <AddTodo />
    <VisibleTodoList />
    <Footer />

  </div>
);

export default App;

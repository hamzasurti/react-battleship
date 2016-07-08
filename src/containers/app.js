import React from 'react';
import Battleship from './BattleShipApp';
import AddTodo from './AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer'


const App = () => (
  <div>
    <h1>Battleship</h1>
    <Battleship />
    <Battleship />
    <AddTodo />
    <VisibleTodoList />
    <Footer />

  </div>
);

export default App;

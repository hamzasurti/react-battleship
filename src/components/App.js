import React from 'react';
import BattleShipApp from '../containers/BattleShipApp';
import AvailableShips from '../containers/AvailableShips';
// import EnemyBoard from '../containers/EnemyBoard';



const App = () => (
  <div>
    <h1>Battleship</h1>
    <BattleShipApp />
    <AvailableShips />
  </div>
);

// <EnemyBoard />
export default App;

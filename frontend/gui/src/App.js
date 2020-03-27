import React from 'react';
import './App.css';
import Applist from './components/list';
import Game from './components/tic_tac_toe'

function App() {
  return (
    <div className="App">
      <Applist />
      <Game name="tic-tac-toe" />
    </div>
  );
}

export default App;

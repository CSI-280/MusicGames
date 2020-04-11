import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Applist from './components/list';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import GameHub from './Pages/games/GameHub';
import GameNav from './Pages/games/gameNav';
import Hub from './Pages/games/GameHub';
import TicTacToe from './components/tic_tac_toe';
import GuessSong from './Pages/games/GuessSong';
import GuessArtist from './Pages/games/GuessArtist';
import Connect4 from './Pages/games/Connect4';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path = "/" component={Home} />
        <Route path = "/GameHub" component={GameHub} />
        <Route path="/About" component={About} />
        <Route path="/GameHub/TicTacToe" component={TicTacToe} />
        <Route path="/GameHub/GuessSong" component={GuessSong} />
        <Route exact path = "/GameHub/GuessArtist" component={GuessArtist} />
        <Route path="/GameHub/Connect4" component={Connect4} />
      </div>
    </Router>

  );
}

export default App;

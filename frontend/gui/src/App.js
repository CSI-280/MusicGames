import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import GameHub from './Pages/games/GameHub';
import GameNav from './Pages/games/gameNav';
import TicTacToe from './components/tic_tac_toe';
import GuessSong from './Pages/games/GuessSong';
import GuessArtist from './Pages/games/GuessArtist';
import Connect4 from './Pages/games/Connect4';
import Profile from './components/profile';
import SpotifyClient from './SpotifyClient';
import Points from './components/Points';

function App() {
  SpotifyClient.GetAccessToken(); 
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
        <Route path="/Profile" component={Profile} />
        <Route path="/Points" component={Points} />
      </div>
    </Router>

  );
}

export default App;

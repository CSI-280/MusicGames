import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hub from '.';
import TicTacToe from './TicTacToe';
import GuessSong from './GuessSong';
import GuessArtist from './GuessArtist';
import Connect4 from './Connect4';


function Games() {
    <Router>
        <gameNav />
          <Route exact path = "/" component={Hub} />
          <Route path="/TicTacToe" component={TicTacToe} />
          <Route path="/GuessSong" component={GuessSong} />
          <Route exact path = "/GuessArtist" component={GuessArtist} />
          <Route path="/Connect4" component={Connect4} />
    </Router>

    return (
        <div>
            <h2>Game Hub</h2>
            <gameNav></gameNav>
        </div>
    )
}
export default Games
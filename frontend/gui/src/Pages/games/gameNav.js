import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './gameNav.css'
import Hub from './GameHub';
import TicTacToe from './../../components/tic_tac_toe';
import GuessSong from './GuessSong';
import GuessArtist from './GuessArtist';
import Connect4 from './Connect4';
import './gameNav.css'


function GameNav() {
    return (
        <Router>
            <div className="games-pane side-margin">
                <Link className="select-game bottom-margin--3" to="/TicTacToe">Tic Tac Toe</Link>
                <Link className="select-game bottom-margin--3" to="/GuessSong">Guess the Song</Link>
                <Link className="select-game bottom-margin--3" to="/GuessArtist">Guess the Artist</Link>
                <Link className="select-game bottom-margin--3" to="/Connect4">Connect 4</Link>
            </div>
            <Route exact path = "/" component={Hub} />
            <Route path="/TicTacToe" component={TicTacToe} />
            <Route path="/GuessSong" component={GuessSong} />
            <Route exact path = "/GuessArtist" component={GuessArtist} />
            <Route path="/Connect4" component={Connect4} />
        </Router>

    )
}

export default GameNav;

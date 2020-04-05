import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Hub from './GameHub';
import TicTacToe from './../../components/tic_tac_toe';
import GuessSong from './GuessSong';
import GuessArtist from './GuessArtist';
import Connect4 from './Connect4';


function GameNav() {
    return (
        <Router>
            <Route exact path = "/" component={Hub} />
            <Route path="/TicTacToe" component={TicTacToe} />
            <Route path="/GuessSong" component={GuessSong} />
            <Route exact path = "/GuessArtist" component={GuessArtist} />
            <Route path="/Connect4" component={Connect4} />
            <header style={tmpStyle}>
                <p><Link to="/GameHub">Game Hub</Link></p>
                <p>|</p>
                <p><Link to="/TicTacToe">Tic Tac Toe</Link></p>
                <p>|</p>
                <p><Link to="/GuessSong">Guess the Song</Link></p>
                <p>|</p>
                <p><Link to="/GuessArtist">Guess the Artist</Link></p>
                <p>|</p>
                <p><Link to="/Connect4">Connect 4</Link></p>
            </header>
        </Router>
        

    )
}

const tmpStyle = {
    display: 'inline-block'
}

export default GameNav;
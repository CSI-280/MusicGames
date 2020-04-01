import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Hub from './GameHub';
import TicTacToe from './../../components/tic_tac_toe';
import GuessSong from './GuessSong';
import GuessArtist from './GuessArtist';
import Connect4 from './Connect4';
import './gameNav.css'


function GameNav() {
    return (
        <Router>
            <Route exact path = "/" component={Hub} />
            <Route path="/TicTacToe" component={TicTacToe} />
            <Route path="/GuessSong" component={GuessSong} />
            <Route exact path = "/GuessArtist" component={GuessArtist} />
            <Route path="/Connect4" component={Connect4} />
            <header>
                <table className="games-pane">
                    <thead>
                        <tr>
                            <th colSpan="2"><p><Link to="/">Shall we play a game?</Link></p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p><Link to="/TicTacToe">Tic Tac Toe</Link></p></td>
                            <td><p><Link to="/GuessSong">Guess the Song</Link></p></td>
                        </tr>
                        <tr>
                            <td><p><Link to="/GuessArtist">Guess the Artist</Link></p></td>
                            <td><p><Link to="/Connect4">Connect 4</Link></p></td>
                        </tr>
                    </tbody>
                </table>
            </header>
        </Router>


    )
}

export default GameNav;

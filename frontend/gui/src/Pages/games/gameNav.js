import React from 'react';
import { Link } from 'react-router-dom';
import './gameNav.css'


function GameNav() {
    return (
            <header>
                <table className="games-pane">
                    <thead>
                        <tr>
                            <th colSpan="2"><Link to="/GameHub">Shall we play a game?</Link></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="select-game"><Link to="/GameHub/TicTacToe">Tic Tac Toe</Link></td>
                        </tr>
                        <tr>
                            <td className="select-game"><Link to="/GameHub/GuessSong">Guess the Song</Link></td>
                        </tr>
                        <tr>
                            <td className="select-game"><Link to="/GameHub/GuessArtist">Guess the Artist</Link></td>
                        </tr>
                        <tr>
                            <td className="select-game"><Link to="/GameHub/Connect4">Connect 4</Link></td>
                        </tr>
                    </tbody>
                </table>
            </header>
    )
}

export default GameNav;

import React from 'react';
import { Link } from 'react-router-dom';
import './gameNav.css'


function GameNav() {
    return (
            <div className="games-pane side-margin">
                <Link className="select-game bottom-margin--3" to="/GameHub/TicTacToe">Tic Tac Toe</Link>
                <Link className="select-game bottom-margin--3" to="/GameHub/GuessSong">Guess the Song</Link>
                <Link className="select-game bottom-margin--3" to="/GameHub/GuessArtist">Guess the Artist</Link>
                <Link className="select-game bottom-margin--3" to="/GameHub/Connect4">Connect 4</Link>
            </div>


    )
}

export default GameNav;

import React from 'react';
import GameNav from './gameNav';
import Hub from './GameHub';
import '../../index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function Games() {
    return (
        <div class="game-body top-margin--1">
            <GameNav />
        </div>
    )
}
export default Games;

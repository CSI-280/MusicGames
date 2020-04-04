import React from 'react';
import Placeholder from './images/playerPlaceholder.png';
import { Link } from 'react-router-dom';
import Player from './player/playler';


function Navbar() {
    return (
        <header id="page-header-navbar" class="red">
            <Player />
            <h1 class="navbar-title font-weight--1" >Extended Play</h1>
            <div class="navbar-nav-links font-weight--2">
                <p><Link to="/">Home</Link></p>
                <p>|</p>
                <p>Points</p>
                <p>|</p>
                <p><Link to="/gamehub">Games</Link></p>
                <p>|</p>
                <p>Login</p>
                <p>|</p>
                <p><Link to="/about">About</Link></p>
            </div>
        </header>
    )
}

const imgStyle = {
    height: '5vw',
    width: 'auto',
    float: 'left',
    display: 'inline-block',
}


export default Navbar
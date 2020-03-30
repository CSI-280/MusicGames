import React from 'react';
import Placeholder from './images/playerPlaceholder.png';
// import { Link } from 'react-router-dom'; for react router (when we impliment it)

function Navbar() {
    return (
        <header id="page-header-navbar" class="red">
            <img id="logo-header" style={imgStyle} src={Placeholder} />
            <h1 class="navbar-title font-weight--1" >Music Games</h1>
            <div class="navbar-nav-links font-weight--2">
                <p>Home</p>
                <p>|</p>
                <p>Points</p>
                <p>|</p>
                <p>Games</p>
                <p>|</p>
                <p>Login</p>
                <p>|</p>
                <p> About </p>
            </div>
            {/* <div style={divStyle}> This can be used whenb we impliment react Router
                <Link style={linkStyle} to="/">Home</Link>
                <span> | </span>
                <Link style={linkStyle} to="/points">Points</Link>
                <span> | </span>
                <Link style={linkStyle} to="/games">Games</Link>
                <span> | </span>
                <Link style={linkStyle} to="/login">Login</Link>
                <span> | </span>
                <Link style={linkStyle} to="/about">About</Link>
            </div> */}
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
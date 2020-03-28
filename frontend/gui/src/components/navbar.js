import React from 'react';
import Placeholder from './images/playerPlaceholder.png';
// import { Link } from 'react-router-dom'; for react router (when we impliment it)

function Navbar() {
    return (
        <header style={headerStyle}>
            <img style={imgStyle} src={Placeholder} />
            <h1 style={titleStyle}>Music Games</h1>
            <div style={divStyle}>
                <p style={linkStyle}>Home</p>
                <span> | </span>
                <p style={linkStyle}>Points</p>
                <span> | </span>
                <p style={linkStyle}>Games</p>
                <span> | </span>
                <p style={linkStyle}>Login</p>
                <span> | </span>
                <p style={linkStyle}> About </p>
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

const headerStyle = {
    background: '#ff044b',
    color: 'black',
    textAlign: 'center',
    padding: '10px',
    fontSize: '1.5vw',
}

const imgStyle = {
    height: '5vw',
    width: 'auto',
    float: 'left',
    display: 'inline-block',
}

const titleStyle = {
    fontSize: '2vw',
    display: 'inline-block',
}
const divStyle = {
    textAlign: 'right',
    display: 'inline-block',
    float: 'right',
    paddingRight: '1vw',
    width: '33.33333%'
}

const linkStyle = {
    display: 'inline-block',
    textDecoration: 'none',
    margin: ''
}

export default Navbar
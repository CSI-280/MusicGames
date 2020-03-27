import React from 'react'

function Navbar() {
    return (
        <header style={headerStyle}>
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
        </header>
    )
}

const headerStyle = {
    background: '#ff044b',
    color: 'black',
    textAlign: 'center',
    padding: '10px',
    fontSize: '48px',
}

const titleStyle = {
    fontSize: '72px',
    display: 'inline-block',
    textAlign: 'center'
}
const divStyle = {
    textAlign: 'right',
    display: 'inline-block',
    float: 'right'
}

const linkStyle = {
    display: 'inline-block',
    textDecoration: 'none',
    margin: ''
}

export default Navbar
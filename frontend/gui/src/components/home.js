import React from 'react';
import logo from './images/EPlogo.png';
import people from './images/peopleHavingFun.jpg';
import esportGamer from './images/esportGamer.jpg';

function Home () { 
    
    return (
        <React.Fragment>
            <div style={leftDivStyle}>
                <img style={logoStyle} src={logo} alt="Extended Play Logo"></img>
                <h1 style={textStyle}>Welcome to Extended Play</h1>
                <h2 style={textStyle}>Play Games</h2>
                <h2 style={textStyle}>Earn Points</h2>
                <h2 style={textStyle}>Spend</h2>
                <p style={textStyle}>Make sure you login to save your points</p>
            </div>
            <div style={rightDivStyle}>
                <img style={rightImgStyle} src={people}></img>
                <img style={rightImgStyle} src={esportGamer}></img>
            </div>
        </React.Fragment>

    )
}
const logoStyle = {
    width: '15vw',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
}
const textStyle = {
    textAlign: 'center'
}

const leftDivStyle = {
    maxHeight: '100%',
    float: 'left',
    paddingLeft: '20vw',
    paddingTop: '3vw',
}

const rightDivStyle = {
    float: 'right',
    paddingRight: '20vw',
    paddingTop: '3vw',
}
const rightImgStyle = {
    width: '20vw',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1vw',
}

export default Home;
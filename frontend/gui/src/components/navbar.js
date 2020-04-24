import React from 'react';
import { Link } from 'react-router-dom';
import Player from './player/playler';


class Navbar extends React.Component {

    userInfo = {
        fullName: "",
        firstName: "",
        lastName: "",
        email: "",
        id: "",
        profilePic: "",
        signedIn: false,
        points: 0
    }
    
    
    render() {        
       let user = this.userInfo;
       
       // You can use this.props.location.state.user.VARIABLE to access the users data on any page.
       // Its best to make your component a class (this is a class "class name extends React.Component")
        return (
        <header id="page-header-navbar" class="red">
            <Player />
            <Link to="/"><h1 class="navbar-title font-weight--1">Extended Play</h1></Link>
            <div class="navbar-nav-links font-weight--2">
                <p><Link to={{pathname:"/", state: {user}}}>Home</Link></p>
                <p>|</p>
                <p>Points</p>
                <p>|</p>
                <p><Link to={{pathname:"/gamehub", state: {user}}}>Games</Link></p>
                <p>|</p>
                <p><Link to={{pathname:"/profile", state: {user}}}>Profile</Link></p>
                <p>|</p>
                <p><Link to={{pathname:"/about", state: {user}}}>About</Link></p>
            </div>
        </header>
    )}
}




export default Navbar

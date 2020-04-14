import React from 'react';
import GoogleLogin from 'react-google-login';


class Profile extends React.Component {
    

    responseGoogle = (response) => {
        console.log(response);

        //populating userInfo from navbar :)
        this.props.location.state.user.fullName = response.profileObj.name;
        this.props.location.state.user.firstName = response.profileObj.givenName;
        this.props.location.state.user.lastName = response.profileObj.familyName;
        this.props.location.state.user.email = response.profileObj.email;
        this.props.location.state.user.id = response.profileObj.googleId;
        this.props.location.state.user.profilePic = response.profileObj.imageUrl;
        this.props.location.state.user.signedIn = true;

        //make the page re-render
        this.forceUpdate();
    }
        
        render() {
            let content;
            var loggedIn = this.props.location.state.user.signedIn;
            if (loggedIn) {
                content =
                    <div style={divStyle}>
                        <img style={imgStyle} src={this.props.location.state.user.profilePic}></img>
                        <p style={textStyle}>Name: {this.props.location.state.user.firstName}</p>
                        <p style={textStyle}>Email: {this.props.location.state.user.email}</p>
                        <p style={textStyle}>Points: {this.props.location.state.user.points}</p>
						
                        //DEV CONTENT PLEASE REMOVE AT LAUNCH
						<div id="TESTINGBUTTON">
							<button onclick={"TESTFUNCTIONPLUS()"}>TEST BUTTON ADD 1 POINT</button>
							<button onclick={"TESTFUNCTIONMINUS()"}>TEST BUTTON SUBTRACT 1 POINT</button>
							<button onclick={"TESTFUNCTIONZERO()"}>TEST BUTTON RESET POINTS TO 0</button>
						</div>
                    </div>
            }
            else {
                content =
                    <GoogleLogin
                    clientId="28472414383-unhi5oj95o9l01b0tj379th23g7diu1k.apps.googleusercontent.com"
                    render={renderProps => (
                        <div id="loginBtnDiv">
                            <button className="loginBtn" onClick={renderProps.onClick} disabled={renderProps.disabled} style={{cursor: 'pointer'}}>Login</button>
                        </div>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    isSignedIn={true}
                
                    cookiePolicy={'single_host_origin'}
                    />
            }

        return (   
            <React.Fragment>
                {content}
            </React.Fragment>
        );
    }
}
const divStyle = {
    paddingTop: '4vw',
    textAlign: 'center'
}
const imgStyle = {
    borderRadius: '100px',
    width: '10%',
    height: 'auto'
}
const textStyle = {
    fontSize: '1.3vw'
}

function TESTFUNCTIONPLUS() {
	this.props.location.state.user.points += 1;
	this.forceUpdate();
}

function TESTFUNCTIONMINUS() {
	this.props.location.state.user.points += 1;
	this.forceUpdate();
}

function TESTFUNCTIONZERO() {
	this.props.location.state.user.points = 0;
	this.forceUpdate();
}

export default Profile;
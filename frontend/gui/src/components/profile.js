import React from 'react';
import GoogleLogin from 'react-google-login';
import userClient from '../userClient';

class Profile extends React.Component {
    
    responseGoogle = (response) => {

        //populating userInfo from navbar :)
        this.props.location.state.user.fullName = response.profileObj.name;
        this.props.location.state.user.firstName = response.profileObj.givenName;
        this.props.location.state.user.lastName = response.profileObj.familyName;
        this.props.location.state.user.email = response.profileObj.email;
        this.props.location.state.user.id = response.profileObj.googleId;
        this.props.location.state.user.profilePic = response.profileObj.imageUrl;
        this.props.location.state.user.signedIn = true;


        //adding data to user client :)
        userClient.login((response.profileObj.googleId).toString());
        userClient.setProfilePic(response.profileObj.imageUrl);
        userClient.setName(response.profileObj.givenName, response.profileObj.familyName);
        userClient.loged_in = true;


        //make the page re-render
        this.forceUpdate();
    }

//The purpose of the following functions is to adjust the User's points on the fly,
//Allowing developer team to test out the points system.

     TESTFUNCTIONPLUS() {
        userClient.setPointsOffset(1);
        console.log(userClient.getPoints())
        this.forceUpdate();
    }

     TESTFUNCTIONMINUS() {
        userClient.setPointsOffset(-1);
        this.forceUpdate();
    }

     TESTFUNCTIONZERO() {
        userClient.setPoints(0);
        this.forceUpdate();
    }
        
        render() {
            let content;
            var loggedIn = this.props.location.state.user.signedIn;
            if (loggedIn) {
                content =
                    <div style={divStyle}>
                        <img style={imgStyle} src={this.props.location.state.user.profilePic} alt=""></img >
                        <p style={textStyle}>Name: {this.props.location.state.user.firstName}</p>
                        <p style={textStyle}>Email: {this.props.location.state.user.email}</p>
                        <p style={textStyle}>Points: {this.props.location.state.user.points}</p>
						
                        //DEV CONTENT PLEASE REMOVE AT LAUNCH
						//<div id="TESTINGBUTTON">
						//	<button onclick={"TESTFUNCTIONPLUS()"}>TEST BUTTON ADD 1 POINT</button>
						//	<button onclick={"TESTFUNCTIONMINUS()"}>TEST BUTTON SUBTRACT 1 POINT</button>
						//	<button onclick={"TESTFUNCTIONZERO()"}>TEST BUTTON RESET POINTS TO 0</button>
						//</div>
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


export default Profile;
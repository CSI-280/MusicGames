import React from 'react';
import GoogleLogin from 'react-google-login';


class Profile extends React.Component {
    

    responseGoogle = (response) => {
        //console.log(response);

        //populating userInfo from navbar :)
        this.props.location.state.user.fullName = response.profileObj.name;
        this.props.location.state.user.firstName = response.profileObj.givenName;
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
                    <React.Fragment>
                        <img src={this.props.location.state.user.profilePic}></img>
                        <h3>Name: {this.props.location.state.user.firstName}</h3>
                        <h3>Email: {this.props.location.state.user.email}</h3>
                        <h3>Points: {this.props.location.state.user.points}</h3>
                        
                    </React.Fragment>
            }
            else {
                content =
                    <GoogleLogin
                    clientId="28472414383-unhi5oj95o9l01b0tj379th23g7diu1k.apps.googleusercontent.com"
                    render={renderProps => (
                        <h2 onClick={renderProps.onClick} disabled={renderProps.disabled} style={{cursor: 'pointer'}}>Login</h2>
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

export default Profile;
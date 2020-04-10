import React from 'react';
import GoogleLogin from 'react-google-login';


class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            firstName: "",
            email: "",
            id: "",
            profilePic: "",
            signedIn: false
        };
    }

    responseGoogle = (response) => {
        //console.log(response);

        this.setState({
            fullName: response.profileObj.name,
            firstName: response.profileObj.givenName,
            email: response.profileObj.email,
            id: response.profileObj.googleId,
            profilePic: response.profileObj.imageUrl,
            signedIn: true,
        });

        //this.forceUpdate();
    }
        
        render() {
            let content;
            var loggedIn = this.state.signedIn;
            if (!loggedIn) {
                content =
                    <GoogleLogin
                    clientId="28472414383-unhi5oj95o9l01b0tj379th23g7diu1k.apps.googleusercontent.com"
                    render={renderProps => (
                        <p onClick={renderProps.onClick} disabled={renderProps.disabled} style={{cursor: 'pointer'}}>Login</p>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    isSignedIn={true}
                
                    cookiePolicy={'single_host_origin'}
                    />
            }
            else {
                content =
                    <React.Fragment>
                        <p>{this.state.firstName}</p>
                    </React.Fragment>
            }

        return (   
            <React.Fragment>
                {content}
            </React.Fragment>
        );
    }
}

export default Profile;
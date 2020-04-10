import React from 'react';
import GoogleLogin from 'react-google-login';


class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            id: "",
            signedIn: false
        };
    }

    responseGoogle = (response) => {
        console.log(response);
        console.log("here");

        this.setState({
            name: response.Qt.Ad,
            email: response.Qt.zu,
            id: response.googleId,
            signedIn: true,
        });
        console.log("making True");
        this.signedIn = true; 
        console.log(this.state.signedIn);

        
        console.log(this.signedIn);

        console.log(this.state.id);

        console.log(this.state.name);

        console.log(this.state.email);

    }
        
        render() {
            let content;
            console.log(this.state.signedIn);
            if (!this.state.signedIn) {
                console.log("look at me");
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
            else {
                console.log("you prop dont see me");
                content =
                    <React.Fragment>
                        <h3>Name: {this.state.name}</h3>
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
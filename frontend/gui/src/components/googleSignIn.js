import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
 
 
function GoogleLoginExport() {
    const responseGoogle = (response) => {
    //Json returned from logging in
    console.log(response);

    //Google ID
    var googleId = response.googleId;
    console.log(googleId);

    //Name
    var name = response.Qt.Ad;
    console.log(name);

    //Email
    var email = response.Qt.zu;
    console.log(email);

    }
    
    return (
    <React.Fragment>
        <GoogleLogin
        clientId="28472414383-unhi5oj95o9l01b0tj379th23g7diu1k.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
        />
    </React.Fragment>
    )
}

 export default GoogleLoginExport;
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import gLogo from './images/googleLogo.png';
import blackGLogo from './images/blackGoogleLogo.png';
 
 
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
        render={renderProps => (
            <button style={loginStyle} onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with <img src={blackGLogo} width="10" height="10"></img></button>
          )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
        />
    </React.Fragment>
    )
}


const loginStyle = {
    backgroundColor: 'Transparent',
    backgroundRepeat:'no-repeat',
    border: 'solid 2px',
    cursor:'pointer',
    overflow: 'hidden',
    outline:'none'
}

 export default GoogleLoginExport;
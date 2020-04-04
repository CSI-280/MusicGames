import React from 'react';
import useScript from './useScript';


function Player() {
    
    // const MyComponent = props => {
    //     useScript('https://w.soundcloud.com/player/api.js');
    //     useScript('https://connect.soundcloud.com/sdk/sdk-3.3.2.js');
    // }
    return (
        <iframe width="15%" height="110" scrolling="yes" frameborder="no" allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/624958950&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=false&buying=false&download=false&shuffle=true">
          </iframe>
    )
}

export default Player;
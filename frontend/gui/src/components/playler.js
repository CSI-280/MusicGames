import React from 'react';
 //https://developers.soundcloud.com/docs/api/#playing

function Player() {
    
    //<script src="https://w.soundcloud.com/player/api.js" type="text/javascript"></script>
    return (
        <iframe width="15%" height="110" scrolling="no" frameborder="no" allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp; {auto_play=ture, buying=False, sharing=true, download=false, show_artwork=ture, show_playcount=false, show_user=false}">
    </iframe>
    )
}

export default Player;
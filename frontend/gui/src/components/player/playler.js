import React from 'react';
//import useScript from './useScript';

function Player() {
    //useScript('https://connect.soundcloud.com/sdk/sdk-3.3.2.js');
    // var iframeElement   = {test};
    // var iframeElementID = "1";
    // var widget1         = SC.Widget(iframeElement);
    // var widget2         = SC.Widget(iframeElementID);
    // SC.Widget(iframeElement, iframeElementID);

    var frame = <iframe title="player" id="1" width="25%" height="99" scrolling="auto" frameborder="no" allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/624958950&color=%2304ff71&auto_play=false&show_artwork=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false&buying=false&download=false">
        </iframe>
    return (
        <React.Fragment>
            {frame}
        </React.Fragment>
    )
}
export default Player;

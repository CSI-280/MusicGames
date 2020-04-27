import React from 'react';
//import useScript from './useScript';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsedHeight: "99",
            collapsedPadding: "10px",
            expandedHeight: "600",
            expandedPadding: "10000px",
            collapsed: true,
        }
    }

    handleClick = () => {
        if (this.state.collapsed) {
            this.setState({collapsed: false})
        }
        else {
            this.setState({collapsed: true})
        }
    }



    render () {
        let collapsed = this.state.collapsed;
        let newHeight, newPadding, content;
        if (collapsed) {
            let frame = <iframe style={collpasedStyle} title="player" id="1" width="90%" height={this.state.collapsedHeight} scrolling="auto" frameborder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/624958950&color=%2304ff71&auto_play=false&show_artwork=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false&buying=false&download=false">
                        </iframe>
            content =  <div style={{padding: '10px', width: '25%'}}>{frame}
            <button style={buttonStyle} onClick={this.handleClick}>↓</button>
            </div>
        }
        else {
            let frame = <iframe style={openStyle} title="player" id="1" width="90%" height={this.state.expandedHeight} scrolling="auto" frameborder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/624958950&color=%2304ff71&auto_play=false&show_artwork=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false&buying=false&download=false">
                        </iframe>
            content =  <div style={{paddingTop: '10px', width: '25%'}}>{frame}
            <button style={buttonStyle} onClick={this.handleClick}>↑</button>
            </div>
        }
    return (
        <React.Fragment>{content}</React.Fragment>
    )}
}

const buttonStyle = {
    float: 'right',
    fontSize: '2vw',
    border: 'none'
}

const collpasedStyle = {
    position: 'absolute',
    top: '1px',
    left: '20px',
    'height': '5vw',
    width: '20vw'
}

const openStyle = {
    position: 'absolute',
    top: '1px',
    left: '20px',
    width: '20vw'
}

export default Player;

import React from 'react'
import './tic_tac_toe.css'
import SpotifyClient from './SpotifyClient';

//react component to create board, also has function to clear board
class Thing extends React.Component {

    constructor(props){
      super(props);
      this.test = this.test.bind(this);
    }

    test(){
        console.log(SpotifyClient.getArtist(ArtistID))
    }

    render() {
        return (
            <div class="centerGame">
            <button onClick={this.test}>Play again!</button>
            </div>
        );
    }
}

export default Thing;

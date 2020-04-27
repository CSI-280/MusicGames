/*import React from 'react';

function GuessA() {
    return (
      <h2>Guess the Artist</h2>
    )
}
export default GuessA

import React from 'react'
import './tic_tac_toe.css'
import SpotifyClient from './SpotifyClient';
*/

//react component to create board, also has function to clear board

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SpotifyClient from '../../SpotifyClient.js';
import './GuessArtist.css'
import userClient from '../../userClient'


var trackID = "3n3Ppam7vgaVa1iaRUc9Lp";
var answered = false;
var artistsArr = [];
var showImage = ""

function getSongData(result) {
    var song = result.name;//.data.album.name;
    var images = result.album.images;
    var image;
    if (images.length > 0){
        image = images[0];
    } else {
        image = "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6";
    }

    var artists = (result.album.artists);
    artistsArr = [];
    for (var i = 0; i < artists.length; i++){
        artistsArr.push(artists[i].name.toUpperCase());
    }
    console.log(artistsArr);
    console.log(image);

    showImage = "<img class ='cover' src='" + image.url + "' alt='album cover'>";
    document.getElementById("title").innerHTML = song;

}

function failure(error) {
    console.error("An error occurred");
}

function printArtists(){
    var artistsStr = ""
    for (var i = 0; i < artistsArr.length; i++){
        artistsStr += artistsArr[i] + " ";
    }
    return artistsStr;
}

function showAnswer(correct){
    document.getElementById("albumCover").innerHTML = showImage;
    var result = document.getElementById("result");
    if (answered){
        result.innerHTML = "You already answered for this question, please generate a new song";
        result.classList.remove("correct");
        result.classList.add("incorrect");
    } else {
        if (correct){
            result.innerHTML = "Correct<br />";
            result.classList.remove("incorrect");
            result.classList.add("correct");

            //Adds 10 points to the user
            userClient.setPointsOffset(10)
        
        } else {
            result.innerHTML = "Incorrect<br />";
            result.classList.remove("correct");
            result.classList.add("incorrect");
        }
        result.innerHTML += "Correct answer(s):<br />" + printArtists();
        answered = true;
    }
}

function playlistsSuccess(response){
    var playlists = response.data.playlists.items;
    var num = Math.floor(Math.random() * Math.floor(playlists.length));
    var playlist = playlists[num];

    var songs = SpotifyClient.getSongsOnPlaylist(playlist.id);
    songs.then(songsSuccess, failure)
}

function songsSuccess(response){
    var songs = response.data.items;
    var num = Math.floor(Math.random() * Math.floor(songs.length));
    var song = songs[num].track;
    console.log(song);
    getSongData(song);
}

class GuessA extends React.Component {

    constructor(props){
      super(props);
      this.test = this.test.bind(this);
      this.submitAnswer = this.submitAnswer.bind(this);
    }

    submitAnswer(){
        var userAnswer = document.getElementById("userAnswer").value.toUpperCase();
        var correct = false;
        for (var i = 0; i < artistsArr.length; i++){
            if (artistsArr[i] == userAnswer){
                correct = true;
                break;
            }
        }
        showAnswer(correct);
    }

    test(){
        var result = document.getElementById("result").innerHTML = "";
        var song = SpotifyClient.getSong(trackID);
        var playlists = SpotifyClient.getFeaturedPlaylists();
        playlists.then(playlistsSuccess, failure)
        answered = false;
        document.getElementById("submitAnswer").classList.remove("start");
    }

    state = { data : "Hello World" }


    render() {
        return (
            <div class="centerGame">
                <table class="guessArtist">
                    <tbody>
                        <tr>
                            <th>
                                <button onClick={this.test}>Give me a song!</button>
                            </th>
                            <th>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div id="title"></div>
                            </td>
                            <td rowspan="3">
                                <div id="albumCover"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" id="userAnswer" />
                                <br />
                                <br />
                                <button id="submitAnswer" class="start" onClick={this.submitAnswer}>Submit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="result"></div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        );
    }
}

export default GuessA;

//                <SongBlock dataFromParent = {this.state.data} />

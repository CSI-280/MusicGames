import React from 'react'
import './Points.css'
import $ from "jquery"
import GoogleLogin from 'react-google-login';
import userClient from '../userClient';
import Player from './player/playler';


var showModal = false;

function toggleModal(){
    if (showModal){
        $("#modal").css("display", "none");
        showModal = false;
    } else {
        $("#modal").css("display", "block");
        showModal = true;
    }
}

class Points extends React.Component {



    render() {
        return (
            <div className="points-wrapper">
                <Modal />
                <table className="points-table">
                    <tbody>
                        <tr>
                            <td rowSpan="3" className="playlist">playlist</td>
                            <td rowSpan="2" className="center">
                                <div className="meta scrollable">
                                    <h3 className="subheader">details</h3>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.
                                    </p>
                                </div>
                                <div className="cover">
                                    <img className="cover-image" src="https://filmschoolrejects.com/wp-content/uploads/2019/08/bee-movie.jpg" />
                                    <h2 class="subheader">Song name</h2>
                                    <h3 class="subheader">Artist/album</h3>
                                </div>
                            </td>
                            <td>tidbits</td>
                        </tr>
                        <tr>
                            <td className="center-text">
                                Get on the playlist!
                                <br />
                                <br />
                                <button class="spend" type="button" onClick={ toggleModal }>
                                Spend points!
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Your points
                                <br />
                                {this.props.location.state.user.points}
                            </td>
                            <td>what's this?</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Points;

const Modal = () => {
    return (
        <div id="modal" style={{ display: "none" }}>
            <div className="modal-frame">
                <h1>Spend points here!</h1>
                <button class="close" type="button" onClick={ toggleModal }>close</button>
            </div>
            <div className="site-cover">
            </div>
        </div>
    );
}

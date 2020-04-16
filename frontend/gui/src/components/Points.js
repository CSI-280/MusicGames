import React from 'react'
import './Points.css'
import $ from "jquery"

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
                            <td rowSpan="3" className="playlist">songs</td>
                            <td rowSpan="2" className="center">
                                <div className="meta scrollable">details</div>
                                <div className="cover">cover</div>
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
                            <td>Your points</td>
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

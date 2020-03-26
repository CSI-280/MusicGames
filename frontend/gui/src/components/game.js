import React from 'react'
import './game.css'
import $ from "jquery"

var playerMark = "X";
var turnsPlayed = 0;
var board = [[0,0,0],[0,0,0],[0,0,0]];

function winSequence(winner){
  $("#resetButton").addClass("won");
  $("#resetButton").removeClass("clear");
  if (winner == "tie"){
    console.log("Tie!");
  } else{
    console.log(winner + " won!");
  }
  turnsPlayed = 0;
  board = [[0,0,0],[0,0,0],[0,0,0]];
  $("#resetBox").html();
}

function checkIfOver(){
  if (board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] != 0){
    winSequence(board[0][0]);
  } else if (board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0] != 0){
    winSequence(board[1][0]);
  } else if (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] != 0){
    winSequence(board[2][0]);
  } else if (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] != 0){
    winSequence(board[0][0]);
  } else if (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] != 0){
    winSequence(board[0][1]);
  } else if (board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] != 0){
    winSequence(board[0][2]);
  } else if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != 0){
    winSequence(board[0][0]);
  } else if (board[2][0] == board[1][1] && board[2][0] == board[0][2] && board[2][0] != 0){
    winSequence(board[2][0]);
  } else if (turnsPlayed == 9){
    winSequence("tie");
  }
}

function markBox(box){
  $(box).html(playerMark);

  var row = $(box).parent().prop("rowIndex");
  var cell = $(box).prop("cellIndex");
  board[row][cell] = playerMark;

  if (playerMark == "X"){
    playerMark = "O";
  } else{
    playerMark = "X";
  }
  turnsPlayed++;
  checkIfOver();
}

$(document).click(function(event) {
    var element = $(event.target);
    if (element.prop("tagName") == "TD" ){
      markBox(element);
    }
});

class Game extends React.Component {

  constructor(props){
    super(props);
  //  this.setBoard = this.setBoard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }

  resetBoard(){
    var tds = document.getElementsByTagName("TD");
    tds = Array.from(tds);
    tds.forEach( td => {
      if ($(td).parent().parent().attr("id") == "board"){
        $(td).html("");
      }
    });
    $("#resetButton").addClass("clear");
    $("#resetButton").removeClass("won");
  }

  render() {
    return (
      <div class="centerGame">
      <h2>So you have chosen {this.props.name}</h2>
      <br />
      <table className="board">
        <tbody id="board">
          <tr className="bottom">
            <td></td><td className="center"></td><td></td>
          </tr>
          <tr>
            <td></td><td className="center"></td><td></td>
          </tr>
          <tr className="top">
            <td></td><td className="center"></td><td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <button class="reset clear" id="resetButton" onClick={this.resetBoard}>Play again!</button>
      </div>
    );
  }
}

export default Game;

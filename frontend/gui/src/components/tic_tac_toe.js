import React from 'react'
import './tic_tac_toe.css'
import $ from "jquery"

//variables that need to be referenced from many places
var playerMark = "♪";
var turnsPlayed = 0;
var board = [[0,0,0],[0,0,0],[0,0,0]];
var gameWon = false;
var difficulty=0;

//returns a jquery of either a single td or a group of tds, corresponding to
//a box in the grid used for game
function findBox(row, cell){
  var boxes = [];
  var tds = document.getElementsByTagName("TD");
  tds = Array.from(tds);
  tds.forEach( td => {
    if ($(td).parent().parent().attr("id") === "board"){
      var tdRow = $(td).parent().prop("rowIndex");
      var tdCell = $(td).prop("cellIndex");
      if (row === "all"){
        boxes.push(td);
      } else if (tdRow === row && tdCell === cell){
        boxes.push(td);
      }
    }
  });
  return boxes;
}

//when the game is won or tied, stop AI, highlight winning tiles, and turn
//reset button red
function winSequence(winner, toMark){
  $("#resetButton").addClass("won");
  $("#resetButton").removeClass("clear");
  console.log("here");
  if (winner === "tie"){
    console.log("Tie!");
  } else{
    console.log(winner + " won!");
    for (var i = 0; i < 9; i += 2){
      $(findBox(toMark[i], toMark[i + 1])).css("color", "green");
    }
  }
  turnsPlayed = 0;
  board = [[0,0,0],[0,0,0],[0,0,0]];
  $("#resetBox").html();
  gameWon = true;
}

//test if the game has been won or was tied, initate win sequence if yes
function checkIfOver(){
  var toMark = [];
  var winner = "";
  if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] !== 0){
    toMark = [0,0,0,1,0,2];
    winner = board[0][0];
  } else if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] !== 0){
    toMark = [1,0,1,1,1,2];
    winner = board[1][0];
  } else if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] !== 0){
    toMark = [2,0,2,1,2,2];
    winner = board[2][0];
  } else if (board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] !== 0){
    toMark = [0,0,1,0,2,0];
    winner = board[0][0];
  } else if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] !== 0){
    toMark = [0,1,1,1,2,1];
    winner = board[0][1];
  } else if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] !== 0){
    toMark = [0,2,1,2,2,2];
    winner = board[0][2];
  } else if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== 0){
    toMark = [0,0,1,1,2,2];
    winner = board[0][0];
  } else if (board[2][0] === board[1][1] && board[2][0] === board[0][2] && board[2][0] !== 0){
    toMark = [2,0,1,1,0,2];
    winner = board[2][0];
  } else if (turnsPlayed === 9){
    winner = "tie";
  }
  if (winner !== ""){
    winSequence(winner, toMark);
  }
}

//make the AI take a turn if the game has not been won yet
function aiPlay(){
  if (!gameWon){
    var boxFound = false;
    var row, cell;
    while (!boxFound){
      row = Math.floor(Math.random() * 3);
      cell = Math.floor(Math.random() * 3);
      if (board[row][cell] === 0){
        boxFound = true;
      }
    }
    markBox(findBox(row, cell));
  }
}

//mark a single box with the current turn marker, check if the game is over
function markBox(box){

  var row = $(box).parent().prop("rowIndex");
  var cell = $(box).prop("cellIndex");

  console.log(board[row][cell]);

  if (board[row][cell] != "♫" && board[row][cell] != "♪")
  {
    board[row][cell] = playerMark;
    $(box).html(playerMark);
    if (playerMark == "♪"){
      playerMark = "♫";
    } else{
      playerMark = "♪";
    }
    turnsPlayed++;
    checkIfOver();
    return true;
  }
  return false;
}

//click detector for when the user clicks a box, also calls AI to play
$(document).click(function(event) {
    var element = $(event.target);
    if (element.prop("tagName") === "TD" ){
      var played=markBox(element);
      console.log(played);
      if (played)
      {
        setTimeout(aiPlay, 500);
      }
    }
});

//react component to create board, also has function to clear board
class Game extends React.Component {
  constructor(props){
    super(props);
    this.resetBoard = this.resetBoard.bind(this);
  }

  resetBoard(){
    var boxes = findBox("all", "all");
    boxes.forEach( box => {
      $(box).html("");
      $(box).html("").css("color", "white");
    });

    $("#resetButton").addClass("clear");
    $("#resetButton").removeClass("won");
    gameWon = false;
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

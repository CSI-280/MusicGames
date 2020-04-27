import React from 'react';
import './Connect4.css'

function con4() {
    return (
    <div>
        <h1>CONNECT FOUR</h1>
        <div id="colorTurn">Yellow's Turn</div>
            <div id="grid">
                <div class="row">
                    <div class="cell" id="cell00" onclick="selectColumn(0)"></div>
                    <div class="cell" id="cell01" onclick="selectColumn(1)"></div>
                    <div class="cell" id="cell02" onclick="selectColumn(2)"></div>
                    <div class="cell" id="cell03" onclick="selectColumn(3)"></div>
                    <div class="cell" id="cell04" onclick="selectColumn(4)"></div>
                    <div class="cell" id="cell05" onclick="selectColumn(5)"></div>
                    <div class="cell" id="cell06" onclick="selectColumn(6)"></div>
                </div>
                <div class="row">
                    <div class="cell" id="cell10" onclick="selectColumn(0)"></div>
                    <div class="cell" id="cell11" onclick="selectColumn(1)"></div>
                    <div class="cell" id="cell12" onclick="selectColumn(2)"></div>
                    <div class="cell" id="cell13" onclick="selectColumn(3)"></div>
                    <div class="cell" id="cell14" onclick="selectColumn(4)"></div>
                    <div class="cell" id="cell15" onclick="selectColumn(5)"></div>
                    <div class="cell" id="cell16" onclick="selectColumn(6)"></div>
                </div>
                <div class="row">
                    <div class="cell" id="cell20" onclick="selectColumn(0)"></div>
                    <div class="cell" id="cell21" onclick="selectColumn(1)"></div>
                    <div class="cell" id="cell22" onclick="selectColumn(2)"></div>
                    <div class="cell" id="cell23" onclick="selectColumn(3)"></div>
                    <div class="cell" id="cell24" onclick="selectColumn(4)"></div>
                    <div class="cell" id="cell25" onclick="selectColumn(5)"></div>
                    <div class="cell" id="cell26" onclick="selectColumn(6)"></div>
                </div>
                <div class="row">
                    <div class="cell" id="cell30" onclick="selectColumn(0)"></div>
                    <div class="cell" id="cell31" onclick="selectColumn(1)"></div>
                    <div class="cell" id="cell32" onclick="selectColumn(2)"></div>
                    <div class="cell" id="cell33" onclick="selectColumn(3)"></div>
                    <div class="cell" id="cell34" onclick="selectColumn(4)"></div>
                    <div class="cell" id="cell35" onclick="selectColumn(5)"></div>
                    <div class="cell" id="cell36" onclick="selectColumn(6)"></div>
                </div>
                <div class="row">
                    <div class="cell" id="cell40" onclick="selectColumn(0)"></div>
                    <div class="cell" id="cell41" onclick="selectColumn(1)"></div>
                    <div class="cell" id="cell42" onclick="selectColumn(2)"></div>
                    <div class="cell" id="cell43" onclick="selectColumn(3)"></div>
                    <div class="cell" id="cell44" onclick="selectColumn(4)"></div>
                    <div class="cell" id="cell45" onclick="selectColumn(5)"></div>
                    <div class="cell" id="cell46" onclick="selectColumn(6)"></div>
                </div>
                    <div class="row">
                    <div class="cell" id="cell50" onclick="selectColumn(0)"></div>
                    <div class="cell" id="cell51" onclick="selectColumn(1)"></div>
                    <div class="cell" id="cell52" onclick="selectColumn(2)"></div>
                    <div class="cell" id="cell53" onclick="selectColumn(3)"></div>
                    <div class="cell" id="cell54" onclick="selectColumn(4)"></div>
                    <div class="cell" id="cell55" onclick="selectColumn(5)"></div>
                    <div class="cell" id="cell56" onclick="selectColumn(6)"></div>
                </div>
            </div>

            <input id="resetButton" type="button" value="Reset" onclick="resetGrid()" />
            <br />
<center>
  <a href="http://www.101Computing.net/connect4-challenge/" target="_blank">Thank you to 101Computing.net for tutorial</a>
</center>
</div>
    )
}

export default con4

//Thank you to www.101Computing.net/connect4-challenge/for base javascript code

var player=1; //1 for Yellow, 2 for Red

let placed = false;
let gameOver = false;
let vsAI = false; //choice not implemented
let turn = 0;

var grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

//A function used to add a token (when possible) based on the selected column
function selectColumn(col)
{
  if (player==1 && gameOver == false)
  {
    for(let i = 5; i > -1; i--)
    {
      if(grid[i][col] == 0 && placed == false)
      {
        grid[i][col]=1;
        placed = true;
      }
    }
    if(placed == false)
    {
      document.getElementById("colorTurn").innerHTML="Yellow, pick a different column!";
    }
    else
    {
      placed = false;
      player=2;
      document.getElementById("colorTurn").innerHTML="Red's Turn";
    }
  }
  else if(vsAI == false && player==2 && gameOver == false)
  {
    for(let i = 5; i > -1; i--)
    {
      if(grid[i][col] == 0 && placed == false)
      {
        grid[i][col]=2;
        placed = true;
      }
    }
    if(placed == false)
    {
      document.getElementById("colorTurn").innerHTML="Red, pick a different column!";
    }
    else
    {
      placed = false;
      player=1;
      document.getElementById("colorTurn").innerHTML="Yellow's Turn";
    }
  }
  //add ai turn here
  else if (vsAI == true && gameOver == false)
  {
    AIturn();
  }
  refreshGrid();

  checkForWin(col);
}

//have the "AI" take a turn
function AIturn()
{
  if(turn <= 3)
  {
    //random
  }

  turn++;
}

//check if the game is over and declare winner or draw
function checkForWin(col)
{
  //check for win
  let goal = 4;
  let currentRed = 0;
  let currentYellow = 0;
  let success = false;

  for(let i = 0; i < 6; i++) //check columns
  {
    if(grid[i][col] == 1 && success == false)
    {
      currentYellow += 1;
      currentRed -= 2;
    }
    else if(grid[i][col] == 2 && success == false)
    {
      currentRed += 1;
      currentYellow -= 2;
    }

    if(currentRed >= goal || currentYellow >= goal)
    {
      success = true;
    }
  }

  currentRed = 0;
  currentYellow = 0;

  for(let i = 0; i < 6; i++) //check rows
  {
    for(let j = 0; j < 7; j++)
    {
      if(grid[i][j] == 1 && success == false)
      {
        currentYellow++;
        currentRed = 0;
      }
      else if (grid[i][j] == 2 && success == false)
      {
        currentRed++;
        currentYellow = 0;
      }
      else if(grid[i][j] == 0 && success == false)
      {
        currentYellow = 0;
        currentRed = 0;
      }

      if(currentRed >= goal || currentYellow >= goal)
      {
        success = true;
      }
    }
  }

  currentRed = 0;
  currentYellow = 0;

  for(let i = 0; i < 6; i++) //check diags
  {
    for(let j = 0; j < 7; j++)
    {
      if(grid[i][j] == 1 && success == false)
      {
        currentYellow = 0;
        currentYellow++;
        currentRed = 0;

        if(grid[i+1][j+1] == 1 && i != 5 && j != 6)
        {
          currentYellow++;
          if(grid[i+2][j+2] == 1 && i != 5 && j != 6)
          {
            currentYellow++;
            if(grid[i+3][j+3] == 1 && i != 5 && j != 6)
            {
              currentYellow++;
            }
          }
        }
        else if(grid[i+1][j-1] == 1 && i != 5 && j != 0)
        {
          currentYellow++;
          if(grid[i+2][j-2] == 1 && i != 5 && j != 0)
          {
            currentYellow++;
            if(grid[i+3][j-3] == 1 && i != 5 && j != 0)
            {
              currentYellow++;
            }
          }
        }
      }
      else if (grid[i][j] == 2 && success == false)
      {
        currentRed = 0;
        currentRed++;
        currentYellow = 0;

        if(grid[i+1][j+1] == 2 && i != 5 && j != 6)
        {
          currentRed++;
          if(grid[i+2][j+2] == 2 && i != 5 && j != 6)
          {
            currentRed++;
            if(grid[i+3][j+3] == 2 && i != 5 && j != 6)
            {
              currentRed++;
            }
          }
        }
        else if(grid[i+1][j-1] == 2 && i != 5 && j != 0)
        {
          currentRed++;
          if(grid[i+2][j-2] == 2 && i != 5 && j != 0)
          {
            currentRed++;
            if(grid[i+3][j-3] == 2 && i != 5 && j != 0)
            {
              currentRed++;
            }
          }
        }
      }

      if(currentRed >= goal || currentYellow >= goal)
      {
        success = true;
      }
    }
  }

  if(success == true)
  {
    gameOver = true;

    //change text to winner
    if(currentRed >= goal)
      document.getElementById("colorTurn").innerHTML="Game Over! Red wins!";
    else
      document.getElementById("colorTurn").innerHTML="Game Over! Yellow wins!";
  }

  //check if all possible slots taken, make draw
  let max = 42
  let count = 0;
  for(let i = 0; i < 6; i++)
  {
    for(let j = 0; j < 7; j++)
    {
      if(grid[i][j] != 0)
      {
        count++;
      }
    }
  }

  if(count == max && success == false)
  {
    gameOver = true;

    //change text to draw
    document.getElementById("colorTurn").innerHTML="Game Over! Draw!";
  }
}

//A function used to refresh the connect4 grid on screen
function refreshGrid() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 7; col++) {
      if (grid[row][col]==0) {
                document.getElementById("cell"+row+col).style.backgroundColor="#FFFFFF";
      } else if (grid[row][col]==1) { //1 for yellow
                document.getElementById("cell"+row+col).style.backgroundColor="#FFFF00";
      } else if (grid[row][col]==2) { //2 for red
                document.getElementById("cell"+row+col).style.backgroundColor="#FF0000";
       }
    }
  }
}

//Reset all values to 0
function resetGrid()
{
  for(let i = 0; i < 6; i++)
  {
    for(let j = 0; j < 7; j++)
    {
      grid[i][j] = 0;
    }
  }
  gameOver = false;
  document.getElementById("colorTurn").innerHTML="Yellow's Turn";
  player = 1;
  turn = 0;
  refreshGrid();
}

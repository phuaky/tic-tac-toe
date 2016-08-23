//Global Scopes Start

var allGrids = [1,2,3,4,5,6,7,8,9];

var currentPlayer = "X";

//--------------GAME LOGIC--------------//

function checkAllGameLogic() {
  // for (var i = 0; i < allGrids.length; i++) {
    if ((allGrids[0] === "O" && allGrids[1] === "O" && allGrids[2] === "O") || (allGrids[0] === "X" && allGrids[1] === "X" && allGrids[2] === "X")) {
      winner = allGrids[0]
    } else if ((allGrids[3] === "O" && allGrids[4] === "O" && allGrids[5] === "O") || (allGrids[3] === "X" && allGrids[4] === "X" && allGrids[5] === "X")) {
      winner = allGrids[3]
    } else if ((allGrids[6] === "O" && allGrids[7] === "O" && allGrids[8] === "O") || (allGrids[6] === "X" && allGrids[7] === "X" && allGrids[8] === "X")){
      winner = allGrids[6]
    } else if ((allGrids[0] === "O" && allGrids[3] === "O" && allGrids[6] === "O") || (allGrids[0] === "X" && allGrids[3] === "X" && allGrids[6] === "X")) {
      winner = allGrids[0]
    } else if ((allGrids[1] === "O" && allGrids[4] === "O" && allGrids[7] === "O") || (allGrids[1] === "X" && allGrids[4] === "X" && allGrids[7] === "X")) {
      winner = allGrids[1]
    } else if ((allGrids[2] === "O" && allGrids[5] === "O" && allGrids[8] === "O") || (allGrids[2] === "X" && allGrids[5] === "X" && allGrids[8] === "X")) {
      winner = allGrids[2]
    } else if ((allGrids[0] === "O" && allGrids[4] === "O" && allGrids[8] === "O") || (allGrids[0] === "X" && allGrids[4] === "X" && allGrids[8] === "X")) {
      winner = allGrids[0]
    } else if ((allGrids[6] === "O" && allGrids[4] === "O" && allGrids[2] === "O") || (allGrids[6] === "X" && allGrids[4] === "X" && allGrids[2] === "X")) {
      winner = allGrids[6]
    } else {
      winner = "draw";
    }
//}

};

function displayGameAnnouncement() {
  if (winner === "X" || winner === "O") {
    document.getElementById("gameAnnouncement").textContent = 'Winner is ' + winner;
  } //else if (winner === "draw") {
  //   document.getElementById("gameAnnouncement").textContent = 'Winner is everybody!';
  // }
}

function displayMove(gridId) {
  if (document.getElementById(gridId).textContent === "" && currentPlayer === "X" ) {
    document.getElementById(gridId).textContent = "X";
    allGrids[gridId - 1] = "X";

    currentPlayer = "O";

  } else if (document.getElementById(gridId).textContent === "" && currentPlayer === "O") {

    document.getElementById(gridId).textContent = "O";
    allGrids[gridId - 1] = "O";

    currentPlayer = "X" ;
  }
  //}
};


var resetButton = document.getElementById("replay");
resetButton.addEventListener('click', function() {
  location.reload();
});



//Clicking on Grids
//when click the grid, run function displayMove, which pushes X into
document.getElementById("1").addEventListener("click", function() {
// console.log("grid1 is working when clicked");
displayMove(1);
checkAllGameLogic();
displayGameAnnouncement();

});

document.getElementById("2").addEventListener("click", function() {
// console.log("grid2 is working when clicked");
displayMove(2);
checkAllGameLogic();
displayGameAnnouncement();
});

document.getElementById("3").addEventListener("click", function() {
// console.log("grid3 is working when clicked");
displayMove(3);
checkAllGameLogic();
displayGameAnnouncement();
});

document.getElementById("4").addEventListener("click", function() {
// console.log("grid4 is working when clicked");
displayMove(4);
checkAllGameLogic();
displayGameAnnouncement();
});

document.getElementById("5").addEventListener("click", function() {
// console.log("grid5 is working when clicked");
displayMove(5);
checkAllGameLogic();
displayGameAnnouncement();
});

document.getElementById("6").addEventListener("click", function() {
// console.log("grid6 is working when clicked");
displayMove(6);
checkAllGameLogic();
displayGameAnnouncement();
});

document.getElementById("7").addEventListener("click", function() {
// console.log("grid7 is working when clicked");
displayMove(7);
checkAllGameLogic();
displayGameAnnouncement();
});

document.getElementById("8").addEventListener("click", function() {
// console.log("grid8 is working when clicked");
displayMove(8);
checkAllGameLogic();
displayGameAnnouncement();
});

document.getElementById("9").addEventListener("click", function() {
// console.log("grid9 is working when clicked");
displayMove(9);
checkAllGameLogic();
displayGameAnnouncement();
});


// console.log(replay);
// //PlayAgain button
// document.getElementById("replay").addEventListener("click", function() {
// console.log("button is working");
// resetGrids();
// console.log("its resetting");
// });

//business logic
//set global vaiable
//Set Objects

function Player(name1, score, total) {
  this.name1 = name1;
  this.score = score;
  this.total = total;
}

var playerOne = new Player("Player1", 0, 0);
var playerTwo = new Player("Player2", 0, 0);
var random = randomNumber();

function randomNumber() {
  return Math.floor((Math.random() * 6) + 1);
}
  alert("Hi" + random);
Player.prototype.calcScore = function() {
  if (random === 1) {
  this.score += 0;
  } else {
  this.score += random;
  }
}


Player.prototype.calcTotal = function() {
  this.total += this.score;
  this.score = 0;
  }


function gameOver() {
  if (playerOne.total >= 100) {
    alert(playerOne.name1 + " You are the winner!");
  }
}

////USER INTERFACE////
$(document).ready(function() {
  $("#button-roll1").click(function(){

    $("ul#player1-roll").text(random);
    playerOne.calcScore();
playerOne.calcTotal();

    $("#player1-total-score").text(playerOne.total);

    gameOver();
  });
});

////////////////////// Player 2/////////////////////////////
//$("#button-roll2").submit(function(event) {


  //var yourSecondScore = showScore();
  //$("ul#player2-roll").text(yourSecondScore);
  //$("ul#player2-total-score").text(yourSecondTotalScore);

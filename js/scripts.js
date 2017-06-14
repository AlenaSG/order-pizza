//business logic
//set global vaiable
//Set Objects
function Player(name, score, totals) {
  this.playerName = name;
  this.playerScore = score;
  this.playerTotalScore = totals;
}
//var score = 0;
var playerOne = new Player("Player1", 0);
var playerTwo = new Player("Player2", 0);

//Set Object Prototypes
Player.prototype.totalScore = function() {
  return (this.playerScore + showScore())
};

    //price = 10;
  //} else if (this.movieType === "secondRun" && this.timeOfDay === "evening" && this.ageRange < 65 && this.ageRange > 10) {
    //price = 15;
  //} else if (this.movieType === "secondRun" && this.timeOfDay === "evening" && this.ageRange > 64) {
  //price = 5;
//}

//if (this.movieType === "newRelease") {
  //price = price + 5;
//}//return price;
//}
function showScore() {
return Math.floor((Math.random() * 6) + 1);
}

alert(this.playerScore + showScore());
//User interface logic

$(document).ready(function() {
  $("form#player1").submit(function(event){

  var yourFirstScore = showScore();
    $("ul#player1-score").text(yourFirstScore);
    event.preventDefault();
  });
  $("form#player2").submit(function(event) {

    var yourSecondScore = showScore();
    $("ul#player2-score").text(yourSecondScore);
    event.preventDefault();
  });
  });

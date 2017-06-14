//business logic
//set global vaiable
//Set Objects
function Player(name1, score) {
  this.name1 = name1;
  this.score = score;
}
//var total = 0;
var playerOne = new Player("Player1", 0);
var playerTwo = new Player("Player2", 0);

//Set Object Prototypes

function showScore() {
return Math.floor((Math.random() * 6) + 1);
}
var yourFirstScore = showScore();
alert (yourFirstScore);


Player.prototype.play = function() {
  return this.score += yourFirstScore;
}
var yourFirstScore1 = playerOne.play();
alert(playerOne.play());




//Player.prototype.total = function() {
//return yourFirstScore1 + yourFirstScore;
//}
//alert(playerOne.total());

//function rollDice() {
       //var diceTotal = 0;
       //diceTotal += this.showScore();
       //return diceTotal;
    //}

//alert(rollDice());



//var grandTotal1 = function(number) {}
//Contact.prototype.fullName = function() {
  //return this.firstName + " " + this.lastName;
//}
//alert(PlayerScore);


//function showTotalScore() {
//return (yourFirstScore + 1);
//}

//User interface logic

$(document).ready(function() {
  $("form#player1").submit(function(event){
    var playerOne = new Player("Player1", 0);
var x = playerOne.play();
alert("hi");
alert(x);
  var yourFirstScore = showScore();
  var yourFirstTotalScore = play();
alert (yourFirstScore);
    $("ul#player1-score").text(yourFirstScore);
    //event.preventDefault();
    $("ul#player2-total-score").text(yourFirstTotalScore);
    event.preventDefault();
  });



  $("form#player2").submit(function(event) {

    var playerTwo = new Player("Player2", 0);
    var yourSecondScore = showScore();
    $("ul#player2-score").text(yourSecondScore);
    //$("ul#player2-total-score").text(yourSecondTotalScore);
    event.preventDefault();
    });
  });

//business logic
var price = 0;//set global vaiable
//Set Objects
function Ticket(movie, time, age) {
  this.movieType = movie;
  this.timeOfDay = time;
  this.ageRange = age;
}

//Set Object Prototypes
Ticket.prototype.deliveredPrice = function() {
  if (this.movieType === "secondRun" && this.timeOfDay === "eveing" && this.ageRange <= 10) {
    price = 10;
  } else if (this.movieType === "secondRun" && this.timeOfDay === "evening" && this.ageRange < 65 && this.ageRange > 10) {
    price = 15;
  } else if (this.movieType === "secondRun" && this.timeOfDay === "evening" && this.ageRange > 64) {
  price = 5;
}

if (this.movieType === "newRelease") {
  price = price + 5;
}
return price;
}


//User interface logic

$(document).ready(function() {
  $("form#ticket-prices").submit(function(event) {
      event.preventDefault();

    var inputtedMovieType = $("input:radio[name=typeOfMovie]:checked").val();
    var inputtedTimeOfDay = $("input:radio[name=timeOfDay]:checked").val();
    var inputtedAges = parseInt($("input#ageNumber").val());

    var newTicket = new Ticket(inputtedMovieType, inputtedTimeOfDay, inputtedAges);
    newTicket.deliveredPrice();

    $("ul#prices").text("$" + price);


  });
});

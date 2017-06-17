//BUSINESS LOGIC
function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

Pizza.prototype.price = function () {
  if (this.pizzaSize === "small") {
    price = 5;
  } else if (this.pizzaSize === "medium") {
    price = 8;
  } else if (this.pizzaSize === "large") {
    price = 10;
  } else {
    alert("Please choose a size");
  return 0;
  }
  if (this.toppings.length === 3) {
    price += 2;
  } else if (this.toppings.length > 3) {
    price += 4;
  }
  return price;
};

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
    event.preventDefault();
    toppings = [];
    toppingsList = " with:";
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingsChoice = $(this).val();
      toppingsList += "<br>" + toppingsChoice;
      toppings.push(toppingsChoice);
    });
    if (toppings.length > 0) {
      $('#summary').append(toppingsList);
    }
    var sizeResult = $("input:radio[name=size]:checked").val();
    var newPizza = new Pizza(sizeResult, toppings);
    var price = newPizza.price();
    $("#size").text(sizeResult);
    $("#price").text(price);
    $("#receipt").show();
    $('#order-pizza').hide();
  });
});

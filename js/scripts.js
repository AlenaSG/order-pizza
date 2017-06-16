//BUSINESS LOGIC
function Pizza(size) {
  this.size = size;
  //this.toppings = toppings;
}

Pizza.prototype.price = function () {
  if (size === "small") {
    price = 5;
  } else if (size === "medium") {
    price = 8;
  } else {
    price = 10;
  }
  return price;
};

function Clear() {
$("input:radio[name=size]:checked").val("");
$("input:checkbox[name=topping]:checked").val("");
}



// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
      event.preventDefault();



    var newPizza = new Pizza(sizeResult);

var sizeResult = $("input:radio[name=size]:checked").val();
$("#size").text(sizeResult);
$("input:checkbox[name=topping]:checked").each(function(){
  var toppingMode = $(this).val();
  $('#summary').append(toppingMode + "<br>");
  var priceResult = newPizza.price();
$("#price").text(priceResult);
$("#receipt").show();
});
 $('#order-pizza').hide();
});
});
//var number1 = parseInt($("#input1").val());
//var number2 = parseInt($("#input2").val());
//var operator = $("input:radio[name=operator]:checked").val();

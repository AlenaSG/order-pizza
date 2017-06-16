//BUSINESS LOGIC
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

function Clear() {
$("input:radio[name=size]:checked").val("");
$("input:checkbox[name=topping]:checked").val("");
}



// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
      event.preventDefault();

//var newPizza = new Pizza(size, topping);
      //var price = add(number1, number2);
    //  $("#price").text(price);
var size = $("input:radio[name=size]:checked").val();
$("#size").text(size);
$("input:checkbox[name=topping]:checked").each(function(){
  var toppingMode = $(this).val();
  $('#summary').append(toppingMode + "<br>");

$("#receipt").show();
});
 $('#order-pizza').hide();
});
});
//var number1 = parseInt($("#input1").val());
//var number2 = parseInt($("#input2").val());
//var operator = $("input:radio[name=operator]:checked").val();

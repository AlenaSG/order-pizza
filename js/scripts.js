
// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
      event.preventDefault();
      checkboxes();
      $("input:checkbox[name=topping]:checked").each(function() {
        var toppingMode = $(this).val();
        $('#summary').append(toppingMode + "<br>");

var toppingMode = $(this).val();


    var newPizza = new Pizza(sizeResult, toppingMode);

var sizeResult = $("input:radio[name=size]:checked").val();
$("#size").text(sizeResult);


finalPrice();

  var priceResult = newPizza.finalPrice();
$("#price").text(priceResult);
$("#receipt").show();
});
 $('#order-pizza').hide();
});
});

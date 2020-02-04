// Business Logic

function Pizza(size, toppings) {
  this.size = size,
    this.toppings = toppings;
}

Pizza.prototype.totalCost = function (arr) {
  this.toppingCost = total;
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total + this.size;
}

//User Interface Logic

$(document).ready(function () {
  $("#currentOrder").submit(function (event) {
    event.preventDefault();

    var input = [];
    $("input:checkbox[name=topping]:checked").each(function () {
      var toppingCosts = parseInt($(this).val());
      input.push(toppingCosts);
    });

    var sizes = parseInt($("#sizes").val());
    var newPizza = new Pizza(sizes, input);
    var pizzaCost = newPizza.totalCost(input);


    $("#pizza-cost").text(pizzaCost);
    $(".results").show();

  });

});
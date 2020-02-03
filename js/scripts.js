// Business Logic

function Order() {
  this.pizzas = [],
    this.cost = [];
}
function Pizza(size, toppings) {
  this.size = size,
    this.toppings = toppings;
}

Order.prototype.addPizza = function (pizza) {
  pizza.cost = pizza.toppingCost(pizza);
  this.pizzas.push(pizza);
}

Order.prototype.deletePizza = function (id) {
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id === id) {
        delete this.pizzas[i];
        return true;
      }
    }
  }
  return false;
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

    var inputToppings = [];
    $("input:checkbox[name=topping]:checked").each(function () {
      var top = $(this).val();
      inputToppings.push(top);
    });

    var sizes = parseInt($("#sizes").val());

    var newPizza = new Pizza(sizes, input);
    console.log(newPizza);
    var pizzaCost = newPizza.totalCost(input);
    console.log(pizzaCost);

    $("#pizza-cost").text(pizzaCost);
    $(".results").show();

  });

});
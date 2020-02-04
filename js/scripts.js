// Business Logic

function Pizza(size, toppings) {
  this.size = size,
    this.toppings = toppings,
    this.price = 0;
}

Pizza.prototype.totalCost = function () {
  this.price = this.size + this.toppings.length;
  return this.price;
}

//User Interface Logic

$(document).ready(function () {
  $("#currentOrder").submit(function (event) {
    event.preventDefault();

    var toppingArray = [];
    $("input:checkbox[name=topping]:checked").each(function () {
      toppingArray.push($(this).val());
    });

    str = '<ul>';
    toppingArray.forEach(function (element) {
      str += '<li>' + element + '</li>';
    });

    str += '</ul>';
    document.getElementById("toppings-include").innerHTML = str;

    var size = parseInt($("#sizes").val());
    var newPizza = new Pizza(size, toppingArray);
    var cost = newPizza.totalCost(toppingArray)

    $("#pizza-cost").text(cost);
    $(".results").show();

  });
});
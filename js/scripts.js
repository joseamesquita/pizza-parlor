// Business Logic

function Order() {
  this.pizzas = [],
    this.currentId = 0
}
Order.prototype.addPizza = function (pizza) {
  this.currentId += 1;
  this.pizzas.push(pizza);
}
$(document).ready(function () {

});

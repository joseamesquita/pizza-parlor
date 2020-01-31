// Business Logic

function Order() {
  this.pizzas = [],
    this.currentId = 0
}
Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignedID();
  this.pizzas.push(pizza);
}
Order.prototype.assignedID = function () {
  this.currentId += 1;
  return this.currentId;
}

$(document).ready(function () {

});

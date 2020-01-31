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

Order.prototype.findPizza = function (id) {
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id === id) {
        return this.pizzas[i];
      }
    }
  }
}

$(document).ready(function () {

});

// Business Logic

function Order() {
  this.pizzas = [],
    this.currentId = 0
}
function Pizza(size, toppings) {
  this.size = size,
    this.toppings = toppings,
    this.price = 6
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
  return false;
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

Pizza.prototype.prices = function (id) {
  if (this.size === "small") {
    this.price += 0;
  } else if (this.size === "medium") {
    this.price += 2;
  } else if (this.size === "large") {
    this.price += 4;
  } else if (this.size === "extra-large") {
    this.price += 6;
  }
}

$(document).ready(function () {

});

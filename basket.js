var items = {
  pizza: {
    name: 'Meaty',
    price: 10
  },
  milk: {
    name: 'Scottish whole milk',
    price: 1
  },
  pie: {
    name: 'Big Black Forest',
    price: 25
  }
};

var basket = {
  total: 0,
  cart: [],
  add: function(item) {
    this.cart.push(items[item]); 
  },
  remove: function(item) {
    this.cart.splice(items[item]);
  },
};

module.exports = basket;
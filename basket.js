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
    name: 'Black Forest',
    price: 10
  }
}

var basket = {
  total: 0,
  cart: [],
  add: function(item) {
    this.cart.push(items[item]); 
  },
  remove: function(item) {
    this.cart.splice(items[item]);
  },
  // Fix displayTotal and applyDiscount
  displayTotal: function(items) {
    this.cart.push(items);
    var x, total = 0;
    for (x = 0; x < items.length; x++) {
        total += items[x][price];
    }
    return total;
  },
  applyDiscount: function(validCard) {
    if (this.displayTotal > 20) {
      this.displayTotal -= (this.displayTotal * 0.1);
    }
    if (validCard) {
      this.displayTotal -= (this.displayTotal * 0.05);
    }
  }
};

module.exports = basket;
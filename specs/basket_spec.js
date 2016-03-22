var assert = require('chai').assert;
var basket = require('../basket');

describe('basket', function(){

  it('should have an initial total of 0', function () {
    assert.equal(0, basket.total);
  });

  it('should add an item', function () {
    basket.cart = [];
    basket.add('pizza');
    assert.equal(1, basket.cart.length);
  });

  it('should remove an item', function () {
    basket.cart = [];
    basket.remove('pizza');
    assert.equal(0, basket.cart.length);
  });

  it('should display total after adding items', function () {
    basket.cart = [];
    basket.add('pizza', 'milk', 'pie');
    assert.equal(21, basket.displayTotal);
  });

  it('should apply a 10% discount if total > 20', function () {
    basket.cart = [];
    basket.total = 0;
    basket.add('pizza', 'milk', 'pie');
    basket.applyDiscount();
    assert.equal(18.9, basket.displayTotal);
  });

  it('should apply an additional 5% discount if valid card', function () {
    basket.cart = [];
    basket.total = 0;
    basket.add('pizza', 'milk', 'pie');
    basket.applyDiscount(true);
    assert.equal(17.9, basket.displayTotal);
  });

});
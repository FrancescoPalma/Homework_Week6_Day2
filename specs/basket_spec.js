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

});
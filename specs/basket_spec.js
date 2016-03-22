var assert = require('chai').assert;
var basket = require('../basket');

describe('basket', function(){

  it('should check number of items', function() {
    assert.equal(5, basket.totalItems)
  });

});
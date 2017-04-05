const expect = require('chai').expect;
const factorial = require('./../src/factorial');

describe('Factorial', () => {

  it('should return proper factorial for non-negative integers', () => {
    expect(factorial(0)).to.eql(1);
    expect(factorial(1)).to.eql(1);
    expect(factorial(4)).to.eql(24);
    expect(factorial(8)).to.eql(40320);
  });

});
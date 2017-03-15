const expect = require('chai').expect;
const multiTable = require('./../src/multiplication_table');

describe('Multiplication Table', () => {

  it('should return a multiplication table sized according to the given dimensions.', () => {
    expect(multiTable(2, 2)).to.eql([[1, 2], [2, 4]]);
    expect(multiTable(3, 3)).to.eql([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
    expect(multiTable(3, 4)).to.eql([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12]]);
    expect(multiTable(2, 5)).to.eql([[1, 2, 3, 4, 5], [2, 4, 6, 8, 10]]);
  });
});
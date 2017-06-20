const expect = require('chai').expect;
const solveEq = require('./../src/system_eq');

describe('System of Equations', () => {

  it('should return the solution for the following equations', () => {
    expect(solveEq([[4, -3, 1, -10], [2, 1, 3, 0], [-1, 2, -5, 17]])).to.eql([1, 4, -2]);
    expect(solveEq([[2, 1, 3, 10], [-3, -2, 7, 5], [3, 3, -4, 7]])).to.eql([-1, 6, 2]);
    expect(solveEq([[3, 2, 0, 7], [-4, 0, 3, -6], [0, -2, -6, -10]])).to.eql([3, -1, 2]);
    expect(solveEq([[4, 2, -5, -21], [2, -2, 1, 7], [4, 3, -1, -1]])).to.eql([1, 0, 5]);
    expect(solveEq([[1, 1, 1, 5], [2, 2, 3, 14], [2, -3, 2, -5]])).to.eql([-2, 3, 4]);
  });
});
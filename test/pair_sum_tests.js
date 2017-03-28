const expect = require('chai').expect;
const pairSum = require('./../src/pair_sum');

describe('Pair Sum', () => {

  it('should return undefined if no pairs can be found', () => {
    expect(pairSum([11, 3, 7, 5], 9)).to.eql(undefined);
    expect(pairSum([2, 24, 1, 6], 10)).to.eql(undefined);
  });

  it('return the pair that sums to target', () => {
    expect(pairSum([11, 3, 7, 5], 10)).to.eql([3, 7]);
    expect(pairSum([2, 24, 1, 6], 25)).to.eql([24, 1]);
  });

  it('return the first pair that sums to target', () => {
    expect(pairSum([4, 3, 2, 3, 4], 6)).to.eql([4, 2]);
    expect(pairSum([10, 5, 2, 3, 7, 5], 10)).to.eql([3, 7]);
  });

});
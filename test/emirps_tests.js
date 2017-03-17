const expect = require('chai').expect;
const findEmirps = require('./../src/emirps');

describe('Find emirps', () => {

  it('should return [0, 0, 0] when no emirps', () => {
    expect(findEmirps(10)).to.eql([0, 0, 0]);
    expect(findEmirps(5)).to.eql([0, 0, 0]);
  });

  it('should return proper output for following integers', () => {
    expect(findEmirps(50)).to.eql([4, 37, 98]);
    expect(findEmirps(100)).to.eql([8, 97, 418]);
  });
});
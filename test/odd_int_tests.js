const expect = require('chai').expect;
const oddInt = require('./../src/odd_int');

describe('Find Odd Int', () => {
  let arr1, arr2, arr3;

  beforeEach(() => {
    arr1 = [10];
    arr2 = [1,1,2,-2,5,2,4,4,-1,-2,5];
    arr3 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
  });

  it('should return the int appearing odd number of times', () => {
    expect(oddInt(arr1)).to.eql(10);
    expect(oddInt(arr2)).to.eql(-1);
    expect(oddInt(arr3)).to.eql(5);
  });
});
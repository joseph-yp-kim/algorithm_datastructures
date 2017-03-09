const expect = require('chai').expect;
const repeatNumber = require('./../src/repeat_number');

describe('String Transformer', () => {
  let arr1, arr2, arr3, arr4;

  beforeEach(() => {
    arr1 = [];
    arr2 = [5, 6, 2, 4, 3, 1, 6, 7];
    arr3 = [3, 1, 5, 2, 10, 4, 5, 8, 6, 7, 9];
    arr4 = [10, 2, 1, 12, 3, 9, 4, 5, 3, 11, 7, 8, 6];
  });

  it('should return undefined for empty array', () => {
    expect(repeatNumber(arr1)).to.eql(undefined);
  });

  it('should return missing number from array', () => {
    expect(repeatNumber(arr2)).to.eql(6);
    expect(repeatNumber(arr3)).to.eql(5);
    expect(repeatNumber(arr4)).to.eql(3);
  });
});
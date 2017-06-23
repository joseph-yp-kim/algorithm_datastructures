const expect = require('chai').expect;
const mergeSort = require('./../src/merge_sort');
const makeList = require('./../src/helpers').makeList;
const inc = require('./../src/helpers').inc;

describe('mergeSort', () => {
  it('should sort numbers', () => {
    for (let i = 0; i < 10; i++) {
      const smallArray = makeList(100);
      const clone = smallArray.slice();
      expect(mergeSort(clone)).to.eql(smallArray.sort(inc));
    }
  });

  it('should sort very large arrays', () => {
    const largeArray = makeList(10000);
    const clone = largeArray.slice();
    expect(mergeSort(clone)).to.eql(largeArray.sort(inc));
  });

});
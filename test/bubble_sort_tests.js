const expect = require('chai').expect;
const bubbleSort = require('./../src/bubble_sort');
const makeList = require('./../src/helpers').makeList;
const inc = require('./../src/helpers').inc;

describe('Bubble Sort', () => {
  it('should sort numbers', () => {
    for (let i = 0; i < 10; i++) {
      const smallArray = makeList(100);
      const clone = smallArray.slice();
      expect(bubbleSort(clone)).to.eql(smallArray.sort(inc));
    }
  });

  it('should sort very large arrays', () => {
    const largeArray = makeList(10000);
    const clone = largeArray.slice();
    expect(bubbleSort(clone)).to.eql(largeArray.sort(inc));
  });

  xit('should handle a very, very large but already sorted arrays', () => {
    const ultraArray = [];
    for (let i = 0; i < 10000000; i++) {
      ultraArray.push(i);
    }
    bubbleSort(ultraArray);
    expect(ultraArray[2000]).to.eql(2000);
  });

});
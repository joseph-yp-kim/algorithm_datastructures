const expect = require('chai').expect;
const zeroMatrix = require('./../src/zero_matrix');

describe('Zero Matrix', () => {

  it('should return original matrix if no zeros', () => {
    expect(zeroMatrix([[1, 2], [4, 5], [5, 3]])).to.eql([[1, 2], [4, 5], [5, 3]]);
  });

  it('should return altered matrix if 0', () => {
    expect(zeroMatrix([[1, 2], [4, 5], [5, 0]])).to.eql([[1, 0], [4, 0], [0, 0]]);
    expect(zeroMatrix([[6, 2, 8], [1, 0, 2], [7, 4, 9]])).to.eql([[6, 0, 8], [0, 0, 0], [7, 0, 9]]);
    expect(zeroMatrix([[0, 1, 9], [2, 7, 5], [1, 0, 2], [4, 6, 8]])).to.eql([[0, 0, 0], [0, 0, 5], [0, 0, 0], [0, 0, 8]]);
  });

});
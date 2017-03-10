const expect = require('chai').expect;
const rotateGrid = require('./../src/rotate_grid');

describe('String Transformer', () => {
  let grid1, grid2, grid3;

  beforeEach(() => {
    grid1 = [[1]];
    grid2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    grid3 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
  });

  it('should rotate a NxN grid 90 degrees clockwise', () => {
    expect(rotateGrid(grid1, 1)).to.eql([[1]]);
    expect(rotateGrid(grid2, 3)).to.eql([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
    expect(rotateGrid(grid3, 4)).to.eql([[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]);
  });
});
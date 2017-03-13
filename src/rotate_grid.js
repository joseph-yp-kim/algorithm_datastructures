/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 */
function rotateGrid(grid, n) {
// grid[row][col]
// create output grid
const output = [];
// loop from 0 to n
for (let i = 0; i < n; i += 1) {
  // create row array
  const row = [];
  // push the current column (i) into row
  for (let j = n - 1; j >= 0; j -= 1) {
    row.push(grid[j][i]);
  }
  // push row array into output grid
  output.push(row);
}
// return output
return output;
}

module.exports = rotateGrid;
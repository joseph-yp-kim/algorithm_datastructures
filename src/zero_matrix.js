/* Write an algorithm such that if an element in an M x N matrix is 0,
it's entire row and column is set to zero

ex: [[1, 2], [4, 5], [5, 0]] -> [[1, 0], [4, 0], [0, 0]]
*/

function zeroMatrix(matrix) {
  // create obj
  const obj = {};
  // create output matrix
  const output = [];
  // loop thru matrix
  for (let i = 0; i < matrix.length; i += 1) { 
    // create a row array
    const row = [];
    // loop thru matrix row
    for (let j = 0; j < matrix[i].length; j += 1) {
      // push element to row array
      row.push(matrix[i][j]);
      // if element is 0, mark the row and col in the obj
      if (matrix[i][j] === 0) {
        if (!obj.hasOwnProperty(i)) obj[i] = [];
        obj[i].push(j);
      }
    }
    output.push(row);
  }
  const rowLen = output[0].length;
  const colLen = output.length;
  // loop thru obj
  for (let row in obj) {
    // set rows in output to 0s
    for (let i = 0; i < rowLen; i += 1) {
      output[row][i] = 0;
    }
    obj[row].forEach(col => {
      // set col in output to 0s
      for (let j = 0; j < colLen; j += 1) {
        output[j][col] = 0;
      }
    })
  }
  return output;
}

module.exports = zeroMatrix;
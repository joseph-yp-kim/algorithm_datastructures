/*
Create a function that accepts dimensions, of Rows x Columns, as parameters in order
to create a multiplication table sized according to the given dimensions.
The return value of the function must be an array, and the numbers must be Fixnums,
NOT strings.

Each value on the table should be equal to the value of multiplying the number in its
first row times the number in its first column.
*/

function multiplicationTable(row, col) {
  // create output array
  const output = [];
  // loop thru 1 to row inclusive
  for (let i = 1; i <= row; i += 1) {
    // create empty array
    const tempRow = [];
    // loop thru 1 to col inclusive
    for (let j = 1; j <= col; j += 1) {
      // multiple row by col and push to tempRow
      tempRow.push(i * j);
    }
    // push tempRow to output
    output.push(tempRow);
  }
  // return output
  return output;
}

module.exports = multiplicationTable;

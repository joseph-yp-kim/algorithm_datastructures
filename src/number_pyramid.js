// Write a function pattern which creates the following Pattern(See Examples) 
// up to n(parameter) number of rows.

// Rules:
// 1. If the Argument is 0 or a Negative Integer then it should return an empty string.
// 2. All the lines in the pattern have same length i.e equal to the number of characters in the last line.
// 3. Range of n is (-∞,100]

// ex: pattern(5):
/*
    1    
   121   
  12321  
 1234321 
123454321
*/

function numberPyramid(n) {
  // edge case: 0 and negative #
  if (n <= 0) return '';
  // create an output string
  let output = '';
  // loop from 0 to n
  for (let i = 0; i < n; i += 1) {
    // besides i === 0, add line break to output
    if (i > 0) output += '\n';
    // calculate whitespace string
    let ws = '';
    const limit = n - (i + 1);
    for (let j = 0; j < limit; j += 1) {
      ws += ' ';
    }
    // calculate num string
    let nums = '';
    for (let k = 1; k < i + 2; k += 1) {
      let num = k.toString();
      if (k > 9) num = (k % 10).toString();
      nums += num;
    }
    const reverseNums = nums.split('').reverse().join('').slice(1);
    nums += reverseNums;
    // add whitespace
    output += ws;
    // add num string
    output += nums;
    // add whitespace
    output += ws;
  }
  // return output
  return output;
}

module.exports = numberPyramid;
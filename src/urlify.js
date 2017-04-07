/*
Write a method to replace all spaces in a string with '%20'
You may assume that the string has sufficient space at the end to hold all additional characters,
and that you are given the "true" length of the string.

ex: 
input: "Mr John Smith    ", 13
output: "Mr%20John%20Smith"
*/

function urlfiy(str, num) {
  // create an output string variable
  let output = '';
  // loop from 0 to num
  for (let i = 0; i < num; i += 1) {
    // check if current character is space
    if (str[i] === ' ') {
      // if so, concat '%20' to output
      output += '%20';
    } else {
      // if not, concat the current character
      output += str[i];
    }
  }
  // return the output
  return output;
}

module.exports = urlfiy;
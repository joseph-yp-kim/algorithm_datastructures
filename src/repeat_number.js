/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  // edge case: empty array
  if (!array.length) return undefined;
  // find expected sum of array
  const n = array.length - 1;
  const expected = (n * (n + 1)) / 2;
  // find actual sum
  const actual = array.reduce((a, c) => {
    return a + c;
  });
  // return the difference between actual sum and expected sum
  return actual - expected;
}

module.exports = repeatNumbers;

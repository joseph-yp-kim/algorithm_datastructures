// Given an array of integers and a single sum value, return the first two values 
// (parse from the left) in order of appearance that add up to form the sum.

function pairSum(array, target) {
  // create an object that holds the index of integers that add to target
  const minIndexes = {};
  // loop thru array
  for (let i = 0; i < array.length; i += 1) {
    // save current integer to temp
    const a = array[i];
    // check if the difference between the target and the current integer is in minIndexes
    // if so, return the two integers
    if ((target - a) in minIndexes) return [target - a, a];
    // if current integer is not in minIndexes then add the current integer and index
    if (!(a in minIndexes)) minIndexes[a] = i;
  }
}

module.exports = pairSum;
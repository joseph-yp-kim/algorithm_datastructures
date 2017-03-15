// Given an array of integers, find the integer that appear an odd number of times
// There will always be only one integer that appears an odd number of times.

// function findOdd(array) {
//   // create obj to store number of occurences
//   const obj = {};
//   // loop through array
//   for (let i = 0; i < array.length; i += 1) {
//     // if not in obj, then add to object
//     if (!obj[array[i]]) obj[array[i]] = 0;
//     // add count
//     obj[array[i]] += 1;
//   }
//   // loop through obj
//   for (let key in obj) {
//     // if value is odd return the num
//     if (obj[key] % 2 !== 0) return parseInt(key);
//   }
// }

function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

module.exports = findOdd;
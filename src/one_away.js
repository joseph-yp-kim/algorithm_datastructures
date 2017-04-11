// There are three types of edits that can be performed on strings: insert, remove, and replace
// Given two strings, write a function to check if they are one edit (or zero edits) away
/*
ex:
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  let edited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i += 1, j += 1) {
    if (str1[i] !== str2[j]) {
      if (edited) return false;
      if (str1.length > str2.length) j -= 1;
      if (str1.length < str2.length) i -= 1;
      edited = true;
    }
  }
  return true;
}

module.exports = oneAway;
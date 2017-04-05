// Implement an algorithm that determines if a string has all unique characters
// Bonus: do not use additional data structures

function uniqueChar(str) {
  if (str.length < 2) return true;
  const sortedStr = str.split('').sort().join('');
  for (let i = 1; i < sortedStr.length; i += 1) {
    if (sortedStr[i - 1] === sortedStr[i]) return false;
  }
  return true;
}

module.exports = uniqueChar;
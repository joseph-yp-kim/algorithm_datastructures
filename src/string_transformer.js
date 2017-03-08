// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// ex: string_transformer("Example Input") => 'iNPUT eXAMPLE'

function stringTranformer(str) {
  if (!str) return '';
  let output = '';
  const arr = str.split(' ').reverse();
  for (let i = 0; i < arr.length; i += 1) {
    if (i > 0) output += ' ';
    for (let j = 0; j < arr[i].length; j += 1) {
      if (/[a-z]/.test(arr[i][j])) {
        output += arr[i][j].toUpperCase();
      } else if (/[A-Z]/.test(arr[i][j])) {
        output += arr[i][j].toLowerCase();
      } else {
        output += arr[i][j];
      }
    }
  }
  return output;
}

module.exports = stringTranformer;
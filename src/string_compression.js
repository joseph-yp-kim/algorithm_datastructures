// Implement a method to perform basic string compression usign the counts of repeated characters
// ex: aabcccccaaa -> a2b1c5a3
// If the compressed string is not smaller than the original string, then it should retrun the original
// You can assume the string will only have upper and lowercase letters 

function strCompress(str) {
  let output = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      count += 1;
    } else {
      output += count.toString();
      output += str[i];
      count = 1;
    }
  }
  output += count.toString();
  if (output.length <= str.length) return output;
  return str;
}

module.exports = strCompress;
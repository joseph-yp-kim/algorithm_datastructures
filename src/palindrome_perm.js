// Given a string, write a function to check if it is a permutaiton of a palindrome
// The palindrome does not need to be limited to just dictionary words
// ex: palinPerm('Tact Coa') => true (permuations: "taco cat", atco cta", etc.)

function palinPerm(str) {
  // create a counter variable
  let count = 0;
  // sort str into order and remove whitespaces
  let newStr = str.replace(/ /g,'');
  newStr = newStr.toLowerCase();
  let ordered = newStr.split('').sort().join('');
  console.log(ordered);
  // loop thru ordered string incrementing by 1
  for (let i = 0; i < ordered.length; i += 1) {
    // check if current character is equal to the next character
    if (ordered[i] === ordered[i + 1]) i += 1;
    else count += 1;
      // if so, add one to i
      // if not, increment counter by 1
  }
  // if counter is greater than 1, return false
  if (count > 1) return false;
  return true;
  // if not, return true
}

module.exports = palinPerm;
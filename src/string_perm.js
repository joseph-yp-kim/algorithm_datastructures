// Given two strings, write a method that determines is one is a permutation of the other

function stringPerm(str1, str2) {
  const arr = str2.split('');
  for (let i = 0; i < str1.length; i += 1) {
    const index = arr.indexOf(str1[i]);
    if (index > -1) arr.splice(index, 1);
    else return false;
  }
  if (arr.length === 0) return true;
  return false;
}

module.exports = stringPerm;
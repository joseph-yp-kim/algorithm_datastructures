function merge(left, right) {
  const output = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      output.push(left.shift());
    } else {
      output.push(right.shift());
    }
  }
  while (left.length > 0) {
    output.push(left.shift());
  }
  while (right.length > 0) {
    output.push(right.shift());
  }
  return output;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const half1 = array.slice(0, middle);
  const half2 = array.slice(middle);

  return merge(mergeSort(half1), mergeSort(half2));
}

module.exports = mergeSort;

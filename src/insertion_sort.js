function insertionSort(array) {
  const len = array.length;
  for (let i = 1; i < len; i += 1) {
    let j = 0;
    let cont = true;
    while (j < i && cont) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array.splice(i, 1);
        array.splice(j, 0, temp);
        cont = false;
      }
      j += 1;
    }
  }
  return array;
}

module.exports = insertionSort;
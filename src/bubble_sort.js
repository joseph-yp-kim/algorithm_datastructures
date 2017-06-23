function bubbleSort(array) {
  const len = array.length - 1;
  let cont = true;
  while (cont) {
    let temp;
    for (let i = 0; i < len; i += 1) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    if (temp === undefined) {
      cont = false;
    }
  }
  return array;
}

module.exports = bubbleSort;

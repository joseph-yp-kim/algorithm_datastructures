function makeList(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.ceil(Math.random() * num));
  }
  return arr;
}

function inc(a, b) {
  return a - b;
}

module.exports = {
  makeList: makeList,
  inc: inc
}

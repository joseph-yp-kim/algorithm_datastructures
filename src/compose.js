// write a function that combines functions like the compose function in the Ramda Javascript library
/*
const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const addOneMultTwo = compose(multTwo, addOne)

addOneMultTwo(5) returns 12
*/

function compose(...funcs) {
  // edge case no function, 
  if (!funcs.length) {
    // return function that returns input
    return (a) => a;
  }
  // edge case one function
  if (funcs.length === 1) {
    // return the function in the funcs array
    return (a) => funcs[0](a);
  }
  // return a function that has the funcs array and pipe the input
  return (a) => {
    let clone = a;
    for (let i = funcs.length - 1; i >= 0; i -= 1) {
      clone = funcs[i](clone);
    }
    return clone;
  }
}

module.exports = compose;
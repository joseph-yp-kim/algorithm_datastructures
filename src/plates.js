/*
Implement a data structure that mimics a stack of plates toppling over when too high
SetofSTacks should be composed of several stacks and should create a new stack once the previous
one exceeds capacity. push and pop should behave identically to a single stack (FILO)
*/

function SetofStacks(limit) {
  if (limit === undefined) {
    throw new Error('maxSize argument is required');
  } else {
    this.storage = {
      0: {}
    };
    this.lengths = {
      0: 0
    };
    this.limit = limit;
  }
}

SetofStacks.prototype.push = function(value) {
  // check the last stack in storage to see if number of props is greater than or equal to limit
  if (this.lengths[Object.keys(this.lengths).length - 1] >= this.limit) {
    // create a new stack and push value into the new stack
    this.storage[Object.keys(this.lengths).length] = {
      0: value
    };
    // create a new length for this stack starting at 1
    this.lengths[Object.keys(this.lengths).length] = 1;
  } else {
    // push into the last stack
    this.storage[Object.keys(this.lengths).length - 1][this.lengths[Object.keys(this.lengths).length - 1]] = value;
    // increment the according length by 1
    this.lengths[Object.keys(this.lengths).length - 1] += 1;
  }
};

SetofStacks.prototype.pop = function() {
  // save the last element from the last stack to a temp variable
  const temp = this.storage[Object.keys(this.storage).length - 1][this.lengths[Object.keys(this.lengths).length - 1] - 1];
  // delete the property
  delete this.storage[Object.keys(this.storage).length - 1][this.lengths[Object.keys(this.lengths).length - 1] - 1];
  // decrement the according length by 1
  this.lengths[Object.keys(this.lengths).length - 1] -= 1;
  // check if length of the last stack is 0,
  if (this.lengths[Object.keys(this.lengths).length - 1] === 0) {
    // delete the last stack
    delete this.storage[Object.keys(this.storage).length - 1];
    // delete the last length property
    delete this.lengths[Object.keys(this.lengths).length - 1];
  }
  // return the temp variable
  return temp;
};

module.exports = SetofStacks;
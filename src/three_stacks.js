function tripleStack() {
  this.stacks = [];
  this.lengths = [0, 0, 0];
}

tripleStack.prototype.getLength = function(stack) {
  return this.lengths[stack - 1];
};

tripleStack.prototype.push = function(stack, value) {
  // get length of stack
  const len = this.getLength(stack);
  // the index at which it will be inserted is length * 3 + stack_num - 1
  // insert at the index
  this.stacks[len * 3 + stack - 1] = value;
  // incremenet length of corresponding stack number by 1
  this.lengths[stack - 1] += 1;
};

tripleStack.prototype.pop = function(stack) {
  const len = this.getLength(stack);
  let temp;
  if (len > 0) {
    // get index of last element of the stack
    const indx = (len - 1) * 3 + stack - 1;
    // save the element at the index to a temp variable
    temp = this.stacks[indx];
    // set the value at the index to undefined;
    this.stacks[indx] = undefined;
    this.lengths[stack - 1] -= 1;
  }
  return temp;
}
/*
Implement a method, in addition to push and pop, that returns the minimum element from a stack.
Push, pop, and min should all operate in constant time 0(1)
*/

function stack() {
  this.stack = {};
  this.len = 0;
  this.minStack = {};
  this.minLen = 0;
}

stack.prototype.push = function(value) {
  // const len = this.stack.length;
  // const minLen = this.minStack.length;
  this.stack[this.len] = value;
  this.len += 1;
  if (this.minLen === 0 || this.minStack[this.minLen - 1] > value) {
    this.minStack[this.minLen] = value;
    this.minLen += 1;
  }
};

stack.prototype.pop = function() {
  // const len = this.stack.length;
  // const minLen = this.minStack.length;
  // check if length of stack is greater than 0
  if (this.len > 0) {
    // save last element in stack to a temp variable
    const temp = this.stack[this.len - 1];
    // delete last element in stack
    delete this.stack[this.len - 1];
    this.len -= 1;
    // check if last element in minStack is equal to temp
    if (this.minStack[this.minLen - 1] === temp) {
      // if so delete from minstack
      delete this.minStack[this.minLen - 1];
      this.minLen -= 1;
    }
    // return temp
    return temp;
  }
};

stack.prototype.min = function() {
  // get length of minStack
  // const minLen = this.minStack;
  // if length of minStack greater than 0, return last element
  if (this.minLen > 0) return this.minStack[this.minLen - 1];
};


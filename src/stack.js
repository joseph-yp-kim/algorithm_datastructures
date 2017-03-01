// stack follows first in last out principle (FILO)
// create a stack prototype with push and pop methods

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index += 1;
};

Stack.prototype.pop = function() {
  if (this.index > 0) {
    const temp = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index -= 1;
    return temp;
  }
};

module.exports = Stack;
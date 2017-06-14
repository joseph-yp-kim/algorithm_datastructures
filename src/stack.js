// stack follows first in last out principle (FILO)
// create a stack prototype with push and pop methods

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length += 1;
};

Stack.prototype.pop = function() {
  if (this.length > 0) {
    const temp = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length -= 1;
    return temp;
  }
};

module.exports = Stack;
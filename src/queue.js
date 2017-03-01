// stack follows first in last out principle (FIFO)
// create a stack prototype with push and pop methods

function Queue() {
  this.storage = {};
  this.index = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index += 1;
};

Queue.prototype.dequeue = function() {
  if (this.index > 0) {
    const temp = this.storage[0];
    for (let i = 0; i < this.index - 1; i += 1) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.index - 1];
    this.index -= 1;
    return temp;
  }
};


module.exports = Queue;
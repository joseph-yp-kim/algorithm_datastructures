const Stack = require('./stack');
// Implement a queue by using two stacks

function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.inbox.push(value);
  this.length += 1;
};

Queue.prototype.dequeue = function() {
  if (this.length === 0) throw new Error('queue is empty');
  // if outbox is empty
  if (this.outbox.length === 0) {
    // pop all values from inbox and push into outbox
    while (this.inbox.length > 0) {
      this.outbox.push(this.inbox.pop());
    }
  }
  // decrement length by 1
  this.length -= 1;
  // return the popped value from outbox
  return this.outbox.pop();
};

module.exports = Queue;

// class MyQueue {
//   constructor() {
//     this.eStack = [];
//     this.dStack = [];
//   }

//   enqueue(value) {
//     this.eStack.push(value);
//   }

//   dequeue() {
//     if (this.dStack.length === 0 && this.eStack.length === 0) {
//       throw new Error('queue is empty');
//     }
//     if (this.dStack.length === 0) {
//       while (this.eStack.length > 0) {
//         this.dStack.push(this.eStack.pop());
//       }
//     }
//     return this.dStack.pop();
//   }
// }

// module.exports = MyQueue;

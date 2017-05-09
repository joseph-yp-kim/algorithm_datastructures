// Implement an algorithm to find the kth to last element of a singly linked list
// without using the tail property

function LinkedList(...args) {
  this.head = null;

  if (args.length) {
    args.forEach((value) => {
      this.push(value);
    });
  }
}

LinkedList.prototype.push = function(value) {
  const node = new Node(value);
  if (!this.head) this.head = node;
  else {
    this.tail.next = node;
  }
  this.tail = node;
};

LinkedList.prototype.kthLast = function(k) {
  // create an array
  const arr = [];
  let curr = this.head;
  // loop through the linked list and push each value into the array
  while (curr) {
    arr.push(curr.value);
    curr = curr.next;
  }
  // return the element at index: length - 1 - k
  return arr[arr.length - 1 - k];
};

function Node(val) {
  this.value = val;
  this.next = null;
}

module.exports = {
  ll : LinkedList,
  nd : Node,
};
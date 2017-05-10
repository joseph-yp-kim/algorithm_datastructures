/*
You have two numbers represented by a linked list, where each node contains a single digit.
The digits are stored in reverse order, such that the 1's digit is at the head of the list.
Write a function that adds the two numbers and returns the sum as a linked list.
*/

function LinkedList(...args) {
  this.head = null;
  this.tail = null;

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

function Node(val) {
  this.value = val;
  this.next = null;
}

function sumListsReverse(l1, l2) {
  // create two empty arrays
  const arr1 = [];
  const arr2 = [];
  let curr1 = l1.head;
  let curr2 = l2.head;
  // loop through one linked list
  while (curr1) {
    // unshift the current element/digit to respective arrays
    arr1.unshift(curr1.value);
    arr2.unshift(curr2.value);
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  // convert the arrays to numbers and get the sum
  const sum = Number(arr1.join('')) + Number(arr2.join(''));
  // create a new array by spliting and reverse
  const arrStr = sum.toString().split('').reverse();
  const arrNum = arrStr.map(item => {
    return Number(item);
  });
  // create a new LL with the array
  return new LinkedList(...arrNum);
}

function sumListsForward(l1, l2) {
  // create two empty arrays
  const arr1 = [];
  const arr2 = [];
  let curr1 = l1.head;
  let curr2 = l2.head;
  // loop through one linked list
  while (curr1) {
    // push the current element/digit to respective arrays
    arr1.push(curr1.value);
    arr2.push(curr2.value);
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  // convert the arrays to numbers and get the sum
  const sum = Number(arr1.join('')) + Number(arr2.join(''));
  // create a new array by spliting
  const arrStr = sum.toString().split('');
  const arrNum = arrStr.map(item => {
    return Number(item);
  });
  // create a new LL with the array
  return new LinkedList(...arrNum);
}

module.exports = {
  ll : LinkedList,
  nd : Node,
  sumListsReverse: sumListsReverse,
  sumListsForward: sumListsForward
};
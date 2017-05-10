/*
Given a circular linked list, write an algorithm that returns the node at the beginning 
of the loop
*/

function loopDetect(ll) {
  let fast = ll;
  let slow = ll;
  while (slow.next && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    // check if fast and slow references are equal
    if (fast === slow) return ll;
  }
  // if any null, then return false
  return false;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

module.exports = {
  ld: loopDetect,
  nd : Node,
};
// Given two linked list, determine if the two lists intersect.
// If so, return the intersecting node

function intersection(l1, l2) {
  let curr1 = l1;
  while (curr1.next) {
    let curr2 = l2;
    while(curr2.next) {
      if (curr1 === curr2) return curr1;
      curr2 = curr2.next;
    }
    if (curr1 === curr2.next) return curr1;
    curr1 = curr1.next;
  }
  let curr2 = l2;
  while (curr2.next) {
    if (curr1 === curr2) return curr1;
    curr2 = curr2.next;
  }
  if (curr1 === curr2) return curr1;
  return false;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

module.exports = {
  i: intersection,
  nd : Node,
};
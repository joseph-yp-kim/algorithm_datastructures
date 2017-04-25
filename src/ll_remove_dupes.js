// Write a method to remove duplicat values from an unordered linked list
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

LinkedList.prototype.rmvDupes = function() {
  // create an obj
  const obj = {};
  let curr = this.head;
  // loop through the ll with while loop
  while (curr) {
    // check if value is in obj, if not add to obj and set value to false
    if (!obj.hasOwnProperty(curr.value)) obj[curr.value] = false ;
    // if so, set value to true
    else obj[curr.value] = true;
    curr = curr.next;
  }
  // loop through the ll again
  if (obj[this.head.value]) {
    this.head = this.head.next;
  }
  let prev = this.head;
  curr = this.head.next;
  while (curr.next) {
    // if the value in the obj is true, delete the node
    if (obj[curr.value]) {
      let temp = curr.next;
      prev.next = temp;
      curr = curr.next;
    } else {
      prev = prev.next;
      curr = curr.next;
    }
  }
  if (obj[curr.value]) {
    this.tail = prev;
    this.tail.next = null;
  }
};

function Node(val) {
  this.value = val;
  this.next = null;
}

module.exports = {
  ll : LinkedList,
  nd : Node,
};
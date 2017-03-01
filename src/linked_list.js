// The constructor should take a variable number of arguments
// It will add each of the arguments to the list upon instantiation
function LinkedList(...args) {
  this.head = null;
  this.tail = null;

  if (args.length) {
    args.forEach((value) => {
      this.push(value);
    });
  }
}

function Node(val) {
  this.value = val;
  this.next = null;
  this.back = null;
}

// adds node to end of list
LinkedList.prototype.push = function(value) {
  const node = new Node(value);
  if (!this.head) this.head = node;
  else {
    this.tail.next = node;
    node.back = this.tail;
  }
  this.tail = node;
};

// returns true if value is present in the list
LinkedList.prototype.contains = function(value) {
  let curr = this.head;
  while (curr.next) {
    if (curr.value === value) return true;
    curr = curr.next;
  }
  return curr.value === value;
};

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function(value) {
  // create node
  const node = new Node(value);
  // set node's next to head
  node.next = this.head;
  // reset head to node
  this.head = node;
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {

};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function(value) {

};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function(position) {

};

module.exports = {
  ll : LinkedList,
  nd : Node
};
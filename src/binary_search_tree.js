function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function(value) {
  const bst = new BinarySearchTree(value);
  if (value < this.value) {
    if (this.left) this.left.add(value);
    else this.left = bst;
  } else if (value > this.value) {
    if (this.right) this.right.add(value);
    else this.right = bst;
  }
  return;
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) return true;
  if (value < this.value) {
    if (this.left) return this.left.contains(value);
  }
  if (value > this.value) {
    if (this.right) return this.right.contains(value);
  }
  return false;
};

// applies the callback in the order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function(callback) {
  callback(this.value);
  if (this.left) this.left.depthFirstPre(callback);
  if (this.right) this.right.depthFirstPre(callback);
};

// applies the callback in the order of depth first (inorder)
BinarySearchTree.prototype.depthFirstIn = function(callback) {
  if (this.left) this.left.depthFirstIn(callback);
  callback(this.value);
  if (this.right) this.right.depthFirstIn(callback);
};

// applies the callback in the order of depth first (postorder)
BinarySearchTree.prototype.depthFirstPost = function(callback) {
  if (this.left) this.left.depthFirstPost(callback);
  if (this.right) this.right.depthFirstPost(callback);
  callback(this.value);
};

// applies the callback in the order of breath first (level order)
BinarySearchTree.prototype.breadthFirst = function(callback) {
  const queue = [];
  let current = this;
  while (current !== undefined) {
    callback(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    current = queue.shift();
  }
};

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function() {
  if (this.left) return this.left.min();
  else return this.value;
};

// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function() {
  if (this.right) return this.right.max();
  else return this.value;
};

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function() {
  // create a height counter
  let height = 0;
  // create a queue and enqueue the root node
  const queue = [];
  queue.push(this);
  // loop
  while (true) {
    let nodeCount = queue.length;
    if (nodeCount > 0) {
      height += 1;
      while (nodeCount > 0) {
        let node = queue.shift();
        nodeCount -= 1;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    } else return height - 1;
  }
};

// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function(item) {
  
};

module.exports = BinarySearchTree;
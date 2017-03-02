function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function(value) {
  const node = new BinarySearchTree(value);
  if (value < this.value) {
    if (this.left) {
      this.left.add(value);
    } else {
      this.left = node;
    }
  }
  if (value > this.value) {
    if (this.right) {
      this.right.add(value);
    } else {
      this.right = node;
    }
  }
  return;
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) return true;
  if (value < this.value && this.left) return this.left.contains(value);
  if (value > this.value && this.right) return this.right.contains(value);
  return false;
};

// applies the callback in the order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function(callback) {

};

// applies the callback in the order of depth first (inorder)
BinarySearchTree.prototype.depthFirstIn = function(callback) {

};

// applies the callback in the order of depth first (postorder)
BinarySearchTree.prototype.depthFirstPost = function(callback) {

};

// applies the callback in the order of breath first (level order)
BinarySearchTree.prototype.breadthFirst = function(callback) {

};

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function() {

};

// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function() {

};

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function() {
  
};

// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function(item) {

};

module.exports = BinarySearchTree;
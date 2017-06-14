const expect = require('chai').expect;
const BinarySearchTree = require('./../src/binary_search_tree');

describe('Binary Search Tree', function() {
  let binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
    // binarySearchTree = Object.create(BinarySearchTree.prototype(5));
  });

  it('should have methods named "add", "contains", "depthFirstPre", "depthFirstIn", "depthFirstPost", "breadthFirst"', function() {
    expect(binarySearchTree.add).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstIn).to.be.a("function");
    expect(binarySearchTree.depthFirstPost).to.be.a("function");
    expect(binarySearchTree.depthFirstPre).to.be.a("function");
    expect(binarySearchTree.breadthFirst).to.be.a("function");
  });

  it('should add values at the correct location in the tree', function(){
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    // expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstPre"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstPre(func);
    expect(array).to.eql([ 5, 2, 3, 7, 6 ]);
  });

  it('should execute a callback on every value in a tree using "depthFirstIn"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstIn(func);
    expect(array).to.eql([2,3,5,6,7]);
  });

  it('should execute a callback on every value in a tree using "depthFirstPost"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstPost(func);
    expect(array).to.eql([ 3, 2, 6, 7, 5 ]);
  });

  it('should execute a callback on every value in a tree using "breadthFirst"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.breadthFirst(func);
    expect(array).to.eql([5,2,7,3,6]);
  });

    // remove x to enable test
  it('min method should return correct minimum value', function() {
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    expect(binarySearchTree.min()).to.eql(2);
  });

  // remove x to enable test
  xit('height method should return correct height', function() {
    binarySearchTree.left = new BinarySearchTree(3);
    binarySearchTree.left.left = new BinarySearchTree(1);
    expect(binarySearchTree.height()).to.eql(2);

    binarySearchTree.left.left.right = new BinarySearchTree(2);
    expect(binarySearchTree.height()).to.eql(3);

    binarySearchTree.left.left.left = new BinarySearchTree(0);
    expect(binarySearchTree.height()).to.eql(3);

    binarySearchTree.right = new BinarySearchTree(8);
    expect(binarySearchTree.height()).to.eql(3);
  });

  // remove x to enable test
  // Note: Make sure your height function works before running this test
  xit('tree should be self-balancing', function() {
    binarySearchTree.add(7);
    binarySearchTree.add(9);
    expect(binarySearchTree.height()).to.eql(1);
    binarySearchTree.add(11);
    binarySearchTree.add(13);
    binarySearchTree.add(15);
    binarySearchTree.add(5);
    binarySearchTree.add(12);
    expect(binarySearchTree.height()).to.eql(2);
  });

  xdescribe('remove method (make sure depthFirstIn passes first)', function() {
    var tree;

    beforeEach(function() {
      tree = new BinarySearchTree(10);
      tree.add(5);
      tree.add(2);
      tree.add(7);
      tree.add(0);
      tree.add(3);
      tree.add(9);
      tree.add(8);
      tree.add(15);
      tree.add(13);
      tree.add(20);
      tree.add(11);
      tree.add(17);
      tree.add(43);
      tree.add(16);
      tree.add(18);
      tree.add(100);
    });

    it('should remove leaf nodes', function() {
      expect(tree.toArray()).to.eql([ 0, 2, 3, 5, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 20, 43, 100 ]);
      tree.remove(3);
      expect(tree.toArray()).to.eql([ 0, 2, 5, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 20, 43, 100 ]);
    });

    it('should remove nodes that have one child', function() {
      tree.remove(7);
      expect(tree.toArray()).to.eql([ 0, 2, 3, 5, 8, 9, 10, 11, 13, 15, 16, 17, 18, 20, 43, 100 ]);
    });

    it('should remove nodes that have two children where the right child has no left child', function() {
      tree.remove(5);
      expect(tree.toArray()).to.eql([ 0, 2, 3, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 20, 43, 100 ]);
      tree.remove(43);
      expect(tree.toArray()).to.eql([ 0, 2, 3, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 20, 100 ]);
    });

    it('should remove nodes with two children where the right child has two children', function() {
      tree.remove(15);
      expect(tree.toArray()).to.eql([ 0, 2, 3, 5, 7, 8, 9, 10, 11, 13, 16, 17, 18, 20, 43, 100 ]);
      tree.remove(20);
      expect(tree.toArray()).to.eql([ 0, 2, 3, 5, 7, 8, 9, 10, 11, 13, 16, 17, 18, 43, 100 ]);
    });

  });

});
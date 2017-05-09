const expect = require('chai').expect;
const LinkedList = require('./../src/ll_kth_node').ll;
const Node = require('./../src/ll_kth_node').nd;

describe('Return kth to last', () => {

  it('should return kth to last element in singly last node', () => {
    const list1 = new LinkedList(1, 2, 3, 4, 5);
    const list2 = new LinkedList(1, 2, 1, 2, 6, 8, 9, 6);
    const list3 = new LinkedList(5, 4, 4, 7, 8);
    expect(list1.kthLast(2)).to.eql(3);
    expect(list2.kthLast(3)).to.eql(6);
    expect(list3.kthLast(0)).to.eql(8);
  });

});




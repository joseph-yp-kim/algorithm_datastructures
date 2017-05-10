const expect = require('chai').expect;
const LinkedList = require('./../src/ll_remove_dupes').ll;
const Node = require('./../src/ll_remove_dupes').nd;

describe('Remove Duplicates from Linked List', () => {

  it('should remove duplicates', () => {
    const list1 = new LinkedList(1, 7, 2, 3, 2);
    const list2 = new LinkedList(4, 2, 1, 2, 6, 8, 9, 6);
    const list3 = new LinkedList(5, 4, 4, 6, 8);
    list1.rmvDupes();
    list2.rmvDupes();
    list3.rmvDupes();
    expect(list1).to.eql(new LinkedList(1, 7, 3));
    expect(list2).to.eql(new LinkedList(4, 1, 8, 9));
    expect(list3).to.eql(new LinkedList(5, 6, 8));
  });

  it('should return origin ll if no duplicates', () => {
    const list1 = new LinkedList(5, 1, 2, 6, 8);
    const list2 = new LinkedList(3, 9, 1, 2);
    list1.rmvDupes();
    list2.rmvDupes();
    expect(list1).to.eql(new LinkedList(5, 1, 2, 6, 8));
    expect(list2).to.eql(new LinkedList(3, 9, 1, 2));
  });

});

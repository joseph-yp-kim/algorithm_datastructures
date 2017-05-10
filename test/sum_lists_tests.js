const expect = require('chai').expect;
const LinkedList = require('./../src/sum_lists').ll;
const Node = require('./../src/sum_lists').nd;
const sumListsReverse = require('./../src/sum_lists').sumListsReverse;
const sumListsForward = require('./../src/sum_lists').sumListsForward;

describe('Sum Linked Lists', () => {

  it('Should sum lists in reverse', () => {
    const list1 = new LinkedList(7, 1, 6);
    const list2 = new LinkedList(5, 9, 2);
    const list3 = new LinkedList(3, 9, 1, 3);
    const list4 = new LinkedList(5, 4, 9, 6);

    expect(sumListsReverse(list1, list2)).to.eql(new LinkedList(2, 1, 9));
    expect(sumListsReverse(list3, list4)).to.eql(new LinkedList(8, 3, 1, 0, 1));
  });

  it('Should sum list in sumListsForward', () => {
    const list1 = new LinkedList(6, 1, 7);
    const list2 = new LinkedList(2, 9, 5);
    const list3 = new LinkedList(3, 1, 9, 3);
    const list4 = new LinkedList(6, 9, 4, 5);

    expect(sumListsForward(list1, list2)).to.eql(new LinkedList(9, 1, 2));
    expect(sumListsForward(list3, list4)).to.eql(new LinkedList(1, 0, 1, 3, 8));
  });
});

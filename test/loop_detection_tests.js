const expect = require('chai').expect;
const loopDetect = require('./../src/loop_detection').ld;
const Node = require('./../src/loop_detection').nd;

describe('Loop Detection', () => {

  it('should return head node if loop detected', () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);
    const n5 = new Node(5);
    const n6 = new Node(6);
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    n5.next = n6;
    n6.next = n3;
    expect(loopDetect(n1)).to.eql(n1);
  });

  it('should return false if no loop detected', () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);
    const n5 = new Node(5);
    const n6 = new Node(6);
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    n5.next = n6;
    expect(loopDetect(n1)).to.eql(false);
  });

});

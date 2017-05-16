const expect = require('chai').expect;
const intersection = require('./../src/intersection').i;
const Node = require('./../src/loop_detection').nd;

describe('Intersection', () => {

  it('Should return intersecting node', () => {
    const a1 = new Node(1);
    const a2 = new Node(2);
    const a3 = new Node(3);
    const a4 = new Node(4);
    const a5 = new Node(5);
    const b1 = new Node(1);
    const b2 = new Node(2);
    a1.next = a2;
    a2.next = a3;
    a3.next = a4;
    a4.next = a5;
    b1.next = b2;
    b2.next = a3;
    expect(intersection(a1, b1)).to.eql(a3);
  });

  it('Should return intersecting node', () => {
    const a1 = new Node(1);
    const a2 = new Node(2);
    const a3 = new Node(3);
    const a4 = new Node(4);
    const b1 = new Node(1);
    const b2 = new Node(2);
    a1.next = a2;
    a2.next = a3;
    a3.next = a4;
    b1.next = b2;
    b2.next = a4;
    expect(intersection(a1, b1)).to.eql(a4);
  });

  it('Should return false if no intersection', () => {
    const a1 = new Node(1);
    const a2 = new Node(2);
    const a3 = new Node(3);
    const a4 = new Node(4);
    const b1 = new Node(1);
    const b2 = new Node(2);
    const b3 = new Node(3);
    const b4 = new Node(4);
    a1.next = a2;
    a2.next = a3;
    a3.next = a4;
    b1.next = b2;
    b2.next = b3;
    b3.next = b4;
    expect(intersection(a1, b1)).to.eql(false);
  });

});

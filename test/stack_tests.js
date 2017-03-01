const expect = require('chai').expect;
const Stack = require('./../src/stack');

describe('Stack', () => {
  let stack, storage;

  beforeEach(() => {
    stack = new Stack();
    storage = stack.storage;
  });

  it('should have a push and pop method', () => {
    expect(stack).to.have.property('push');
    expect(stack).to.have.property('pop');
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
  });

  it('should push elements to stack', () => {
    stack.push(0);
    expect(storage[0]).to.eql(0);
  });

  it('should pop most recently pushed elements', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).to.eql(2);
    expect(stack.pop()).to.eql(1);
  });

  it('should return undefined when popping empty stack', () => {
    expect(stack.pop()).to.eql(undefined);
    stack.push(0);
    stack.push(1);
    expect(stack.pop()).to.eql(1);
    expect(stack.pop()).to.eql(0);
  });
});
const expect = require('chai').expect;
const Queue = require('./../src/queue');

describe('Queue', () => {
  let queue, storage;

  beforeEach(() => {
    queue = new Queue();
    storage = queue.storage;
  });

  it('should have enqueue and dequeue method', () => {
    expect(queue).to.have.property('enqueue');
    expect(queue).to.have.property('dequeue');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.enqueue).to.be.a('function');
  });

  it('should enqueue elements to end of queue', () => {
    queue.enqueue(0);
    // expect(Object.keys(storage)[0]).to.eql(0);
    expect(storage[0]).to.eql(0);
  });

  it('should dequeue elements from front of queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).to.eql(1);
    expect(queue.dequeue()).to.eql(2);
  });

  it('should return undefined when dequeueing empty queue', () => {
    expect(queue.dequeue()).to.eql(undefined);
    queue.enqueue(0);
    queue.enqueue(1);
    expect(queue.dequeue()).to.eql(0);
    expect(queue.dequeue()).to.eql(1);
    expect(queue.dequeue()).to.eql(undefined);
  });

});

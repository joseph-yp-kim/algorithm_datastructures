const expect = require('chai').expect;
const Event = require('./../src/event_constructor');

describe('Event Constructor', () => {
  let event;

  beforeEach(() => {
    event = new Event();
  });

  it('should have a subscribe, unsubscribe, and emit method', () => {
    expect(event).to.have.property('subscribe');
    expect(event).to.have.property('unsubscribe');
    expect(event).to.have.property('emit');
  });

  it('subscribe method should take a function and store it as a handler', () => {
    function f() {
      f.calls = (f.calls || 0) + 1;
      f.args = Array.prototype.slice.call(arguments);
    }
    event.subscribe(f);
    event.emit(1, 'foo', true);
    expect(f.calls).to.eql(1);
    expect(f.args).to.eql([1, 'foo', true]);
  });

  it('unsubscribe method should take a function and remove it from its handler', () => {
    function f() {
      f.calls = (f.calls || 0) + 1;
      f.args = Array.prototype.slice.call(arguments);
    }
    event.subscribe(f);
    event.emit(1, 'foo', true);
    event.unsubscribe(f);
    event.emit(2);
    expect(f.calls).to.eql(1);
  });
});
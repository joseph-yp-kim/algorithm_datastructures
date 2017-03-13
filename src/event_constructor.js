'use strict';

function Event() {
  this.handlers = [];
}

Event.prototype.subscribe = function (func) {
  this.handlers.push(func);
};
  
Event.prototype.unsubscribe = function (func) {
  const index = this.handlers.indexOf(func);
  if (index >= 0) {
    this.handlers.splice(index, 1);
  }
};
  
Event.prototype.emit = function (...args) {
  for (let i = 0; i < this.handlers.length; i += 1) {
    this.handlers[i](...args);
  }
};

module.exports = Event;
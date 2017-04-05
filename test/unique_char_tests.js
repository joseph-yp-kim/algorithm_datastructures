const expect = require('chai').expect;
const uniqueChar = require('./../src/unique_char');

describe('Unique Characters', () => {

  it('should return true if string has only unique characters', () => {
    expect(uniqueChar('hi')).to.eql(true);
    expect(uniqueChar('algorithm')).to.eql(true);
    expect(uniqueChar('computer')).to.eql(true);
  });

  it('should return false if string does not have unique characters', () => {
    expect(uniqueChar('alligator')).to.eql(false);
    expect(uniqueChar('shoes')).to.eql(false);
    expect(uniqueChar('datastructure')).to.eql(false);
  });

});
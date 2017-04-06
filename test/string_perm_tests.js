const expect = require('chai').expect;
const stringPerm = require('./../src/string_perm');

describe('String Permuation', () => {

  it('should return true for valid permutations', () => {
    expect(stringPerm('elvis', 'lives')).to.eql(true);
    expect(stringPerm('silent', 'listen')).to.eql(true);
    expect(stringPerm('dictionary', 'indicatory')).to.eql(true);
  });

  it('should return false for non-valid permutations', () => {
    expect(stringPerm('man', 'woman')).to.eql(false);
    expect(stringPerm('marker', 'pencil')).to.eql(false);
    expect(stringPerm('spiget', 'piglets')).to.eql(false);
  });
});
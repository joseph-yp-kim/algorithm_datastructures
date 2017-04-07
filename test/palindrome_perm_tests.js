const expect = require('chai').expect;
const palinPerm = require('./../src/palindrome_perm');

describe('Palindrome Permutation', () => {

  it('should return true if string permutation is a valid palindrome', () => {
    expect(palinPerm('racecar')).to.eql(true);
    expect(palinPerm('vicic')).to.eql(true);
    expect(palinPerm('Tact Coa')).to.eql(true);
  });

  it('should return false if no string permutations are valid palindromes', () => {
    expect(palinPerm('computer')).to.eql(false);
    expect(palinPerm('airplane')).to.eql(false);
    expect(palinPerm('permutation')).to.eql(false);
  });

});
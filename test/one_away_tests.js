const expect = require('chai').expect;
const oneAway = require('./../src/one_away');

describe('One Away', () => {

  it('should return true if one/zero edit(s) away', () => {
    expect(oneAway('pale', 'ple')).to.eql(true);
    expect(oneAway('pales', 'pale')).to.eql(true);
    expect(oneAway('pale', 'bale')).to.eql(true);
  });

  it('should return false if more than one edit away', () => {
    expect(oneAway('pale', 'bake')).to.eql(false);
    expect(oneAway('joke', 'jones')).to.eql(false);
    expect(oneAway('water', 'taser')).to.eql(false);
  });
});
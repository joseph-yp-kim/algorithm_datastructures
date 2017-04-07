const expect = require('chai').expect;
const urlify = require('./../src/urlify');

describe('URLify', () => {

  it('should return urlified string', () => {
    expect(urlify('Mr John Smith    ', 13)).to.eql('Mr%20John%20Smith');
    expect(urlify('facebook homepage  ', 17)).to.eql('facebook%20homepage');
  });
});
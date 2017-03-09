const expect = require('chai').expect;
const numPyramid = require('./../src/number_pyramid');

describe('String Transformer', () => {
  let n1, n2, n3, n4;

  beforeEach(() => {
    n1 = 0;
    n2 = -15;
    n3 = 7;
    n4 = 1;
    n5 = 4;
  });

  it('should return empty string when n is 0 or negative #', () => {
    expect(numPyramid(n1)).to.eql('');
    expect(numPyramid(n2)).to.eql('');
  });

  it('should return proper number pyramid', () => {
    expect(numPyramid(n3)).to.eql('      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321');
    expect(numPyramid(n4)).to.eql('1');
    expect(numPyramid(n5)).to.eql('   1   \n  121  \n 12321 \n1234321');
  });
});
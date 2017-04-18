const expect = require('chai').expect;
const strCompress = require('./../src/string_compression');

describe('String Compression', () => {

  it('should return compressed string if shorter', () => {
    expect(strCompress('aabcccccaaa')).to.eql('a2b1c5a3');
    expect(strCompress('mmnnnlqrrrr')).to.eql('m2n3l1q1r4');
    expect(strCompress('ApppccEEE')).to.eql('A1p3c2E3');
  });

  it('should return original string if not shorter', () => {
    expect(strCompress('rrlowc')).to.eql('rrlowc');
    expect(strCompress('mqoelzefvw')).to.eql('mqoelzefvw');
    expect(strCompress('yyziemwl')).to.eql('yyziemwl');
  });
});
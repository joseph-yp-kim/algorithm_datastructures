const expect = require('chai').expect;
const strTranformer = require('./../src/string_transformer');

describe('String Transformer', () => {
  let str1, str2, str3, str4;

  beforeEach(() => {
    str1 = '';
    str2 = 'Example string';
    str3 = 'Hello Transformer World';
    str4 = 'Time to say good-bye';
    str5 = 'My initials are JTK';
  });

  it('should return empty string for empty strings', () => {
    expect(strTranformer(str1)).to.eql('');
  });

  it('should return transformed string', () => {
    expect(strTranformer(str2)).to.eql('STRING eXAMPLE');
    expect(strTranformer(str3)).to.eql('wORLD tRANSFORMER hELLO');
    expect(strTranformer(str4)).to.eql('GOOD-BYE SAY TO tIME');
    expect(strTranformer(str5)).to.eql('jtk ARE INITIALS mY');
  });
});
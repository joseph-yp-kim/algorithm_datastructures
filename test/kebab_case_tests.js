const expect = require('chai').expect;
const kebab = require('./../src/kebab-case');

describe('Kebab Case', () => {
  let str1, str2, str3, str4, str5, str6;

  beforeEach(() => {
    str1 = 0;
    str2 = {};
    str3 = 'camelCaseStr';
    str4 = 'ThisIsNextOne';
    str5 = 'CountToNumber5';
    str6 = '';
  });

  it('should return undefined for non-strings', () => {
    expect(kebab(str1)).to.eql(undefined);
    expect(kebab(str2)).to.eql(undefined);
  });

  it('should return empty string for empty strings', () => {
    expect(kebab(str6)).to.eql('');
  });

  it('should return kebab-case format', () => {
    expect(kebab(str3)).to.eql('camel-case-str');
    expect(kebab(str4)).to.eql('this-is-next-one');
    expect(kebab(str5)).to.eql('count-to-number');
  });
});
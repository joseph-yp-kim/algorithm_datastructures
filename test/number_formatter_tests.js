const expect = require('chai').expect;
const numberToPrice = require('./../src/number_formatter');

describe('Format a number to price format', () => {

  it('should return price format for positive numbers and 0', () => {
    expect(numberToPrice(13253.5123)).to.eql('13,253.51');
    expect(numberToPrice(1500.129)).to.eql('1,500.12');
    expect(numberToPrice(1000000.5)).to.eql('1,000,000.50');
    expect(numberToPrice(0)).to.eql('0.00');
  });

  it('should return price format for negative numbers', () => {
    expect(numberToPrice(-5)).to.eql('-5.00');
    expect(numberToPrice(-13253.5123)).to.eql('-13,253.51');
  });

  it("should return a string 'NaN' if the input is not a valid number", () => {
    expect(numberToPrice('@')).to.eql('NaN');
  });

});
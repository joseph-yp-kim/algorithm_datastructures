const expect = require('chai').expect;
const compose = require('./../src/compose');

describe('Function Composition', () => {
  let addOne, multiTwo;

  beforeEach(() => {
    addOne = (a) => a + 1;
    multiTwo = (b) => b * 2;
  });

  it('should return input when no functions composed', () => {
    const uncomposed = compose();
    expect(uncomposed(10)).to.eql(10);
  });

  it('should compose one function (add one and multiply by 2)', () => {
    const addOne1 = compose(addOne);
    expect(addOne1(1)).to.eql(2);
  });

  it('should compose two functions (add one and multiply by 2)', () => {
    const addOneMultTwo = compose(multiTwo, addOne);
    expect(addOneMultTwo(5)).to.eql(12);
    expect(addOneMultTwo(10)).to.eql(22);
  });

  it('should compose three functions (add one and and multiply by 2 twice)', () => {
    const addOneMultTwoTwice = compose(multiTwo, multiTwo, addOne);
    expect(addOneMultTwoTwice(2)).to.eql(12);
    expect(addOneMultTwoTwice(3)).to.eql(16);
  });
});
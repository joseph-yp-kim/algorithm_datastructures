// Write a function that returns the factorial for a given integer
// fyi: factorial function is defined for non-negative integers onl => 0, 1, 2, 3, ...

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let a = 1;
  for (let i = 2; i <= num; i += 1) {
    a *= i;
  }
  return a;
}

module.exports = factorial;
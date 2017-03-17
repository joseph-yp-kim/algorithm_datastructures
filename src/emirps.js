/*
An emirp is a prime number so that when reversed, is also a prime number. This does not
include palindromic prime numbers

Ex: 
17 => 71 emirp
757 => 757 not emirp because it is palindromic

Create a function that receives one argument n, as an upper limit and the output should be 
an array with this structure:

[number of emirps up to n, largest emirp up to n, sum of all the emirps up to n]

if no emirps, then return [0, 0, 0];
*/

function findEmirp(n){
  // edge case: n <= 10
  if (n <= 10) return [0, 0, 0];
  
  // get all prime numbers from 11 to n (single digits do not matter)
  const primes = [];
  for (let i = 11; i <= n; i += 1) {
    if (isPrime(i)) primes.push(i);
  }
  
  // remove all palindromic primes and reversed non-primes
  for (let i = primes.length - 1; i >= 0; i -= 1) {
    if (primes[i].toString() === primes[i].toString().split('').reverse().join('')) {
      primes.splice(i, 1);
    } else {
      const reversed = parseInt(primes[i].toString().split('').reverse().join(''));
      if (!isPrime(reversed)) primes.splice(i, 1);
    }
  }
  // get the number of remaining primes
  const num = primes.length;
  // get the largest prime
  const max = primes[primes.length - 1];
  // get the sum of the primes
  const sum = primes.reduce((a, c) => {
    return a + c;
  });
  // return above 3 as an array in respective order
  return [num, max, sum];
}

function isPrime(number) {
  let start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start === 0) return false;
    start += 1;
  }
  return number > 1;
}

module.exports = findEmirp;
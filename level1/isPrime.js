/**
 * Determines whether the given number is a prime number, i.e. it is not divisible by any integers other than 1 and itself.
 * Returns true or false.
 */


function isPrime(num) {
  if (num <= 1) { return false }
  if (num <= 3) { return true }
  if (num % 2 == 0 || num % 3 == 0) { return false }
  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i == 0 || num % (i + 2) == 0) { return false }
  }
  return true
}
console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(23))

console.log(isPrime(1))
console.log(isPrime(4))
console.log(isPrime(72))
console.log(isPrime(99))

// function isPrime(number)
// { 

//   for (var i=5; i*i<=number; i=i+6)
//   {
//      if (number%i == 0 || number%(i+2) == 0)
//      return false;
//   }

//   return true;
// }

// describe('isPrime', function() {
//   const assert = require("chai").assert;

//   it('should handle 1', function() {
//     assert.isFalse(isPrime(1));
//   });

//   it('should handle 2', function() {
//     assert.isTrue(isPrime(2));
//   });

//   it('should detect primes', function() {
//     assert.isTrue(isPrime(3));
//     assert.isTrue(isPrime(5));
//     assert.isTrue(isPrime(7));
//     assert.isTrue(isPrime(23));
//   });

//   it('should not have false positives', function() {
//     assert.isFalse(isPrime(4));
//     assert.isFalse(isPrime(72));
//     assert.isFalse(isPrime(99));
//     assert.isFalse(isPrime(21));
//     assert.isFalse(isPrime(10));
//   });
// });
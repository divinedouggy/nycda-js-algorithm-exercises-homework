/**
 * Determines whether the given string is a palindrome, i.e. if you were to reverse the order of the characters inside the string, you would get back the original string.
 */

/*Reverse the string
Then do an if-else statement
That returns true if the new string
Is exactly equivalent to the original */

function isPalindrome(string) {
  let result="";
  for (let i = string.length-1; i >= 0; i--) {
    result += string[i]
  }
  if (result===string) {
    return true
  } else {return false}
}

console.log(isPalindrome(""))
console.log(isPalindrome("x"))
console.log(isPalindrome("aa"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("girafarig"))
console.log(isPalindrome("tacocat"))
console.log(isPalindrome("saippuakivikauppias"))
console.log(isPalindrome("stanleyyelnats"))

console.log(isPalindrome("an"))
console.log(isPalindrome("string"))
console.log(isPalindrome("taco cat"))
console.log(isPalindrome("racecars"))

// describe('isPalindrome', function() {
//   const assert = require("chai").assert;

//   it('works for empty string', function() {
//     assert.isTrue(isPalindrome(''));
//   });

//   it('works for single characters', function() {
//     assert.isTrue(isPalindrome('x'));
//     assert.isTrue(isPalindrome('c'));
//   });

//   it('works for double characters', function() {
//     assert.isTrue(isPalindrome('xx'));
//     assert.isTrue(isPalindrome('gg'));
//     assert.isFalse(isPalindrome('af'));
//     assert.isFalse(isPalindrome('yt'));
//   });

//   it('works for words', function() {
//     assert.isTrue(isPalindrome('racecar'));
//     assert.isFalse(isPalindrome('potato'));
//   });
// });
/**
 * Given a string, counts the number of words inside it. Each word is separated by a single space character.
 */


function countWords(string) {
  let strArray = string.split(" ");
  if (string == "") {return 0}
  else {return strArray.length}
}

console.log(countWords("how many words do I contain"))
console.log(countWords("supercalifragilisticexpialadocious"))
console.log(countWords(""))
console.log(countWords("a b c"))



// describe('countWords', function() {
//   const assert = require("chai").assert;

//   it('should work for empty strings', function() {
//     assert.equal(countWords(""), 0);
//   });

//   it('should work for simple strings', function() {
//     assert.equal(countWords("a b c"), 3);
//     assert.equal(countWords("hello"), 1);
//     assert.equal(countWords("hello world"), 2);
//   });
// });
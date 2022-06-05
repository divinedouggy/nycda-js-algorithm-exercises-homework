/**
 * Given an array of numbers, it checks whether it is sorted (in the ascending order). Returns true or false.
 */


function isSorted(arrOfNums) {
  if(arrOfNums.length === 0) {
    return true
  }
  let nextNum = arrOfNums.slice(1);
  for (let i = 0; i < arrOfNums.length; i++) {
    if (nextNum[i] === arrOfNums[i]) {
      continue
    } else if (nextNum[i] > arrOfNums[i]) {
      continue
    } else if (nextNum[i] < arrOfNums[i]) { 
      return false 
    } else {return true}
  }
}



console.log(isSorted([]))
console.log(isSorted([55]))
console.log(isSorted([1,2,3,4]))
console.log(isSorted([-33, 2, 35, 111]))
console.log(isSorted([1,1,1,1,1]))

console.log(isSorted([5,4,3,2,1]))
console.log(isSorted([1,2,3,4,-5]))
console.log(isSorted([33,33,32]))


// describe('isSorted', function() {
//   const assert = require('chai').assert;

//   it('should consider an empty array sorted', function() {
//     assert.isTrue(isSorted([]));
//   });

//   it('should consider a trivial array sorted', function() {
//     assert.isTrue(isSorted([ 1 ]));
//     assert.isTrue(isSorted([ 53 ]));
//   });

//   it('should accept equal values next to each other', function() {
//     assert.isTrue(isSorted([ 3, 3 ]));
//     assert.isTrue(isSorted([ 72, 72, 72, 72 ]));
//   });

//   it('should detect good order', function() {
//     assert.isTrue(isSorted([ 2, 4, 12 ]));
//     assert.isTrue(isSorted([ -1, 0, 1, 90, 122 ]))
//   });

//   it('should not accept descending order', function() {
//     assert.isFalse(isSorted([ 3, 2, 1 ]));
//     assert.isFalse(isSorted([ 92, 12, 0, -50 ]));
//   });

//   it('should not choose chaos over order', function() {
//     assert.isFalse(isSorted([ 1, 5, 3 ]));
//     assert.isFalse(isSorted([ 7, 8, 9, 2 ]));
//     assert.isFalse(isSorted([ 0, 0, 3, 0 ]));
//   });
// });
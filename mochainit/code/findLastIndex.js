// This method is like Array.prototype.findIndex except that it iterates over elements of collection from right to left.

// Arguments :
// array (Array): The array to inspect.

// [predicate= T] (Function): The function invoked per iteration.

// Note: Here T Means A function that always returns true.

// Returns :
// (Number): Returns the index of the found element, else -1.

// Example
// findLastIndex([5, 12, 6, 130, 8])
// // => 4

// findLastIndex([1,2,3,4,5], (value, index, array) => value % 2 === 0)
// // => 3

// findLastIndex([1,2,3,4], (value, index, array) => value + value === 10)
// // => -1
var findLastIndex;
findLastIndex = function(value,index,arr){
//code here
};

module.exports =findLastIndex;
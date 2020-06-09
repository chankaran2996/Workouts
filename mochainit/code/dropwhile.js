// Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

// Arguments :
// array (Array): The array to query.

// [predicate= T] (Function): The function invoked per iteration.

// Note: Here T Means A function that always returns true.

// Returns :
// (Array): Returns the slice of array.

// Example
// dropRightWhile([1,2,3,4,5])
// // => []

// dropRightWhile([1,2,3,4,5], (value, index, array) => value % 2 === 0)
// // => [1, 3, 5]

var dropWhile;
dropWhile = function(value,index,arr){
//code here
};

module.exports = dropWhile;
/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {
var index = target; // Set target to a value;
if ( index > array.length || index < 0) { // Set up a conditional
    return null;
} else {
    for  ( let i = 0; i < array.length; i++){ // Iterate through array
        if (index === array[i]) {
        index = array[i]-1;
        // console.log(index);
    }
}
return index
}
}
console.log(binarySearch([1, 2, 3, 4, 5],4 ));
